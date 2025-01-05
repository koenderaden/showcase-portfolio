// Correcte imports
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

// Home-component
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Gebruik componenten */}
      <Hero />
      <Gallery />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
