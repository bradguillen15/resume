const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const db = admin.firestore();

const BLOCK_DURATION_MS = 60 * 60 * 1000; // 1h
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1h
const MAX_SUBMISSIONS_PER_WINDOW = 5;

function getClientIp(context) {
  const req = context.rawRequest;
  if (!req) return "unknown";
  const forwarded = req.headers["x-forwarded-for"] || req.headers["x-appengine-user-ip"];
  if (forwarded) {
    const first = typeof forwarded === "string" ? forwarded.split(",")[0] : forwarded[0];
    return (first || "").trim() || "unknown";
  }
  return req.connection?.remoteAddress || req.socket?.remoteAddress || "unknown";
}

function hashIp(ip) {
  const crypto = require("crypto");
  return crypto.createHash("sha256").update(ip).digest("hex");
}

async function checkRateLimitAndRecord(ipHash, type) {
  const now = Date.now();
  const oneHourAgo = new Date(now - RATE_WINDOW_MS);

  const blockedRef = db.collection("blocked_ips").doc(ipHash);
  const blockedSnap = await blockedRef.get();
  if (blockedSnap.exists) {
    const blockedUntil = blockedSnap.data().blockedUntil?.toMillis?.() ?? 0;
    if (blockedUntil > now) {
      throw new HttpsError("resource-exhausted", "Demasiados envíos. Intenta de nuevo más tarde.");
    }
  }

  const logSnap = await db
    .collection("submission_log")
    .where("ipHash", "==", ipHash)
    .where("createdAt", ">", oneHourAgo)
    .get();

  if (logSnap.size >= MAX_SUBMISSIONS_PER_WINDOW) {
    await blockedRef.set({
      blockedUntil: admin.firestore.Timestamp.fromMillis(now + BLOCK_DURATION_MS),
    });
    throw new HttpsError("resource-exhausted", "Demasiados envíos. Intenta de nuevo en 1 hora.");
  }

  await db.collection("submission_log").add({
    ipHash,
    type,
    createdAt: admin.firestore.Timestamp.fromMillis(now),
  });
}

exports.sendContactEmail = onCall(
  {
    region: "us-central1",
  },
  async (request) => {
    const ip = getClientIp(request);
    const ipHash = hashIp(ip);

    await checkRateLimitAndRecord(ipHash, "contact");

    const { name, email, message } = request.data || {};
    if (!name || !email || !message) {
      throw new HttpsError("invalid-argument", "Faltan nombre, email o mensaje.");
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER;
    if (!toEmail) {
      throw new HttpsError("failed-precondition", "Contact email not configured.");
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) {
      throw new HttpsError("failed-precondition", "Gmail not configured.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to: toEmail,
      replyTo: email,
      subject: `[Resume] Contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true };
  }
);

exports.submitReview = onCall(
  {
    region: "us-central1",
  },
  async (request) => {
    const ip = getClientIp(request);
    const ipHash = hashIp(ip);

    await checkRateLimitAndRecord(ipHash, "review");

    const { name, email, role, message } = request.data || {};
    if (!name || !email || !message) {
      throw new HttpsError("invalid-argument", "Faltan nombre, email o mensaje.");
    }

    const trimmedMessage = String(message).trim();
    if (trimmedMessage.length > 500) {
      throw new HttpsError("invalid-argument", "El mensaje no puede superar 500 caracteres.");
    }

    const date = new Date().toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    await db.collection("reviews").add({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      role: role ? String(role).trim() : "",
      message: trimmedMessage,
      date,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  }
);
