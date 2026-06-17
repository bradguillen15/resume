import { memo } from 'react';
import {
  WIRE_CLASS,
  WIRE_FORK_VERTICAL_CLASS,
  WIRE_VERTICAL_CLASS,
} from './constants';

const SHIMMER_HORIZONTAL = 'stack-wire-shimmer';
const SHIMMER_VERTICAL = 'stack-wire-shimmer-vertical';

/** Horizontal connector */
export const WireBar = memo(function WireBar() {
  return (
    <div
      className={`relative h-px bg-border-strong overflow-hidden ${WIRE_CLASS}`}
      aria-hidden
    >
      <span className={SHIMMER_HORIZONTAL} />
    </div>
  );
});

type VerticalWireSize = 'default' | 'fork';

/** Vertical connector — same shimmer on mobile and desktop */
export const VerticalWireBar = memo(function VerticalWireBar({
  size = 'default',
}: {
  size?: VerticalWireSize;
}) {
  const sizeClass = size === 'fork' ? WIRE_FORK_VERTICAL_CLASS : WIRE_VERTICAL_CLASS;

  return (
    <div
      className={`relative bg-border-strong overflow-hidden ${sizeClass}`}
      aria-hidden
    >
      <span className={SHIMMER_VERTICAL} />
    </div>
  );
});
