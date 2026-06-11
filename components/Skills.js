import { Code2, Database, Layout, Server, Terminal, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      skills: ["C++", "JavaScript", "Python", "Java"],
    },
    {
      title: "Backend & Web",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      skills: ["Node.js", "Express.js", "Next.js", "React", "HTML", "CSS"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      skills: ["Git", "Docker", "Linux", "Postman"],
    },
    {
      title: "Core Fundamentals",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      skills: ["Data Structures & Algorithms", "OOP", "REST API"],
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-slate-800/50 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-1 bg-blue-500 hidden md:block"></span>
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-800 rounded-md">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm font-medium rounded border border-slate-700/50"
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
