import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8 text-center">
      <p className="text-sm text-[var(--text-faint)]">
        © {new Date().getFullYear()} {personal.name}
      </p>
    </footer>
  );
}
