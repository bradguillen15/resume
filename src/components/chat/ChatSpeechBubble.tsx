import { motion } from 'framer-motion';

interface Props {
  onClick: () => void;
  hidden?: boolean;
  className?: string;
}

export const ChatSpeechBubble = ({ onClick, hidden = false, className = '' }: Props) => {
  if (hidden) return null;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.92, y: 4 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.35, ease: 'easeOut' }}
      onClick={onClick}
      aria-label="Open chat with AI Brad"
      className={`chat-speech-bubble group absolute z-10 max-w-[9.5rem] cursor-pointer text-center transition-transform duration-200 hover:scale-[1.03] ${className}`}
    >
      <span className="block font-mono text-[9px] leading-[1.35] tracking-[0.03em] text-accent group-hover:text-text-primary">
        Ask AI Brad
      </span>
      <span className="block font-mono text-[9px] leading-[1.35] tracking-[0.03em] text-text-muted group-hover:text-text-secondary">
        about my experience
      </span>
    </motion.button>
  );
};
