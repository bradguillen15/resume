import { useEffect, useState } from 'react';
import { CarouselProvider, useCarouselState } from './CarouselContext';
import { DeviceMockups } from './DeviceMockups';
import { DualChannels } from './DualChannels';
import { PauseButton } from './PauseButton';
import { RotatingStackCard } from './RotatingStackCard';
import { WIRE_GAP, WIRE_GAP_Y } from './constants';
import type { StackCategoryId } from './types';
import { VerticalWireBar, WireBar } from './WireBar';

const LG_MEDIA_QUERY = '(min-width: 1024px)';

function useLargeScreen(): boolean {
  const [isLarge, setIsLarge] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(LG_MEDIA_QUERY).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(LG_MEDIA_QUERY);
    const onChange = (event: MediaQueryListEvent) => setIsLarge(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return isLarge;
}

function CategoryCard({ categoryId }: { categoryId: StackCategoryId }) {
  const { indices, advance } = useCarouselState();
  const index =
    categoryId === 'Frontend'
      ? indices.Frontend
      : categoryId === 'Backend'
        ? indices.Backend
        : categoryId === 'Database'
          ? indices.Database
          : indices.AI;

  return (
    <RotatingStackCard
      categoryId={categoryId}
      index={index}
      onAdvance={() => advance(categoryId)}
    />
  );
}

function StackNodes({ layout }: { layout: 'mobile' | 'desktop' }) {
  const isDesktop = layout === 'desktop';
  const Connector = isDesktop ? WireBar : VerticalWireBar;

  return (
    <>
      <DeviceMockups />
      <Connector />
      <CategoryCard categoryId="Frontend" />
      <Connector />
      <CategoryCard categoryId="Backend" />
      <DualChannels layout={isDesktop ? 'column' : 'fork'}>
        <CategoryCard categoryId="Database" />
        <CategoryCard categoryId="AI" />
      </DualChannels>
    </>
  );
}

function StackBannerFlow() {
  const isDesktop = useLargeScreen();

  if (isDesktop) {
    return (
      <div className="w-full min-w-0 overflow-x-auto pt-9">
        <div className="inline-flex min-w-full justify-center">
          <div className={`flex items-center ${WIRE_GAP}`}>
            <StackNodes layout="desktop" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center w-full pt-9 px-2 ${WIRE_GAP_Y}`}>
      <StackNodes layout="mobile" />
    </div>
  );
}

export function StackBanner() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative w-full border-b border-border bg-gradient-to-b from-bg-secondary to-bg-primary py-8 sm:py-12 lg:py-14 px-3 sm:px-5 lg:px-8 overflow-hidden">
      <PauseButton paused={paused} onToggle={() => setPaused((p) => !p)} />

      <CarouselProvider paused={paused}>
        <StackBannerFlow />
      </CarouselProvider>
    </section>
  );
}
