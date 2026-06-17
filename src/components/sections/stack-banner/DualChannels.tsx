import { memo, type ReactNode } from 'react';
import { DUAL_CHANNEL_GAP, WIRE_GAP, WIRE_GAP_Y } from './constants';
import { VerticalWireBar, WireBar } from './WireBar';

interface DualChannelsProps {
  children: [ReactNode, ReactNode];
  /** column = desktop (horizontal wires, stacked rows); fork = mobile (vertical drops, side by side) */
  layout?: 'column' | 'fork';
}

export const DualChannels = memo(function DualChannels({
  children,
  layout = 'column',
}: DualChannelsProps) {
  if (layout === 'fork') {
    return (
      <div className="flex flex-row items-start justify-center gap-x-6 sm:gap-x-10 w-full max-w-[280px] sm:max-w-none">
        <div className={`flex flex-col items-center ${WIRE_GAP_Y}`}>
          <VerticalWireBar size="fork" />
          {children[0]}
        </div>
        <div className={`flex flex-col items-center ${WIRE_GAP_Y}`}>
          <VerticalWireBar size="fork" />
          {children[1]}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${DUAL_CHANNEL_GAP} shrink-0`}>
      <div className={`flex items-center ${WIRE_GAP}`}>
        <WireBar />
        {children[0]}
      </div>
      <div className={`flex items-center ${WIRE_GAP}`}>
        <WireBar />
        {children[1]}
      </div>
    </div>
  );
});
