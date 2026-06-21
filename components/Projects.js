import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "User Analytics Platform",
      description:
        "A full-stack telemetry ingestion system and visualization dashboard built as a MERN monorepo. Engineered a lightweight, decoupled Vanilla JavaScript tracking pixel for data collection and normalized MongoDB collections to ensure high-frequency write reliability without breaching document size limits.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/harshit-parmar07/user-analytics-platform",
      live: "https://user-analytics-app.vercel.app/",
    },
    {
      title: "Natours",
      description:
        "A full-stack travel booking application featuring complex data relations, secure user authentication workflows, and a robust REST API for managing tour itineraries.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/harshit-parmar07/natours",
      live: "https://natours-app-ew6y.onrender.com/",
    },
    {
      title: "Issue Tracker",
      description:
        "A comprehensive project management dashboard that allows development teams to log, track, assign, and visualize software defects and tasks in real time.",
      tech: ["Next.js", "React", "MySQL", "Prisma"],
      github: "https://github.com/harshit-parmar07/issue-tracker",
      live: "https://issue-tracker-six-black.vercel.app/",
    },
    {
      title: "Cab Ride Fare Predictor",
      description:
        "A supervised machine learning regression pipeline built to accurately predict Uber and Lyft ride prices. Leveraged XGBoost to process spatial, temporal, and weather data, achieving a high-performing R² score of 0.967.",
      tech: ["Python", "XGBoost", "Machine Learning", "Data Engineering"],
      github: "https://github.com/harshit-parmar07/fare-pricing-predictor",
    },
    {
      title: "Game-Hub",
      description:
        "A responsive video game discovery platform that connects to raw game databases, providing users with advanced searching, sorting, and genre-filtering capabilities.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/harshit-parmar07/game-hub",
      live: "https://game-hub-pi-navy.vercel.app/",
    },
    {
      title: "API Rate Limiter",
      description:
        "A cross-runtime traffic control utility showcasing both a lock-free Java in-memory implementation and a scalable, distributed Node.js and Redis middleware layer.",
      tech: ["Java", "Node.js", "Redis", "Concurrency"],
      github: "https://github.com/harshit-parmar07/api-rate-limiter",
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
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
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
