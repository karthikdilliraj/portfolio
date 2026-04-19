import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { personal, education } from '../data/portfolio';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl font-bold text-white mt-2">Who I Am</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed">{personal.summary}</p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in building modern web apps with React and Vue.js on the frontend, backed by
                Node.js, Java, and Python services. I care deeply about clean architecture, performance, and
                developer experience.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={16} className="text-indigo-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Briefcase size={16} className="text-indigo-400 shrink-0" />
                  <span>5+ years of professional experience</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <GraduationCap size={16} className="text-indigo-400 shrink-0" />
                  <span>MEng, Carleton University (GPA: 11.6/12)</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-6 rounded-2xl border border-[#2a2a3a] bg-[#13131a] hover:border-indigo-500/30 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
                      <p className="text-indigo-400 text-sm font-medium">
                        {edu.degree} · {edu.field}
                      </p>
                    </div>
                    <span className="text-slate-500 text-sm shrink-0">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {edu.highlights.map((h) => (
                      <li key={h} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-indigo-400 mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
