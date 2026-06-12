import { Mail, ChevronRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 border-b border-slate-800/50">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Harshit Singh Parmar
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-8">
          Final year Computer Science Engineering student
        </h2>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-3xl">
          Seeking a software engineering role to leverage strong problem-solving abilities in building scalable, data-driven applications, while exploring Machine Learning, Deep Learning, and Generative AI.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/harshit-parmar07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-base font-semibold transition-colors border border-blue-500 hover:border-blue-400"
          >
            <GithubIcon className="w-5 h-5" />
            View GitHub
          </Link>
          <Link
            href="mailto:harshit.parmar010@gmail.com"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-800 text-slate-200 px-6 py-3 rounded text-base font-semibold transition-colors border border-slate-700 hover:border-slate-500"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
