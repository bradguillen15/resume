import { memo } from 'react';

export const DeviceMockups = memo(function DeviceMockups() {
  return (
    <div className="relative flex items-end justify-center shrink-0">
      <svg
        viewBox="0 0 220 150"
        fill="none"
        className="relative z-0 w-[140px] sm:w-[185px] lg:w-[210px] shrink-0 drop-shadow-[0_8px_24px_rgba(14,165,233,0.12)]"
        aria-hidden
      >
        <rect x=".5" y=".5" width="219" height="149" rx="8" fill="#1a2236" stroke="#475569" />
        <rect x=".5" y=".5" width="219" height="28" rx="8" fill="#243044" />
        <rect x=".5" y="20" width="219" height="8" fill="#243044" />
        <circle cx="14" cy="14" r="4" fill="#f87171" />
        <circle cx="26" cy="14" r="4" fill="#f59e0b" />
        <circle cx="38" cy="14" r="4" fill="#22c55e" />
        <rect x="52" y="8" width="116" height="13" rx="4" fill="#334155" />
        <rect x="14" y="40" width="160" height="8" rx="2" fill="#475569" />
        <rect x="14" y="54" width="110" height="8" rx="2" fill="#475569" />
        <rect x="14" y="72" width="68" height="22" rx="4" fill="rgba(14,165,233,0.38)" />
        <rect x="92" y="76" width="84" height="14" rx="2" fill="#64748b" />
        <rect x="14" y="104" width="192" height="7" rx="2" fill="#475569" />
        <rect x="14" y="116" width="155" height="7" rx="2" fill="#475569" />
        <rect x="14" y="128" width="120" height="7" rx="2" fill="#475569" />
      </svg>

      <svg
        viewBox="0 0 72 128"
        fill="none"
        className="relative z-10 -ml-[23px] sm:-ml-[31px] lg:-ml-[35px] w-[44px] sm:w-[54px] mb-[-11px] shrink-0 drop-shadow-[0_8px_24px_rgba(14,165,233,0.12)]"
        aria-hidden
      >
        <rect x="1" y="1" width="70" height="126" rx="11" fill="#1a2236" stroke="#64748b" strokeWidth="1.5" />
        <rect x="24" y="5" width="24" height="7" rx="3.5" fill="#243044" />
        <rect x="8" y="20" width="56" height="5" rx="2" fill="#475569" />
        <rect x="8" y="30" width="38" height="5" rx="2" fill="#475569" />
        <rect x="8" y="42" width="56" height="24" rx="4" fill="#334155" />
        <rect x="8" y="72" width="56" height="5" rx="2" fill="#475569" />
        <rect x="8" y="82" width="42" height="5" rx="2" fill="#475569" />
        <rect x="8" y="94" width="36" height="14" rx="4" fill="rgba(14,165,233,0.38)" />
        <rect x="24" y="118" width="24" height="3" rx="1.5" fill="#64748b" />
      </svg>
    </div>
  );
});
