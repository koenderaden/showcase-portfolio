export default function About() {
  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-[60px]">
        <div className="flex flex-col md:flex-row md:items-start">
          <h2 className="text-4xl font-bold mb-8 md:mb-0 md:w-1/3">About me</h2>
          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              Hi, my name is Koen de Raden, and I'm an 18-year-old from
              Waalwijk, the Netherlands.
            </p>
            <p className="text-lg mb-6">
              During my time at Dr. Mollercollege, I discovered my passion for
              ICT. Choosing Informatics as an elective in my third year turned
              out to be the perfect decision, sparking my interest in the world
              of technology and digital innovation.
            </p>
            <p className="text-lg mb-6">
              Outside of school, I love visiting theme parks, gaming, and
              watching movies and series. For the past year and a half, I've
              also worked at the Efteling, primarily at the Pirańa attraction.
              This job has been a fantastic experience, teaching me about
              teamwork, responsibility, and customer interaction—all while
              having fun!
            </p>
            <p className="text-lg">
              My passion for ICT, combined with my creative hobbies and work
              experience, drives me to explore and grow in this exciting field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
