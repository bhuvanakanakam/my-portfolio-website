import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Extracurriculars from "@/components/Extracurriculars";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Extracurriculars />
      <Blog />
      <Resume />
      <Footer />
    </main>
  );
}
