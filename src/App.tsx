import { lazy, Suspense, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Sidebar } from '@/components/layout/Sidebar';
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
import { useActiveSection } from '@/hooks/useActiveSection';
import { useMousePosition } from '@/hooks/useMousePosition';
import { ScrollContext } from '@/context/ScrollContext';
import { resume } from '@/data/resume';

// Lazy-load cursor (desktop-only, decorative)
const CustomCursor = lazy(() =>
  import('@/components/cursor/CustomCursor').then(m => ({
    default: m.CustomCursor,
  })),
);

const SECTIONS = [
  'about',
  'experience',
  'skills',
  'projects',
  'certifications',
  'reviews',
  'contact',
];

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(scrollRef, SECTIONS);
  const { x, y } = useMousePosition();

  const scrollToSection = (id: string) => {
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
  };

  return (
    <div className="xl:flex xl:h-screen bg-bg-primary relative">
      {/* Spotlight glow — desktop only */}
      <div
        className="hidden xl:block pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(14,165,233,0.05), transparent 80%)`,
        }}
      />

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

          {/* Spacer to push content below the fixed mobile header (~57px) */}
          <div className="xl:hidden h-[57px]" />

          {/* Mobile hero intro (visible only below xl) */}
          <div className="xl:hidden px-6 sm:px-8 pt-10 pb-6 bg-bg-secondary border-b border-border">
            <h1 className="font-display text-[26px] sm:text-[32px] font-semibold text-text-primary mb-1">
              Brad <span className="text-accent">Guillen</span>
            </h1>
            <div className="text-text-secondary text-[13px] font-mono h-[20px] mb-3">
              <TypeAnimation
                sequence={[
                  'Senior Frontend Engineer',
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
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[11px] text-text-muted tracking-[0.08em] uppercase">
                Available for work
              </span>
            </div>
            <p className="text-text-secondary text-[13px] leading-[1.7] mb-5">
              {resume.heroBio}
            </p>
            {/* Social icons */}
            <div className="flex gap-5">
              <a
                href={`https://${resume.github}`}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={`https://${resume.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${resume.email}`}
                aria-label="Email"
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
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
          <Footer />
        </ScrollContainer>
      </ScrollContext.Provider>
    </div>
  );
}
