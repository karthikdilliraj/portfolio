import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { personal } from '../data/portfolio';

const contactItems = [
  { Icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { Icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { Icon: MapPin, label: 'Location', value: personal.location, href: null },
  { Icon: LinkedinIcon, label: 'LinkedIn', value: 'karthik-dilliraj', href: personal.linkedin },
  { Icon: GithubIcon, label: 'GitHub', value: 'karthikdilliraj', href: personal.github },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="bg-[var(--bg-alt)] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Contact
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-bold text-[var(--text)]">Get In Touch</h2>
          <p className="mx-auto max-w-lg text-[var(--text-subtle)]">
            Open to new opportunities. Whether you have a project in mind or just want to connect,
            reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-[var(--surface-hover)]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-subtle)]">{label}</p>
                      <p className="text-sm font-medium text-[var(--text-muted)] transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                        {value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 p-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-subtle)]">{label}</p>
                      <p className="text-sm font-medium text-[var(--text-muted)]">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 border-t border-[var(--border)] pt-6 text-center">
            <motion.a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-indigo-500"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
