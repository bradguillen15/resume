const RATE_LIMIT_MESSAGE = "Too many submissions. Try again in an hour."

export function parseFunctionsError(err: unknown): { code: string; message: string } {
  if (!err || typeof err !== "object") return { code: "", message: "" }
  const code = "code" in err && err.code != null ? String(err.code) : ""
  const message =
    "message" in err && err.message != null ? String(err.message) : ""
  return { code, message }
}

export function getSubmitErrorMessage(err: unknown, fallback: string): string {
  const { code, message } = parseFunctionsError(err)
  if (code === "functions/resource-exhausted" || message.includes("Demasiados")) {
    return RATE_LIMIT_MESSAGE
  }
  return fallback
}
