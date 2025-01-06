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
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-[424px] h-[400px] rounded-lg overflow-hidden group border-[1px] border-white" // Border toegevoegd
            >
              <Image
                src={project.image.src}
                alt={project.alt}
                width={project.image.width}
                height={project.image.height}
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
