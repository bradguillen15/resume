import { lazy, Suspense, useRef, useCallback } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Spotlight } from '@/components/cursor/Spotlight';
import { Sidebar } from '@/components/layout/Sidebar';
import { HeroTypeAnimation } from '@/components/layout/HeroTypeAnimation';
import { ScrollContainer } from '@/components/layout/ScrollContainer';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Reviews } from '@/components/sections/Reviews';
import { Contact } from '@/components/sections/Contact';
import { Hobbies } from '@/components/sections/Hobbies';
import { StackBanner } from '@/components/sections/stack-banner';
import { EmailIcon } from '@/components/icons/EmailIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { ResumeIcon } from '@/components/icons/ResumeIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ScrollContext } from '@/context/ScrollContext';
import { resume } from '@/data/resume';
import { SECTION_IDS } from '@/lib/nav';

// Lazy-load cursor (desktop-only, decorative)
const CustomCursor = lazy(() =>
  import('@/components/cursor/CustomCursor').then(m => ({
    default: m.CustomCursor,
  })),
);

const [heroFirstName, ...heroLastNameParts] = resume.name.split(' ');
const heroLastName = heroLastNameParts.join(' ');

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(scrollRef, SECTION_IDS);

  const scrollToSection = useCallback((id: string) => {
    // Desktop: scroll within the right panel container
    const container = scrollRef.current;
    if (container) {
      const el = container.querySelector(`#${id}`) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // Mobile fallback: native document scroll
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <TooltipProvider>
    <div className="xl:flex xl:h-screen bg-bg-primary relative">
      {/* Spotlight glow — desktop only, no React re-renders on mousemove */}
      <Spotlight />

      {/* Custom cursor — lazy loaded, desktop only */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Left panel — fixed sidebar, desktop only */}
      <div className="hidden xl:block xl:w-[30%] xl:max-w-[400px] flex-shrink-0 relative z-10">
        <Sidebar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Right panel — scrollable content */}
      <ScrollContext.Provider value={scrollRef}>
        <ScrollContainer ref={scrollRef}>
          {/* Mobile/tablet sticky header */}
          <MobileHeader
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />

          {/* Spacer to push content below the fixed mobile header (~48px) */}
          <div className="xl:hidden h-[48px]" />

          <StackBanner />

          {/* Mobile hero intro (visible only below xl) */}
          <div className="xl:hidden px-6 sm:px-8 pt-10 pb-6 bg-bg-secondary border-b border-border">
            <h1 className="font-display text-[26px] sm:text-[32px] font-semibold text-text-primary mb-1">
              {heroFirstName}{' '}
              <span className="text-accent">{heroLastName}</span>
            </h1>
            <HeroTypeAnimation className="text-text-secondary text-[13px] font-mono h-[20px] mb-3" />
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[11px] text-text-muted tracking-[0.08em] uppercase">
                Available for work
              </span>
            </div>
            {/* Social icons */}
            <div className="flex gap-5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`https://${resume.github}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="text-text-muted hover:text-accent transition-colors duration-200"
                    >
                      <GitHubIcon width={18} height={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`https://${resume.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="text-text-muted hover:text-accent transition-colors duration-200"
                    >
                      <LinkedInIcon width={18} height={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`mailto:${resume.email}`}
                      aria-label="Email"
                      className="text-text-muted hover:text-accent transition-colors duration-200"
                    >
                      <EmailIcon width={18} height={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Email</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={resume.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Resume"
                      className="text-text-muted hover:text-accent transition-colors duration-200"
                    >
                      <ResumeIcon width={18} height={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Resume</TooltipContent>
                </Tooltip>
            </div>
          </div>

          {/* Main sections */}
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Reviews />
          <Contact />
          <Hobbies />
          <Footer />
        </ScrollContainer>
      </ScrollContext.Provider>
    </div>
    </TooltipProvider>
  );
}
