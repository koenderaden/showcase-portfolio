import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/imagekoen.png"
          alt="Hero Background"
          layout="fill"
          quality={100}
        />
      </div>
    </div>
  );
}
