import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import Link from "next/link";

export default function Hero() {
  const RESUME_URL =
    "https://docs.google.com/document/d/1SnxZKk5DTzlyqeT01d3JOs0lcth2qIMc/edit?usp=drive_link&ouid=112997703558362446430&rtpof=true&sd=true";

  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-24 pt-20 pb-24 border-b border-slate-800/60 bg-grid-pattern">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Open to Software Engineering Roles
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Harshit Singh Parmar
        </h1>
        
        <h2 className="text-xl md:text-3xl text-blue-400 font-semibold mb-6">
          Full-Stack &amp; AI Software Engineer
        </h2>
        
        <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl">
          Final-year Computer Science student specializing in scalable backend architecture, multi-tenant agentic RAG pipelines, zero-trust telemetry platforms, and high-concurrency systems.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            Explore Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
          
          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-5 py-3 rounded-md text-sm font-semibold transition-colors"
          >
            <FileText className="w-4 h-4 text-blue-400" /> View Resume
          </Link>

          <div className="flex items-center gap-3 pl-2 border-l border-slate-800 ml-2">
            <Link
              href="https://github.com/harshit-parmar07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/harshit-singh-parmar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-400 hover:text-blue-400 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:harshit.parmar010@gmail.com"
              className="p-2.5 text-slate-400 hover:text-blue-400 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
