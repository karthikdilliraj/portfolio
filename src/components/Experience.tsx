import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2a3a]" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
        className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-[#0a0a0f]"
      />

      <div className="p-6 rounded-2xl border border-[#2a2a3a] bg-[#13131a] hover:border-indigo-500/30 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-white font-bold text-xl">{exp.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Briefcase size={13} className="text-indigo-400" />
              <span className="text-indigo-300 font-medium text-sm">{exp.company}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500 text-sm">{exp.location}</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#1a1a24] border border-[#2a2a3a] text-slate-400 text-xs font-medium">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2">
          {exp.highlights.map((h) => (
            <li key={h} className="text-slate-400 text-sm flex items-start gap-2">
              <span className="text-indigo-400 mt-1 shrink-0">▸</span>
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
    <section id="experience" className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Career</span>
          <h2 className="text-4xl font-bold text-white mt-2">Work Experience</h2>
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
