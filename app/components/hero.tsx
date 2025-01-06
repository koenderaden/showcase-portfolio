import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Achtergrondafbeelding */}
      <Image
        src="/imagekoen.png"
        alt="Hero background"
        fill
        className="object-cover"
      />
      {/* Donkere overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-25" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-[60px]">
          {/* Bovenste tekst  */}
          <p className="font-spartan text-3xl md:text-4xl font-semibold mb-0 text-left">
            Hi, my name is
          </p>

          {/* Naam */}
          <h1 className="font-spartan text-6xl md:text-9xl font-bold mb-0 text-left">
            Koen de Raden
          </h1>

          {/* Onderste tekst*/}
          <p className="font-spartan text-3xl md:text-4xl font-semibold mt-1 text-left">
            ICT & Media Design Student
          </p>
        </div>
      </div>
    </section>
  );
}
