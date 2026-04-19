import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#2a2a3a] text-center">
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} {personal.name} · Built with React & Framer Motion
      </p>
    </footer>
  );
}
