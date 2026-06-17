import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const Hobbies = () => (
  <section
    id="hobbies"
    className="px-6 sm:px-8 lg:px-12 pt-20 pb-24 lg:pt-[120px] lg:pb-[160px]"
  >
    <SectionLabel number="07" label="Hobbies" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      {resume.hobbies.map((paragraph, i) => (
        <p
          key={i}
          className="text-text-secondary text-[14px] sm:text-[15px] leading-[1.85]"
        >
          {paragraph}
        </p>
      ))}
    </motion.div>
  </section>
);
