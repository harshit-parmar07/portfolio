import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Navbar() {
  const RESUME_URL =
    "https://docs.google.com/document/d/1SnxZKk5DTzlyqeT01d3JOs0lcth2qIMc/edit?usp=drive_link&ouid=112997703558362446430&rtpof=true&sd=true";

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link href="#" className="font-bold text-white text-lg tracking-tight hover:text-blue-400 transition-colors">
          HARSHIT<span className="text-blue-500">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#achievements" className="hover:text-white transition-colors">Milestones</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 px-3.5 py-1.5 rounded-md text-xs font-medium transition-all hover:border-blue-500/50"
          >
            Resume <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </div>
    </header>
  );
}
