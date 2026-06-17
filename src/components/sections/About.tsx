import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
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
        {resume.aboutSummary}
      </p>
      <p className="text-text-secondary text-[14px] sm:text-[15px] leading-[1.85]">
        {resume.aboutContext}
      </p>
    </motion.div>
  </section>
);
