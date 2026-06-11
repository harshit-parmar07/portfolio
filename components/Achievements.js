import { Trophy, Code } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-slate-800/50 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-1 bg-blue-500 hidden md:block"></span>
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg flex items-center gap-6">
            <div className="p-4 bg-yellow-500/10 rounded-full shrink-0">
              <Trophy className="w-10 h-10 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">LeetCode Knight Badge</h3>
              <p className="text-slate-400">
                Solved <span className="text-white font-semibold">400+ problems</span> with a contest rating of <span className="text-blue-400 font-semibold">1912</span>.
              </p>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg flex flex-col justify-center gap-2 items-center text-center">
            <Code className="w-8 h-8 text-slate-400 mb-2" />
            <h3 className="text-lg font-semibold text-slate-300">Continuous Learner</h3>
            <p className="text-slate-500 text-sm">
              Consistently pushing boundaries in algorithms and full-stack development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
