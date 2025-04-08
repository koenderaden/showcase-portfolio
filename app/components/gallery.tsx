import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const projects = [
    {
      id: 1,
      image: {
        src: "/upendogallery.png",
        height: 400,
        width: 424,
      },
      alt: "Upendo",
      link: "/gallery/upendo",
    },
    {
      id: 2,
      image: {
        src: "/dansemacabreaudiotourgallery.png",
        height: 400,
        width: 424,
      },
      alt: "Danse Macabre Audio Tour",
      link: "/gallery/dmcaudiotour",
    },
    {
      id: 3,
      image: {
        src: "/marketingloomgallery.png",
        height: 400,
        width: 424,
      },
      alt: "Marketing Loom",
      link: "/gallery/marketingloom",
    },
    {
      id: 4,
      content: "Under Maintenance",
    },
    {
      id: 5,
      content: "Under Maintenance",
    },
    {
      id: 6,
      content: "Under Maintenance",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-background-light relative">
      <div className="container mx-auto px-4 sm:px-[60px]">
        <h2 className="font-spartan text-2xl sm:text-3xl md:text-[36px] font-semibold mb-8 sm:mb-12 text-text-primary">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 relative">
          {projects.map((project) => {
            const imageContent = project.image ? (
              <div
                key={project.id}
                className="relative group w-full aspect-[1.06] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="w-full h-full overflow-hidden rounded-[15px]">
                  <Image
                    src={project.image.src}
                    alt={project.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[15px]">
                  <p className="font-spartan text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {project.alt}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={project.id}
                className="relative group w-full aspect-[1.06] rounded-lg overflow-hidden cursor-pointer bg-[#171717] flex items-center justify-center"
              >
                <p className="font-spartan text-lg sm:text-xl md:text-2xl font-semibold text-text-primary">
                  {project.content}
                </p>
              </div>
            );

            return project.link ? (
              <Link 
                href={project.link} 
                key={project.id}
                className="block w-full relative group"
              >
                {imageContent}
                <div className="absolute bottom-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view
                </div>
              </Link>
            ) : (
              imageContent
            );
          })}

          <div
            className="absolute z-50 pointer-events-none hidden sm:block"
            style={{
              top: "calc(-133px + 100px)",
              right: "-10px",
            }}
          >
            <img
              src="/starsright.svg"
              alt="Stars Right"
              className="w-12 sm:w-16 h-12 sm:h-16"
            />
          </div>

          <div
            className="absolute z-50 pointer-events-none hidden sm:block"
            style={{
              top: "calc(600px + 200px)",
              left: "-33px",
            }}
          >
            <img
              src="/starsleft.svg"
              alt="Stars Left"
              className="w-12 sm:w-16 h-12 sm:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
