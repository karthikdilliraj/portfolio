import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

const categories = [
  { label: 'Frontend', key: 'frontend' as const, color: 'cyan' },
  { label: 'Backend', key: 'backend' as const, color: 'indigo' },
  { label: 'Database', key: 'database' as const, color: 'purple' },
  { label: 'DevOps', key: 'devops' as const, color: 'orange' },
  { label: 'Other', key: 'other' as const, color: 'green' },
];

const colorMap: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/20',
  purple: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30 hover:bg-purple-500/20',
  orange: 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/30 hover:bg-orange-500/20',
  green: 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/30 hover:bg-green-500/20',
};

const headerColorMap: Record<string, string> = {
  cyan: 'text-cyan-700 dark:text-cyan-400',
  indigo: 'text-indigo-700 dark:text-indigo-400',
  purple: 'text-purple-700 dark:text-purple-400',
  orange: 'text-orange-700 dark:text-orange-400',
  green: 'text-green-700 dark:text-green-400',
};

function SkillCard({ cat, index }: { cat: (typeof categories)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
    >
      <h3
        className={`mb-4 text-sm font-semibold tracking-wider uppercase ${headerColorMap[cat.color]}`}
      >
        {cat.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills[cat.key].map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.08 + si * 0.04, duration: 0.3 }}
            className={`cursor-default rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 ${colorMap[cat.color]}`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-4xl font-bold text-[var(--text)]">Skills & Technologies</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <SkillCard key={cat.key} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
