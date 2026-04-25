import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';

function ExperienceCard({ exp, index }: { exp: (typeof experience)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative pb-12 pl-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute top-0 bottom-0 left-0 w-px bg-[var(--border)]" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
        className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-[var(--bg)]"
      />

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-indigo-500/30">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-[var(--text)]">{exp.role}</h3>
            <div className="mt-1 flex items-center gap-2">
              <Briefcase size={13} className="text-indigo-400" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">{exp.company}</span>
              <span className="text-[var(--text-faint)]">·</span>
              <span className="text-sm text-[var(--text-subtle)]">{exp.location}</span>
            </div>
          </div>
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface-hover)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
              <span className="mt-1 shrink-0 text-indigo-400">▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="bg-[var(--bg-alt)] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Career
          </span>
          <h2 className="mt-2 text-4xl font-bold text-[var(--text)]">Work Experience</h2>
        </motion.div>

        <div className="relative ml-4">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
