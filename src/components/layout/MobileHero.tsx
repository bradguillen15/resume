import { resume } from '@/data/resume';
import { HeroTypeAnimation } from '@/components/layout/HeroTypeAnimation';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { ResumeIcon } from '@/components/icons/ResumeIcon';

const [firstName, ...lastNameParts] = resume.name.split(' ');
const lastName = lastNameParts.join(' ');

const SOCIAL_LINKS = [
  {
    href: `https://${resume.github}`,
    label: 'GitHub',
    icon: GitHubIcon,
    external: true,
  },
  {
    href: `https://${resume.linkedin}`,
    label: 'LinkedIn',
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: `mailto:${resume.email}`,
    label: 'Email',
    icon: EmailIcon,
    external: false,
  },
  {
    href: resume.resumeUrl,
    label: 'Resume',
    icon: ResumeIcon,
    external: true,
  },
] as const;

export const MobileHero = () => (
  <div className="xl:hidden overflow-visible border-b border-border bg-bg-secondary px-5 pb-6 pt-8 min-[360px]:px-6 min-[360px]:pt-9 sm:px-8 sm:pt-10">
    <div className="flex items-center gap-3 overflow-visible min-[360px]:gap-5 sm:gap-6">
      <div className="min-w-[min(235px,calc(100%-5.5rem))] flex-1">
        <h1 className="mb-1.5 font-display text-[28px] font-semibold leading-[1.1] text-text-primary min-[360px]:text-[34px] sm:text-[38px]">
          {firstName} <span className="text-accent">{lastName}</span>
        </h1>

        <HeroTypeAnimation className="mb-3 h-[22px] font-mono text-[14px] text-text-secondary min-[360px]:mb-3.5 min-[360px]:h-[24px] min-[360px]:text-[15px] sm:h-[26px] sm:text-[16px]" />

        <div className="mb-4 flex items-center gap-2 min-[360px]:mb-5 sm:mb-5">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-[12px] tracking-[0.08em] text-text-muted uppercase min-[360px]:text-[13px]">
            Available for work
          </span>
        </div>

        <div className="flex gap-4 min-[360px]:gap-5 sm:gap-6">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon, external }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  aria-label={label}
                  className="text-text-muted transition-colors duration-200 hover:text-accent"
                >
                  <Icon
                    className="h-5 w-5 min-[360px]:h-[22px] min-[360px]:w-[22px] sm:h-6 sm:w-6"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="profile-portrait-shell mb-5 shrink-0 self-center">
        <div className="profile-portrait-wrap profile-portrait-wrap-hero">
          <img
            src="/profile-photo.webp"
            alt={resume.name}
            width={480}
            height={453}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  </div>
);
