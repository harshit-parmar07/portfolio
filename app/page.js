import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
    </main>
  );
}
