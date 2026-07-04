const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const db = admin.firestore();

const { getClientIp, hashIp, checkRateLimitAndRecord } = require("./rate-limit");

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
    try {
      const ip = getClientIp(request);
      const ipHash = hashIp(ip);

      await checkRateLimitAndRecord(ipHash, "review");

      const { name, email, role, message, linkedInUrl } = request.data || {};
      if (!name || !email || !role || !message) {
        throw new HttpsError("invalid-argument", "Faltan nombre, email, role o mensaje.");
      }

      const trimmedMessage = String(message).trim();

      const rawLinkedIn = linkedInUrl != null ? String(linkedInUrl).trim() : "";
      if (!rawLinkedIn) {
        throw new HttpsError("invalid-argument", "Falta la URL de LinkedIn.");
      }

      let url;
      try {
        url = new URL(rawLinkedIn.startsWith("http") ? rawLinkedIn : `https://${rawLinkedIn}`);
      } catch {
        throw new HttpsError("invalid-argument", "La URL de LinkedIn no es válida.");
      }
      const host = url.hostname.replace(/^www\./, "").toLowerCase();
      if (host !== "linkedin.com" && !host.endsWith(".linkedin.com")) {
        throw new HttpsError("invalid-argument", "La URL debe ser un perfil de LinkedIn.");
      }
      const linkedInStored = url.href;

      const date = new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

      await db.collection("reviews").add({
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        role: String(role).trim(),
        message: trimmedMessage,
        linkedInUrl: linkedInStored,
        date,
        status: "pending",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return { success: true };
    } catch (err) {
      if (err instanceof HttpsError) throw err;
      console.error("submitReview error:", err);
      throw new HttpsError("internal", err.message || "Error al enviar el review.");
    }
  }
);

exports.chatWithBrad = require("./chat").chatWithBrad;
