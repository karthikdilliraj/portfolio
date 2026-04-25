import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';

const categories = ['All', 'Full Stack', 'Frontend'];

const techColors: Record<string, string> = {
  React: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
  'Vue 3': 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/30',
  Vue: 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/30',
  TypeScript: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
  'Node.js': 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
  Java: 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/30',
  'Spring Boot': 'bg-green-600/10 text-green-700 dark:text-green-400 border-green-600/30',
  PostgreSQL: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30',
  Redis: 'bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/30',
  Docker: 'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/30',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/30',
  'Framer Motion': 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
  Express: 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30',
  default: 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/30',
};

function getTechColor(tech: string) {
  return techColors[tech] ?? techColors.default;
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: 'easeOut' }}
      className="group relative"
    >
      <motion.div
        className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-teal-500/40"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {project.featured && (
          <span className="absolute top-4 right-4 rounded-full border border-teal-500/40 bg-teal-500/15 px-2 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300">
            Featured
          </span>
        )}

        <div className="mb-4">
          <span className="text-xs font-semibold tracking-wider text-[var(--text-subtle)] uppercase">
            {project.category}
          </span>
          <h3 className="mt-1 mb-2 text-xl font-bold text-[var(--text)] transition-colors duration-200 group-hover:text-teal-600 dark:group-hover:text-teal-300">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">{project.description}</p>
        </div>

        <ul className="mb-5 flex-1 space-y-1">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-subtle)]">
              <span className="mt-0.5 shrink-0 text-teal-400">▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getTechColor(t)}`}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-bold text-[var(--text)]">Projects</h2>
          <p className="mx-auto max-w-xl text-[var(--text-subtle)]">
            A collection of React and Vue applications showcasing full-stack and frontend expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 flex items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white'
                  : 'border border-[var(--border)] text-[var(--text-muted)] hover:border-teal-500/30 hover:text-[var(--text)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
