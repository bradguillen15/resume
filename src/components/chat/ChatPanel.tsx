import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useChat } from '@/hooks/useChat';
import { MAX_MESSAGE_LENGTH, SUGGESTED_QUESTIONS } from '@/lib/chat';
import { resume } from '@/data/resume';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TypingDots = () => (
  <span className="inline-flex items-center gap-1 py-1" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-text-muted motion-safe:animate-bounce"
        style={{ animationDelay: `${i * 150}ms` }}
      />
    ))}
  </span>
);

export const ChatPanel = ({ open, onOpenChange }: Props) => {
  const { messages, status, errorMessage, sendMessage, retry } = useChat();
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const isStreaming = status === 'streaming';
  const lastMessage = messages[messages.length - 1];
  const waitingForFirstChunk =
    isStreaming && lastMessage?.role === 'assistant' && lastMessage.content === '';
  const lastCompleted =
    status === 'idle' && lastMessage?.role === 'assistant' ? lastMessage.content : '';

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    // On mobile the panel is fullscreen; auto-focusing pops the keyboard
    // immediately and covers half the chat, so only do it on the desktop
    // floating widget (sm breakpoint and up).
    if (window.matchMedia('(min-width: 640px)').matches) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.left = '0';
    style.right = '0';
    return () => {
      style.position = '';
      style.top = '';
      style.left = '';
      style.right = '';
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  const handleSend = (text: string) => {
    if (isStreaming || !text.trim()) return;
    setInput('');
    void sendMessage(text);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="Chat with AI Brad"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-[60] flex h-[100dvh] w-full flex-col overflow-hidden bg-bg-secondary sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(75dvh,640px)] sm:w-[min(400px,calc(100vw-2rem))] sm:rounded-2xl sm:border sm:border-border-strong sm:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <header className="flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <div className="min-w-0">
              <h2 className="text-[14px] font-medium text-text-primary">AI Brad</h2>
              <p className="mt-0.5 text-[11px] leading-[1.45] text-text-muted">
                Grounded in my real experience. It can make mistakes; for anything
                important, contact the real Brad.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close chat"
              className="shrink-0 rounded-md p-1 text-text-muted transition-colors duration-200 hover:bg-bg-hover hover:text-text-primary cursor-pointer"
            >
              <X className="h-5 w-5 sm:h-4 sm:w-4" />
            </button>
          </header>

          <div
            ref={listRef}
            className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.length === 0 && (
              <div className="mt-1 flex flex-col gap-2">
                <p className="mb-1 text-[12px] text-text-secondary">
                  Ask me anything about {resume.name.split(' ')[0]}'s experience,
                  projects, or how he works.
                </p>
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSend(q)}
                    className="cursor-pointer rounded-lg border border-border bg-bg-primary px-3 py-2 text-left text-[12px] text-text-secondary transition-colors duration-200 hover:border-accent/60 hover:text-text-primary"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13px] leading-[1.6] whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'border border-accent/30 bg-accent-dim text-text-primary'
                      : 'border border-border bg-bg-primary text-text-secondary'
                  }`}
                >
                  {msg.role === 'assistant' && msg.content === '' ? (
                    <TypingDots />
                  ) : (
                    msg.content
                  )}
                </div>
              </motion.div>
            ))}

            {status === 'error' && errorMessage && (
              <div
                role="alert"
                className="rounded-lg border border-red-400/30 bg-red-400/5 px-3 py-2.5 text-[12px] text-[#f87171]"
              >
                {errorMessage}{' '}
                <button
                  type="button"
                  onClick={retry}
                  className="cursor-pointer underline underline-offset-2 hover:text-red-300"
                >
                  Retry
                </button>
              </div>
            )}
          </div>

          <div className="sr-only" aria-live="polite">
            {lastCompleted}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex shrink-0 items-end gap-2 border-t border-border p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(input);
                }
              }}
              rows={1}
              maxLength={MAX_MESSAGE_LENGTH}
              disabled={isStreaming}
              placeholder={waitingForFirstChunk ? 'Thinking...' : 'Ask about my experience...'}
              aria-label="Message AI Brad"
              className="flex-1 resize-none rounded-lg border border-border bg-bg-primary px-3 py-2 text-[13px] text-text-primary placeholder:text-text-muted focus:border-accent/60 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              className="cursor-pointer rounded-lg bg-accent px-3.5 py-2 font-mono text-[12px] text-[#0A0A0F] transition-colors duration-200 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
