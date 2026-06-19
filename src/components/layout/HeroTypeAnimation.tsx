import { TypeAnimation } from 'react-type-animation';

const HERO_TYPE_SEQUENCE = [
  'Senior Front End Developer',
  2200,
  'Full Stack Developer',
  2200,
  'AI Engineer in Progress...',
  2200,
  '',
  500,
];

interface HeroTypeAnimationProps {
  className?: string;
}

export const HeroTypeAnimation = ({ className }: HeroTypeAnimationProps) => (
  <div className={className}>
    <TypeAnimation
      sequence={HERO_TYPE_SEQUENCE}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  </div>
);
