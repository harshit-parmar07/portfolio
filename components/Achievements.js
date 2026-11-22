import { Trophy, Award, GitPullRequest, ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode Knight Badge",
      subtitle: "Peak Rating: 1912 (Top 4.28% globally)",
      description: "Solved 400+ algorithmic problems spanning dynamic programming, graphs, trees, and sliding window techniques.",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      link: "https://leetcode.com/u/harshit-parmar/",
      linkText: "LeetCode Profile"
    },
    {
      title: "Competitive DSA Hackathon",
      subtitle: "Rank 42 / 1,500+ Participants",
      description: "Secured Top 3% ranking in a college-wide algorithmic problem-solving competition.",
      icon: <Award className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Open-Source Contributor",
      subtitle: "Hacktoberfest 2026",
      description: "Contributed UI enhancements and structured JSON dataset updates via merged PRs to lingdojo/kana-dojo.",
      icon: <GitPullRequest className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "Industry Certifications",
      subtitle: "Cloud & Artificial Intelligence",
      description: "Databricks Generative AI Fundamentals, Oracle OCI 2025 AI Foundations Associate, AWS Cloud Practitioner Essentials.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    },
  ];

  return (
    <section id="achievements" className="px-6 md:px-12 lg:px-24 py-24 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          Milestones &amp; Credentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl flex items-start gap-5 hover:border-slate-700 transition-colors"
            >
              <div className="p-3 bg-slate-800/80 rounded-lg shrink-0 border border-slate-700/60">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                    >
                      {item.linkText} <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
                <p className="text-xs font-mono text-blue-400 mb-2 mt-0.5">{item.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
