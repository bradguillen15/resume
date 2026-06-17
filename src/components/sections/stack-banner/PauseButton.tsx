import { Pause, Play } from 'lucide-react';

interface PauseButtonProps {
  paused: boolean;
  onToggle: () => void;
}

export function PauseButton({ paused, onToggle }: PauseButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? 'Resume technology rotation' : 'Pause technology rotation'}
      aria-pressed={paused}
      className="absolute top-3 left-3 z-20 flex items-center justify-center w-8 h-8 rounded-lg border border-border bg-bg-secondary/95 text-text-muted hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
    >
      {paused ? (
        <Play className="w-3.5 h-3.5" aria-hidden />
      ) : (
        <Pause className="w-3.5 h-3.5" aria-hidden />
      )}
    </button>
  );
}
