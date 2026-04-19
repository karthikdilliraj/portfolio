import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';

const categories = ['All', 'Full Stack', 'Frontend'];

const techColors: Record<string, string> = {
  React: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'Vue 3': 'bg-green-500/10 text-green-300 border-green-500/20',
  Vue: 'bg-green-500/10 text-green-300 border-green-500/20',
  TypeScript: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'Node.js': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  Java: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  'Spring Boot': 'bg-green-600/10 text-green-400 border-green-600/20',
  PostgreSQL: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
  Redis: 'bg-red-500/10 text-red-300 border-red-500/20',
  Docker: 'bg-blue-600/10 text-blue-300 border-blue-600/20',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  'Framer Motion': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  Express: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  default: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
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
        className="h-full p-6 rounded-2xl border border-[#2a2a3a] bg-[#13131a] hover:border-indigo-500/40 transition-all duration-300 flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {project.featured && (
          <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            Featured
          </span>
        )}

        <div className="mb-4">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-white font-bold text-xl mt-1 mb-2 group-hover:text-indigo-300 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
        </div>

        <ul className="space-y-1 mb-5 flex-1">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="text-slate-500 text-xs flex items-start gap-2">
              <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded-full border text-xs font-medium ${getTechColor(t)}`}
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

  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Projects</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A collection of React and Vue applications showcasing full-stack and frontend expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white border border-[#2a2a3a] hover:border-indigo-500/30'
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
