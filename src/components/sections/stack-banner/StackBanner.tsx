import { useCallback, useState } from 'react';
import { CarouselProvider, useCarouselState } from './CarouselContext';
import { DeviceMockups } from './DeviceMockups';
import { DualChannels } from './DualChannels';
import { PauseButton } from './PauseButton';
import { RotatingStackCard } from './RotatingStackCard';
import { WIRE_GAP, WIRE_GAP_Y } from './constants';
import { VerticalWireBar, WireBar } from './WireBar';

function StackBannerFlow() {
  const { indices, advance } = useCarouselState();

  const advanceFrontend = useCallback(() => advance('Frontend'), [advance]);
  const advanceBackend = useCallback(() => advance('Backend'), [advance]);
  const advanceDatabase = useCallback(() => advance('Database'), [advance]);
  const advanceAi = useCallback(() => advance('AI'), [advance]);

  return (
    <>
      {/* Mobile / tablet — vertical stack, no horizontal scroll */}
      <div className={`lg:hidden flex flex-col items-center w-full pt-9 px-2 ${WIRE_GAP_Y}`}>
        <DeviceMockups />
        <VerticalWireBar />
        <RotatingStackCard
          categoryId="Frontend"
          index={indices.Frontend}
          onAdvance={advanceFrontend}
        />
        <VerticalWireBar />
        <RotatingStackCard
          categoryId="Backend"
          index={indices.Backend}
          onAdvance={advanceBackend}
        />
        <DualChannels layout="fork">
          <RotatingStackCard
            categoryId="Database"
            index={indices.Database}
            onAdvance={advanceDatabase}
          />
          <RotatingStackCard
            categoryId="AI"
            index={indices.AI}
            onAdvance={advanceAi}
          />
        </DualChannels>
      </div>

      {/* Desktop — horizontal flow */}
      <div className="hidden lg:block w-full min-w-0 overflow-x-auto pt-9 pl-12">
        <div className={`flex items-center min-w-max ${WIRE_GAP}`}>
          <DeviceMockups />
          <WireBar />
          <RotatingStackCard
            categoryId="Frontend"
            index={indices.Frontend}
            onAdvance={advanceFrontend}
          />
          <WireBar />
          <RotatingStackCard
            categoryId="Backend"
            index={indices.Backend}
            onAdvance={advanceBackend}
          />
          <DualChannels>
            <RotatingStackCard
              categoryId="Database"
              index={indices.Database}
              onAdvance={advanceDatabase}
            />
            <RotatingStackCard
              categoryId="AI"
              index={indices.AI}
              onAdvance={advanceAi}
            />
          </DualChannels>
        </div>
      </div>
    </>
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
