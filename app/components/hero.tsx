import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-[60px]">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Koen de Raden</h1>
        </div>
      </div>
    </section>
  );
}
