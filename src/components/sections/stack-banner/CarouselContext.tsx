import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ROTATE_MS } from './constants';
import { STACK_CATEGORIES } from './data';
import type { StackCategoryId } from './types';

type Indices = Record<StackCategoryId, number>;

const INITIAL_INDICES = Object.fromEntries(
  STACK_CATEGORIES.map((c) => [c.id, 0]),
) as Indices;

interface CarouselContextValue {
  indices: Indices;
  advance: (id: StackCategoryId) => void;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export function CarouselProvider({
  paused,
  children,
}: {
  paused: boolean;
  children: ReactNode;
}) {
  const [indices, setIndices] = useState<Indices>(INITIAL_INDICES);

  const advance = useCallback((id: StackCategoryId) => {
    const category = STACK_CATEGORIES.find((c) => c.id === id);
    if (!category) return;
    setIndices((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % category.items.length,
    }));
  }, []);

  useEffect(() => {
    if (paused) return;
    const timerId = window.setInterval(() => {
      setIndices((prev) => {
        const next = { ...prev };
        for (const category of STACK_CATEGORIES) {
          next[category.id] = (prev[category.id] + 1) % category.items.length;
        }
        return next;
      });
    }, ROTATE_MS);
    return () => window.clearInterval(timerId);
  }, [paused]);

  const value = useMemo(() => ({ indices, advance }), [indices, advance]);

  return (
    <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
  );
}

export function useCarouselState() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarouselState must be used within CarouselProvider');
  }
  return context;
}
