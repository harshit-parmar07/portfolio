import { ExternalLink, Sparkles, Layers } from "lucide-react";
import { Github } from "./Icons";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = [
    {
      badge: "#01",
      title: "Intelligent PDF Retrieval System (Agentic RAG)",
      hook: "Stateless multi-tenant RAG platform with single-pass query rewriting, Pinecone vector retrieval, and automated web search fallback.",
      highlights: [
        "Eliminated ~1.8 GB of local PyTorch/HuggingFace dependencies by migrating to Pinecone Inference API embeddings, keeping serverless bundle under 45 MB.",
        "Reduced end-to-end routing latency by ~30% by unifying coreference resolution and intent classification into a single structured-output LangGraph node.",
        "Enforced multi-tenant isolation via Pinecone namespaces (thread_id) and prevented duplicate vector pollution via deterministic SHA-256 vector IDs."
      ],
      tech: ["Python", "FastAPI", "LangGraph", "Pinecone", "Groq API", "React", "Vite"],
      github: "https://github.com/harshit-parmar07/agentic-rag",
      live: "https://rag-agent.harshitparmar.tech/",
    },
    {
      badge: "#02",
      title: "User Analytics Platform",
      hook: "Serverless product analytics engine capturing real-time session telemetry, thermal click heatmaps, and zero-trust PII masking.",
      highlights: [
        "Engineered an O(1) sliding-window queue for rage-click detection and a 350 ms MutationObserver lifecycle for dead clicks inside a zero-dependency JS IIFE pixel.",
        "Consolidated a 3-service MERN architecture into Next.js App Router serverless functions with global Mongoose connection pooling and compound indexes.",
        "Rendered cross-device HTML5 canvas thermal heatmaps over sandboxed iframes with dual-layer DOM selector extraction and PII redaction."
      ],
      tech: ["Next.js 15", "React 19", "MongoDB", "Mongoose", "Tailwind CSS", "Vanilla JS"],
      github: "https://github.com/harshit-parmar07/user-analytics-platform",
      live: "https://user-analytics-app.harshitparmar.tech/",
    },
    {
      badge: "#03",
      title: "Issue Tracker",
      hook: "ACID-compliant bug management platform with full-text search, transactional activity timelines, and SLA breach tracking.",
      highlights: [
        "Guaranteed zero state drift between ticket updates and audit logs by wrapping mutations inside atomic prisma.$transaction() blocks with field-level diffs.",
        "Implemented MySQL FULLTEXT inverted index search with sanitized Boolean prefix tokenization (+token*) and URL-synced searchParams.",
        "Designed a normalized relational schema with explicit many-to-many label join tables, composite B-Tree indexes, and status-aware SLA urgency badges."
      ],
      tech: ["Next.js", "TypeScript", "MySQL", "Prisma ORM", "NextAuth.js", "Zod"],
      github: "https://github.com/harshit-parmar07/issue-tracker",
      live: "https://issue-tracker.harshitparmar.tech/",
    },
  ];

  const secondaryProjects = [
    {
      title: "Java API Rate Limiter",
      hook: "Zero-dependency, thread-safe Core Java rate-limiting utility implementing a lazy-evaluated Token Bucket algorithm.",
      highlights: [
        "O(1) lazy token replenishment eliminating background scheduler thread overhead.",
        "Per-key atomic concurrency via ConcurrentHashMap.compute() fine-grained bin locking.",
        "Extensible Strategy pattern with variable token costs and fail-open resilience fallback."
      ],
      tech: ["Java 19", "Concurrency", "ConcurrentHashMap", "Strategy Pattern"],
      github: "https://github.com/harshit-parmar07/api-rate-limiter",
      live: "",
    },
    {
      title: "Cab Ride Fare Predictor",
      hook: "Supervised machine learning regression pipeline predicting dynamic Uber and Lyft ride fares across 637k+ records.",
      highlights: [
        "Tuned XGBRegressor via 3-fold GridSearchCV, cutting MAE by 77.8% ($4.74 to $1.05) with R² = 0.9671.",
        "Eliminated surge pricing look-ahead bias using leakage-free date-ordered chronological validation.",
        "Fused spatial-temporal ride telemetry with hourly weather logs on composite location-hour keys."
      ],
      tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/harshit-parmar07/fare-pricing-predictor",
      live: "",
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Selected Works
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          Featured Engineering Projects
        </h2>

        {/* Flagship Bento Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 border border-slate-800 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base mt-2 font-medium">
                    {project.hook}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Link>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-8 text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
                {project.highlights.map((bullet, idx) => (
                  <li key={idx}>• {bullet}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Systems Grid Header */}
        <div className="flex items-center gap-3 mb-6">
          <Layers className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-bold text-white tracking-tight">
            Systems &amp; Machine Learning Modules
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white">{project.title}</h4>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.hook}</p>
                <ul className="space-y-1.5 mb-6 text-slate-400 text-xs leading-relaxed">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx}>• {bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {project.tech.map((item, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-blue-400 border border-slate-800"
                  >
                    {item}
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
