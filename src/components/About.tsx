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
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
              About Me
            </span>
            <h2 className="mt-2 text-4xl font-bold text-[var(--text)]">Who I Am</h2>
          </div>
        </FadeIn>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="leading-relaxed text-[var(--text-muted)]">
                I'm a full stack developer who enjoys turning complex problems into clean, intuitive
                products. Over the past 5+ years I've worked across the entire stack — from
                pixel-perfect UIs to distributed backend systems — always with an eye on what the
                end user actually experiences.
              </p>
              <p className="leading-relaxed text-[var(--text-muted)]">
                I specialize in building modern web apps with React and Vue.js on the frontend,
                backed by Node.js, Java, and Python services. I care deeply about clean
                architecture, performance, and developer experience.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3 text-[var(--text-muted)]">
                  <MapPin size={16} className="shrink-0 text-teal-400" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-muted)]">
                  <Briefcase size={16} className="shrink-0 text-teal-400" />
                  <span>5+ years of professional experience</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-muted)]">
                  <GraduationCap size={16} className="shrink-0 text-teal-400" />
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
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-teal-500/30"
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)]">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-medium text-teal-600 dark:text-teal-300">
                        {edu.degree} · {edu.field}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm text-[var(--text-subtle)]">{edu.period}</span>
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-700 dark:text-teal-300">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {edu.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                      >
                        <span className="mt-1.5 shrink-0 text-teal-400">▸</span>
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
