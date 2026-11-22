import { Mail, Code } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()}{" "}Harshit Singh Parmar. Built with Next.js &amp; Tailwind CSS.
        </div>
        
        <div className="flex gap-5">
          <Link
            href="mailto:harshit.parmar010@gmail.com"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/harshit-parmar07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/harshit-singh-parmar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://leetcode.com/u/harshit-parmar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-yellow-400 transition-colors"
            aria-label="LeetCode"
          >
            <Code className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
