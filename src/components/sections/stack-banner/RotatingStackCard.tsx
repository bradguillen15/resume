import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getSkillColor, getSkillIcon } from '@/lib/skillIcons';
import { CARD_CLASS } from './constants';
import { STACK_CATEGORY_BY_ID } from './data';
import type { StackCategoryId } from './types';

const FADE_TRANSITION = { duration: 0.2, ease: 'easeOut' as const };

interface RotatingStackCardProps {
  categoryId: StackCategoryId;
  index: number;
  onAdvance: () => void;
}

export const RotatingStackCard = memo(
  function RotatingStackCard({ categoryId, index, onAdvance }: RotatingStackCardProps) {
    const category = STACK_CATEGORY_BY_ID[categoryId];
    const name = category.items[index];
    const Icon = getSkillIcon(name);
    const color = getSkillColor(name);

    return (
      <button
        type="button"
        onClick={onAdvance}
        aria-label={`${categoryId}: ${name}. Click for next technology.`}
        className={`${CARD_CLASS} cursor-pointer transition-colors duration-200 hover:border-accent/50 hover:bg-bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      >
        <span className="text-[9px] sm:text-[10px] font-mono font-medium text-accent tracking-[0.12em] uppercase leading-none">
          {categoryId}
        </span>

        <div className="relative flex flex-1 items-center justify-center w-full min-h-0">
          <AnimatePresence mode="wait" initial={false}>
            {Icon ? (
              <motion.div
                key={`${categoryId}-icon-${name}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={FADE_TRANSITION}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Icon size={38} color={color} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="relative h-3.5 w-full overflow-hidden shrink-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={`${categoryId}-label-${name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE_TRANSITION}
              className="absolute inset-x-0 text-[9px] sm:text-[10px] font-mono font-medium text-text-primary text-center leading-tight truncate px-0.5"
            >
              {name}
            </motion.p>
          </AnimatePresence>
        </div>
      </button>
    );
  },
  (prev, next) => prev.categoryId === next.categoryId && prev.index === next.index,
);
