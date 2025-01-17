import Hero from "../app/components/hero";
import Gallery from "../app/components/gallery";
import About from "../app/components/about";
import Contact from "../app/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <section id="hero">
        <Hero />
      </section>
      <section id="about-me">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
