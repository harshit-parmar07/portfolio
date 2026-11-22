import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen relative overflow-x-clip">
      {/* Top ambient radial spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Footer />
    </main>
  );
}
