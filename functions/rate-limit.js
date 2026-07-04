const { HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

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

function getBlockedUntilMillis(data) {
  if (!data || !data.blockedUntil) return 0;
  const v = data.blockedUntil;
  if (typeof v.toMillis === "function") return v.toMillis();
  if (typeof v === "number") return v;
  return 0;
}

async function checkRateLimitAndRecord(ipHash, type, opts = {}) {
  const {
    maxPerWindow = MAX_SUBMISSIONS_PER_WINDOW,
    windowMs = RATE_WINDOW_MS,
    blockMs = BLOCK_DURATION_MS,
    limitMessage = "Demasiados envíos. Intenta de nuevo más tarde.",
  } = opts;
  const db = admin.firestore();
  const now = Date.now();
  const windowStartTimestamp = admin.firestore.Timestamp.fromMillis(now - windowMs);

  const blockedRef = db.collection("blocked_ips").doc(`${ipHash}_${type}`);
  const blockedSnap = await blockedRef.get();
  if (blockedSnap.exists) {
    const blockedUntil = getBlockedUntilMillis(blockedSnap.data());
    if (blockedUntil > now) {
      throw new HttpsError("resource-exhausted", limitMessage);
    }
  }

  const logSnap = await db
    .collection("submission_log")
    .where("ipHash", "==", ipHash)
    .where("type", "==", type)
    .where("createdAt", ">", windowStartTimestamp)
    .orderBy("createdAt", "asc")
    .get();

  if (logSnap.size >= maxPerWindow) {
    await blockedRef.set({
      blockedUntil: admin.firestore.Timestamp.fromMillis(now + blockMs),
    });
    throw new HttpsError("resource-exhausted", limitMessage);
  }

  await db.collection("submission_log").add({
    ipHash,
    type,
    createdAt: admin.firestore.Timestamp.fromMillis(now),
  });
}

module.exports = { getClientIp, hashIp, checkRateLimitAndRecord };
