import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import { HeroTypeAnimation } from '@/components/layout/HeroTypeAnimation';
import { Separator } from '@/components/ui/separator';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { ResumeIcon } from '@/components/icons/ResumeIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { NAV_LINKS } from '@/lib/nav';

interface Props {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Sidebar = ({ activeSection, scrollToSection }: Props) => (
  <aside className="h-screen flex flex-col px-10 xl:px-14 pt-0 pb-6 bg-bg-secondary border-r border-border overflow-hidden">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col flex-1 min-h-0"
    >
      {/* Profile photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-0 mb-2 flex justify-center overflow-visible"
      >
        <div className="profile-portrait-wrap">
          <img
            src="/profile-photo.png"
            alt={resume.name}
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-1"
      >
        <h1 className="font-display text-[42px] leading-[1.1] text-text-primary">
          {resume.name.split(' ')[0]}{' '}
          <span className="text-accent">
            {resume.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>
      </motion.div>

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <HeroTypeAnimation className="text-text-secondary text-[15px] font-mono h-[24px] mb-4" />
      </motion.div>

      {/* Available for work badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="relative flex h-2 w-2">
          <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-[11px] text-text-muted tracking-[0.08em] uppercase">
          Available for work
        </span>
      </motion.div>

      <Separator className="bg-border mb-4" />

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 mb-4" aria-label="Portfolio sections">
        {NAV_LINKS.map((link, i) => {
          const isActive = activeSection === link.id;
          return (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.07 }}
              onClick={() => scrollToSection(link.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`group flex items-center gap-3 text-[11px] tracking-[0.1em] uppercase py-2 w-full text-left transition-colors duration-200 cursor-pointer bg-transparent border-none ${
                isActive
                  ? 'text-text-primary'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <span
                className={`h-px bg-accent transition-all duration-300 ${
                  isActive ? 'w-8' : 'w-4 group-hover:w-6'
                }`}
              />
              {link.label}
            </motion.button>
          );
        })}
      </nav>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex gap-4 pt-4 pb-1 border-t border-border mt-auto"
      >
        <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={resume.resumeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
                className="inline-flex text-text-muted hover:text-accent transition-colors duration-200"
              >
                <ResumeIcon width={20} height={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent>Resume</TooltipContent>
          </Tooltip>

          {/* LinkedIn */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={`https://${resume.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex text-text-muted hover:text-accent transition-colors duration-200"
              >
                <LinkedInIcon width={20} height={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>

          {/* GitHub */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={`https://${resume.github}`}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex text-text-muted hover:text-accent transition-colors duration-200"
              >
                <GitHubIcon width={20} height={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          {/* Email */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={`mailto:${resume.email}`}
                aria-label="Email"
                className="inline-flex text-text-muted hover:text-accent transition-colors duration-200"
              >
                <EmailIcon width={20} height={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent>Email</TooltipContent>
          </Tooltip>
      </motion.div>
    </motion.div>
  </aside>
);
