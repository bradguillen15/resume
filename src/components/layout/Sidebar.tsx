import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { resume } from '@/data/resume';
import { Separator } from '@/components/ui/separator';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

interface Props {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Sidebar = ({ activeSection, scrollToSection }: Props) => (
  <aside className="h-screen flex flex-col px-10 xl:px-14 py-10 bg-bg-secondary border-r border-border overflow-y-auto">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col min-h-full"
    >
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
        className="text-text-secondary text-[15px] font-mono h-[24px] mb-4"
      >
        <TypeAnimation
          sequence={[
            'Senior Frontend Developer',
            2200,
            'Full Stack Developer',
            2200,
            'AI Engineer in Progress...',
            2200,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
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

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="text-text-secondary text-[13px] leading-[1.7] mb-5"
      >
        {resume.heroBio}
      </motion.p>

      <Separator className="bg-border mb-6" />

      {/* Nav */}
      <nav className="flex flex-col gap-0.5" aria-label="Portfolio sections">
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
        className="flex gap-4 pt-5 border-t border-border mt-auto"
      >
        <TooltipProvider>
          {/* Resume */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={resume.resumeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
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
                className="text-text-muted hover:text-accent transition-colors duration-200"
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
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
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
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>Email</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
    </motion.div>
  </aside>
);
