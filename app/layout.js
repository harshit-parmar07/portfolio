import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harshit Singh Parmar | Full-Stack & AI Software Engineer",
  description:
    "Portfolio of Harshit Singh Parmar — Computer Science undergraduate specializing in backend architecture, full-stack systems, agentic RAG workflows, and high-concurrency utilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200`}>
        {children}
      </body>
    </html>
  );
}
