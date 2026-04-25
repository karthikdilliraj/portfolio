import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { personal } from '../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-4 text-5xl leading-tight font-bold tracking-tight text-[var(--text)] sm:text-7xl"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Karthik
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-6 text-xl font-medium text-[var(--text-muted)] sm:text-2xl"
        >
          {personal.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--text-subtle)] sm:text-lg"
        >
          {personal.summary}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#projects"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-indigo-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="mailto:karthikshaik@gmail.com"
            className="rounded-xl border border-[var(--border)] px-6 py-3 font-semibold text-[var(--text-muted)] transition-all duration-200 hover:border-indigo-500/50 hover:text-[var(--text)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center justify-center gap-5">
          {[
            { Icon: GithubIcon, href: personal.github, label: 'GitHub' },
            { Icon: LinkedinIcon, href: personal.linkedin, label: 'LinkedIn' },
            { Icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all duration-200 hover:border-indigo-500/50 hover:text-[var(--text)]"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 text-[var(--text-faint)] transition-colors hover:text-[var(--text-muted)]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
