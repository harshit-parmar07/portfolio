import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Natours",
      description: "Architected a scalable backend using Node.js and Express.js following MVC principles. Engineered secure user authentication and authorization using JWTs.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/harshit-parmar07",
    },
    {
      title: "Issue Tracker",
      description: "Engineered a production-ready issue tracking application using Next.js. Integrated a relational MySQL database utilizing Prisma ORM.",
      tech: ["Next.js", "React", "MySQL", "Prisma"],
      github: "https://github.com/harshit-parmar07",
    },
    {
      title: "Fare Pricing Predictor",
      description: "Developed a machine learning regression model utilizing XGBoost in Python to predict dynamic surge pricing multipliers.",
      tech: ["Python", "XGBoost", "Machine Learning"],
      github: "https://github.com/harshit-parmar07",
    },
    {
      title: "Image Caption Transformer",
      description: "Engineered an end-to-end multimodal deep learning pipeline using TensorFlow and Python to map image representations to text sequences.",
      tech: ["Python", "TensorFlow", "Deep Learning"],
      github: "https://github.com/harshit-parmar07",
    },
    {
      title: "Game-Hub",
      description: "Engineered a dynamic front-end web application using ReactJS for video game discovery with advanced search and filtering.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/harshit-parmar07",
      live: "https://github.com/harshit-parmar07",
    },
    {
      title: "API Rate Limiter",
      description: "Engineered a thread-safe, in-memory API Rate Limiter in Core Java utilizing the Strategy Design Pattern and Token Bucket algorithm.",
      tech: ["Java", "OOP", "Concurrency"],
      github: "https://github.com/harshit-parmar07",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-1 bg-blue-500 hidden md:block"></span>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-blue-500/10 rounded-md">
                  <FolderGit2 className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-semibold tracking-wide text-blue-400 uppercase"
                  >
                    {tech}
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
