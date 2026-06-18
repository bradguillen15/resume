import { memo } from 'react';
import {
  WIRE_CLASS,
  WIRE_FORK_VERTICAL_CLASS,
  WIRE_VERTICAL_CLASS,
} from './constants';

const WIRE_DOT_HORIZONTAL = 'stack-wire-dot';
const WIRE_DOT_VERTICAL = 'stack-wire-dot-vertical';

/** Horizontal connector */
export const WireBar = memo(function WireBar() {
  return (
    <div
      className={`relative flex items-center overflow-visible ${WIRE_CLASS}`}
      aria-hidden
    >
      <div className="relative h-px w-full bg-border-strong overflow-visible">
        <span className={WIRE_DOT_HORIZONTAL} />
      </div>
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
      className={`relative flex justify-center overflow-visible ${sizeClass}`}
      aria-hidden
    >
      <div className="relative h-full w-px bg-border-strong overflow-visible">
        <span className={WIRE_DOT_VERTICAL} />
      </div>
    </div>
  );
});
