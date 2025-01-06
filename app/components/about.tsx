export default function About() {
  const logos = [
    {
      id: 1,
      name: "HTML",
      bw: "/svgs/html-bw.svg",
      color: "/svgs/html-color.svg",
    },
    {
      id: 2,
      name: "CSS",
      bw: "/svgs/css-bw.svg",
      color: "/svgs/css-color.svg",
    },
    {
      id: 3,
      name: "Figma",
      bw: "/svgs/figma-bw.svg",
      color: "/svgs/figma-color.svg",
    },
    { id: 4, name: "JS", bw: "/svgs/js-bw.svg", color: "/svgs/js-color.svg" },
    {
      id: 5,
      name: "React",
      bw: "/svgs/react-bw.svg",
      color: "/svgs/react-color.svg",
    },
    {
      id: 6,
      name: "GitHub",
      bw: "/svgs/github-bw.svg",
      color: "/svgs/github-color.svg",
    },
    {
      id: 7,
      name: "Storyblok",
      bw: "/svgs/storyblok-bw.svg",
      color: "/svgs/storyblok-color.svg",
    },
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-[60px]">
        <div className="flex flex-col md:flex-col md:items-start">
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

            {/* Skills Section */}
            <div className="mt-10">
              <h3 className="text-3xl font-bold mb-6">My Skills</h3>
              <div className="flex gap-4 flex-wrap">
                {logos.map((logo) => (
                  <div
                    key={logo.id}
                    className="group relative"
                    style={{ width: "60px", height: "60px" }}
                  >
                    {/* Zwart-wit SVG */}
                    <img
                      src={logo.bw}
                      alt={`${logo.name} logo`}
                      className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Gekleurde SVG */}
                    <img
                      src={logo.color}
                      alt={`${logo.name} logo`}
                      className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
