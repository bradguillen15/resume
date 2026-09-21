import { createElement, useState } from 'react';
import { getSkillColor, getSkillIcon, getSkillIconUrl } from '@/lib/skillIcons';

interface SkillIconImageProps {
  name: string;
  size: number;
  className?: string;
}

export const SkillIconImage = ({ name, size, className }: SkillIconImageProps) => {
  const [imageFailed, setImageFailed] = useState(false);
  const iconUrl = getSkillIconUrl(name);
  const FallbackIcon = getSkillIcon(name);

  if (iconUrl && !imageFailed) {
    return (
      <img
        src={iconUrl}
        alt=""
        width={size}
        height={size}
        className={`object-contain ${className ?? ''}`}
        loading="lazy"
        decoding="async"
        draggable={false}
        onError={() => setImageFailed(true)}
      />
    );
  }

  if (FallbackIcon) {
    return createElement(FallbackIcon, {
      size,
      color: getSkillColor(name),
      className,
    });
  }

  return null;
};
