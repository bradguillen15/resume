import { useCallback, useRef, useState } from "react"
import { chatWithBradFn } from "@/lib/firebase"
import {
  getChatErrorMessage,
  HISTORY_SENT_TO_SERVER,
  MAX_MESSAGE_LENGTH,
  type ChatMessage,
} from "@/lib/chat"

export type ChatStatus = "idle" | "streaming" | "error"

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [status, setStatus] = useState<ChatStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const messagesRef = useRef<ChatMessage[]>([])
  const requestIdRef = useRef(0)

  const updateMessages = useCallback(
    (updater: (prev: ChatMessage[]) => ChatMessage[]) => {
      messagesRef.current = updater(messagesRef.current)
      setMessages(messagesRef.current)
    },
    []
  )

  const sendMessage = useCallback(
    async (text: string) => {
      const content = text.trim()
      if (!content || content.length > MAX_MESSAGE_LENGTH) return
      if (requestIdRef.current > 0 && status === "streaming") return

      const requestId = ++requestIdRef.current
      setStatus("streaming")
      setErrorMessage("")

      const history = [...messagesRef.current, { role: "user" as const, content }]
      const outgoing = history.slice(-HISTORY_SENT_TO_SERVER)
      updateMessages(() => [...history, { role: "assistant", content: "" }])

      try {
        const { stream, data } = await chatWithBradFn.stream({
          messages: outgoing,
        })

        const streamDone = (async () => {
          try {
            for await (const chunk of stream) {
              if (requestIdRef.current !== requestId) return
              const chunkText = chunk?.text
              if (!chunkText) continue
              updateMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                next[next.length - 1] = {
                  ...last,
                  content: last.content + chunkText,
                }
                return next
              })
            }
          } catch {
            // Non-SSE or parse errors; final text still comes from data.
          }
        })()

        const [, final] = await Promise.all([streamDone, data])
        if (requestIdRef.current !== requestId) return
        updateMessages((prev) => {
          const next = [...prev]
          next[next.length - 1] = { role: "assistant", content: final.text }
          return next
        })
        setStatus("idle")
      } catch (err: unknown) {
        if (requestIdRef.current !== requestId) return
        updateMessages((prev) =>
          prev[prev.length - 1]?.role === "assistant"
            ? prev.slice(0, -1)
            : prev
        )
        setStatus("error")
        setErrorMessage(getChatErrorMessage(err))
      }
    },
    [status, updateMessages]
  )

  const retry = useCallback(() => {
    const lastUser = [...messagesRef.current]
      .reverse()
      .find((m) => m.role === "user")
    if (!lastUser) return
    updateMessages((prev) => {
      const idx = prev.map((m) => m.role).lastIndexOf("user")
      return idx === -1 ? prev : [...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
    void sendMessage(lastUser.content)
  }, [sendMessage, updateMessages])

  return { messages, status, errorMessage, sendMessage, retry }
}
