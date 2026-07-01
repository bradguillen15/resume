import { lazy, Suspense, useRef, useCallback } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Spotlight } from '@/components/cursor/Spotlight';
import { Sidebar } from '@/components/layout/Sidebar';
import { ScrollContainer } from '@/components/layout/ScrollContainer';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { MobileHero } from '@/components/layout/MobileHero';
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
import { useActiveSection } from '@/hooks/useActiveSection';
import { ScrollContext } from '@/context/ScrollContext';
import { SECTION_IDS } from '@/lib/nav';

// Lazy-load cursor (desktop-only, decorative)
const CustomCursor = lazy(() =>
  import('@/components/cursor/CustomCursor').then(m => ({
    default: m.CustomCursor,
  })),
);

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

          <MobileHero />

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
