import Image from "next/image";
import Link from "next/link";

export default function About() {
  const codingSkills = [
    {
      id: 1,
      name: "HTML",
      bw: "/svgs/html-bw.svg",
      color: "/svgs/html-color.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      name: "CSS",
      bw: "/svgs/css-bw.svg",
      color: "/svgs/css-color.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      name: "JavaScript",
      bw: "/svgs/js-bw.svg",
      color: "/svgs/js-color.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      name: "React",
      bw: "/svgs/react-bw.svg",
      color: "/svgs/react-color.svg",
      link: "https://reactjs.org",
    },
    {
      id: 5,
      name: "Next.js",
      bw: "/svgs/next-bw.svg",
      color: "/svgs/next-color.svg",
      link: "https://nextjs.org/",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      bw: "/svgs/tailwind-bw.svg",
      color: "/svgs/tailwind-color.svg",
      link: "https://tailwindcss.com/",
    },
    {
      id: 7,
      name: "Ionic Framework",
      bw: "/svgs/ionic-bw.svg",
      color: "/svgs/ionic-color.svg",
      link: "https://ionicframework.com/",
    },
  ];

  const cmsSkills = [
    {
      id: 8,
      name: "Storyblok",
      bw: "/svgs/storyblok-bw.svg",
      color: "/svgs/storyblok-color.svg",
      link: "https://www.storyblok.com",
    },
  ];

  const designSkills = [
    {
      id: 9,
      name: "Figma",
      bw: "/svgs/figma-bw.svg",
      color: "/svgs/figma-color.svg",
      link: "https://www.figma.com",
    },
  ];

  const versionControlSkills = [
    {
      id: 10,
      name: "GitHub",
      bw: "/svgs/github-bw.svg",
      color: "/svgs/github-color.svg",
      link: "https://github.com",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-[60px]">
        <h2
          className="text-2xl sm:text-3xl md:text-[36px] font-semibold mb-8 md:mb-0 md:w-1/3 font-spartan"
          style={{ marginBottom: "2rem" }}
        >
          About me
        </h2>
        <div
          className="md:w-full text-sm sm:text-base font-roboto"
          style={{ marginBottom: "6rem" }}
        >
          <p className="mb-4 sm:mb-6">
            Hi, my name is Koen de Raden, and I'm an 18-year-old from Waalwijk,
            the Netherlands.
          </p>
          <p className="mb-4 sm:mb-6">
            During my time at Dr. Mollercollege, I discovered my passion for
            ICT. Choosing Informatics as an elective in my third year turned out
            to be the perfect decision, sparking my interest in the world of
            technology and digital innovation.
          </p>
          <p className="mb-4 sm:mb-6">
            Outside of school, I love visiting theme parks, gaming, and watching
            movies and series. For the past year and a half, I've also worked at
            the Efteling, primarily at the Pirańa attraction. This job has been
            a fantastic experience, teaching me about teamwork, responsibility,
            and customer interaction—all while having fun!
          </p>
          <p className="mb-1">
            My passion for ICT, combined with my creative hobbies and work
            experience, drives me to explore and grow in this exciting field.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">Coding Skills</h4>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {codingSkills.map((logo) => (
                <a
                  key={logo.id}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ width: "50px", height: "50px" }}
                >
                  <img
                    src={logo.bw}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer"
                  />
                  <img
                    src={logo.color}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">Design Skills</h4>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {designSkills.map((logo) => (
                <a
                  key={logo.id}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ width: "50px", height: "50px" }}
                >
                  <img
                    src={logo.bw}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer"
                  />
                  <img
                    src={logo.color}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">CMS Skills</h4>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {cmsSkills.map((logo) => (
                <a
                  key={logo.id}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ width: "50px", height: "50px" }}
                >
                  <img
                    src={logo.bw}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer"
                  />
                  <img
                    src={logo.color}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">
              Version Control Skills
            </h4>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {versionControlSkills.map((logo) => (
                <a
                  key={logo.id}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ width: "50px", height: "50px" }}
                >
                  <img
                    src={logo.bw}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0 cursor-pointer"
                  />
                  <img
                    src={logo.color}
                    alt={`${logo.name} logo`}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
