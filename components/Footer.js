import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Harshit Singh Parmar. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link
            href="mailto:harshit.parmar010@gmail.com"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/harshit-parmar07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/harshit-singh-parmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
