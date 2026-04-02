import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Projects } from "@/app/components/sections/Projects";
import { Skills } from "@/app/components/sections/Skills";
import { Experience } from "@/app/components/sections/Experience";
import { Contact } from "@/app/components/sections/Contact";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
