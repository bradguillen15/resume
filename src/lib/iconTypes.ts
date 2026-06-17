import type { ComponentType, SVGProps } from 'react';

export type SkillIcon = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number; color?: string; className?: string }
>;
