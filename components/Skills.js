import { Code2, Server, Brain, Layout, Database, Cloud } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      skills: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL"],
    },
    {
      title: "Backend & Systems Architecture",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      skills: ["Node.js", "Express.js", "FastAPI", "Next.js App Router", "REST APIs", "Multithreading & Concurrency"],
    },
    {
      title: "AI, RAG & Machine Learning",
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      skills: ["LangGraph", "LangChain Core", "Pinecone Vector DB", "Groq API", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      title: "Frontend & Databases",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      skills: ["React", "Next.js", "Vite", "Tailwind CSS", "MySQL", "MongoDB", "Prisma ORM", "Mongoose"],
    },
    {
      title: "Cloud, DevOps & Engineering Concepts",
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      skills: ["Vercel Serverless", "AWS Essentials", "Docker", "Git/GitHub", "Linux (Ubuntu)", "Strategy & Singleton Patterns"],
    },
  ];

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24 border-b border-slate-800/60 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-blue-500/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-800/80 rounded-md border border-slate-700/60">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-medium rounded-md border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
