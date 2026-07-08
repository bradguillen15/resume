import type { ComponentType } from 'react';
import { resume } from '@/data/resume';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { ResumeIcon } from '@/components/icons/ResumeIcon';

export type SocialIcon = ComponentType<{
  width?: number;
  height?: number;
  className?: string;
}>;

export interface SocialLink {
  href: string;
  label: string;
  icon: SocialIcon;
  external: boolean;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    href: resume.resumeUrl,
    label: 'Resume',
    icon: ResumeIcon,
    external: true,
  },
  {
    href: `https://${resume.linkedin}`,
    label: 'LinkedIn',
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: `https://${resume.github}`,
    label: 'GitHub',
    icon: GitHubIcon,
    external: true,
  },
  {
    href: `mailto:${resume.email}`,
    label: 'Email',
    icon: EmailIcon,
    external: false,
  },
];
