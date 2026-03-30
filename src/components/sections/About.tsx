import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const About = () => (
  <section
    id="about"
    className="px-6 sm:px-8 lg:px-12 pt-16 pb-20 lg:pt-20 lg:pb-[100px]"
  >
    <SectionLabel number="00" label="About" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <p className="text-text-secondary text-[14px] sm:text-[15px] leading-[1.85]">
        Senior Web Developer based in Costa Rica with 8+ years building
        large-scale React applications. Most recently at Keller Williams, where
        I owned 3 interconnected frontend applications, participated in a
        micro-frontend migration, and reduced dashboard load times by 35%
        through aggressive performance optimization. I have strong roots in
        frontend but I am actively stepping into full stack work, taking on
        backend, APIs, and infrastructure more and more.
      </p>
      <p className="text-text-secondary text-[14px] sm:text-[15px] leading-[1.85]">
        I am currently learning to build apps with the Claude API and working
        through Anthropic's certification programs. I find it genuinely
        interesting to figure out how to connect LLMs to real products in ways
        that are actually useful, not just as a gimmick.
      </p>
      <p className="text-text-secondary text-[14px] sm:text-[15px] leading-[1.85]">
        Outside of work I follow the crypto space closely and have a real
        passion for blockchain technology and what decentralized systems could
        look like in the future. I am also finishing my Computer Engineering
        degree at ULACIT and plan to graduate this year. Fluent in Spanish
        (native) and English (C1).
      </p>
    </motion.div>
  </section>
);
