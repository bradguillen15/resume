// Keep limits in sync with functions/chat.js
export const MAX_MESSAGES = 20
export const MAX_MESSAGE_LENGTH = 2000
export const HISTORY_SENT_TO_SERVER = 12

export type ChatRole = "user" | "assistant"

export interface ChatMessage {
  role: ChatRole
  content: string
}

export interface ChatRequest {
  messages: ChatMessage[]
}

export interface ChatChunk {
  text: string
}

export interface ChatResult {
  text: string
  done: true
}

export const SUGGESTED_QUESTIONS = [
  "What's your leadership style?",
  "Tell me about your biggest project",
  "What are your core strengths?",
  "What kind of role are you looking for?",
] as const

const GENERIC_ERROR_MESSAGE =
  "Something went wrong talking to AI Brad. Try again, or contact the real Brad below."

const DEFAULT_RATE_LIMIT_MESSAGE =
  "The chat is taking a breather (rate limit reached). Try again in a bit, or reach out through the contact form."

function parseFunctionsError(err: unknown): { code: string; message: string } {
  if (!err || typeof err !== "object") return { code: "", message: "" }
  const code = "code" in err && err.code != null ? String(err.code) : ""
  const message =
    "message" in err && err.message != null ? String(err.message) : ""
  return { code, message }
}

function looksLikeInternalError(message: string): boolean {
  return (
    !message ||
    message.includes("INTERNAL") ||
    message.includes("Error:") ||
    message.length > 300
  )
}

function preferServerMessage(message: string, fallback: string): string {
  return looksLikeInternalError(message) ? fallback : message
}

export function getChatErrorMessage(err: unknown): string {
  const { code, message } = parseFunctionsError(err)

  if (code === "functions/resource-exhausted") {
    return preferServerMessage(message, DEFAULT_RATE_LIMIT_MESSAGE)
  }

  if (code === "functions/failed-precondition") {
    return preferServerMessage(
      message,
      "Chat is not available right now. Try the contact form to reach the real Brad."
    )
  }

  if (code === "functions/unavailable") {
    return preferServerMessage(
      message,
      "The AI is temporarily unavailable. Please try again in a bit."
    )
  }

  if (code === "functions/invalid-argument") {
    return preferServerMessage(
      message,
      "That message could not be sent. Try a shorter question."
    )
  }

  return GENERIC_ERROR_MESSAGE
}
