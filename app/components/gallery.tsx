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
      alt: "Project 1",
    },
    {
      id: 2,
      image: {
        src: "/mcracegallery.png",
        height: 400,
        width: 424,
      },
      alt: "Project 2",
    },
    {
      id: 3,
      image: {
        src: "/socceranimationgallery.png",
        height: 400,
        width: 424,
      },
      alt: "Project 3",
    },
    {
      id: 4,
      image: {
        src: "/upendogallery.png",
        height: 400,
        width: 424,
      },
      alt: "Project 4",
    },
    {
      id: 5,
      image: {
        src: "/placeholder.svg",
        height: 400,
        width: 424,
      },
      alt: "Project 5",
    },
    {
      id: 6,
      image: {
        src: "/placeholder.svg",
        height: 400,
        width: 424,
      },
      alt: "Project 6",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-[60px]">
        <h2 className="text-4xl font-bold mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative w-[424px] h-[400px] rounded-lg border-[1px] border-white"
              style={{ overflow: "visible" }} // Maak overflow zichtbaar
            >
              <Image
                src={project.image.src}
                alt={project.alt}
                width={project.image.width}
                height={project.image.height}
                className="object-cover transition-transform group-hover:scale-110"
              />

              {/* SVG toevoegen op basis van index */}
              {index === 2 && (
                <div
                  className="absolute"
                  style={{
                    top: "-50px", // Zorgt dat de SVG uitsteekt naar boven
                    right: "-50px", // Zorgt dat de SVG uitsteekt naar rechts
                  }}
                >
                  <img
                    src="/starsright.svg"
                    alt="Stars Right"
                    className="w-100 h-100" // Pas grootte van de SVG aan
                  />
                </div>
              )}
              {index === 3 && (
                <div
                  className="absolute"
                  style={{
                    bottom: "-50px", // Zorgt dat de SVG uitsteekt naar onder
                    left: "-50px", // Zorgt dat de SVG uitsteekt naar links
                  }}
                >
                  <img
                    src="/starsleft.svg"
                    alt="Stars Left"
                    className="w-100 h-100" // Pas grootte van de SVG aan
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
