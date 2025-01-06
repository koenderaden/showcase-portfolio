import Hero from "../app/components/hero";
import Gallery from "../app/components/gallery";
import About from "../app/components/about";
import Contact from "../app/components/contact";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </main>
  );
}
