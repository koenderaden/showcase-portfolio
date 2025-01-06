import Image from "next/image";

export default function Gallery() {
  const projects = [
    {
      id: 1,
      image: {
        src: "/marketingloomgallery.png",
        height: 400,
        width: 424,
      },
      alt: "Marketing Loom",
    },
    {
      id: 2,
      image: {
        src: "/mcracegallery.png",
        height: 400,
        width: 424,
      },
      alt: "MC Race",
    },
    {
      id: 3,
      image: {
        src: "/upendogallery.png",
        height: 400,
        width: 424,
      },
      alt: "Upendo",
    },
    {
      id: 4,
      image: {
        src: "/dansemacabreaudiotourgallery.png",
        height: 400,
        width: 424,
      },
      alt: "Danse Macabre",
    },
    {
      id: 5,
      image: {
        src: "/socceranimationgallery.png",
        height: 400,
        width: 424,
      },
      alt: "Soccer Animation",
    },
    {
      id: 6,
      image: {
        src: "/placeholder.svg",
        height: 400,
        width: 424,
      },
      alt: "Placeholder Project",
    },
  ];

  return (
    <section className="py-20 bg-background-light relative">
      <div className="container mx-auto px-[60px]">
        {/* Gallery title */}
        <h2 className="font-spartan text-[36px] font-semibold mb-12 text-text-primary">
          Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group w-[424px] h-[400px] rounded-lg border-[1px] border-white overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-full overflow-hidden rounded-[15px]">
                <Image
                  src={project.image.src}
                  alt={project.alt}
                  width={project.image.width}
                  height={project.image.height}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[15px]">
                <p className="font-spartan text-xl md:text-2xl font-semibold underline text-white">
                  {project.alt}
                </p>
              </div>
            </div>
          ))}

          {/* Starsright */}
          <div
            className="absolute z-50 pointer-events-none"
            style={{
              top: "calc(-133px + 100px)", // Positioneer boven project 3
              right: "-10px",
            }}
          >
            <img
              src="/starsright.svg"
              alt="Stars Right"
              className="w-[64px] h-[64px]"
            />
          </div>

          {/* Starsleft */}
          <div
            className="absolute z-50 pointer-events-none"
            style={{
              top: "calc(600px + 200px)", // Positioneer boven project 4
              left: "-33px",
            }}
          >
            <img
              src="/starsleft.svg"
              alt="Stars Left"
              className="w-[64px] h-[64px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
