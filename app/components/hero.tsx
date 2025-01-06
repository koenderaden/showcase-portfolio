"use client"; 

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);

  // Stel de vertraging in om de tekst een voor een te laten verschijnen
  useEffect(() => {
    setTimeout(() => setShowFirstText(true), 250); // Eerste tekst  na 0,25 seconden
    setTimeout(() => setShowSecondText(true), 750); // Tweede tekst na 0,75 seconden
    setTimeout(() => setShowThirdText(true), 1250); // Derde tekst na 1,25 seconde
  }, []);

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
          {/* Eerste zin */}
          <p
            className={`font-spartan text-3xl md:text-4xl font-semibold mb-0 text-left transition-opacity duration-1000 ${
              showFirstText ? "opacity-100" : "opacity-0"
            }`}
          >
            Hi, my name is
          </p>

          {/* Tweede zin */}
          <h1
            className={`font-spartan text-6xl md:text-9xl font-bold mb-0 text-left transition-opacity duration-1000 ${
              showSecondText ? "opacity-100" : "opacity-0"
            }`}
          >
            Koen de Raden
          </h1>

          {/* Derde zin */}
          <p
            className={`font-spartan text-3xl md:text-4xl font-semibold mt-1 text-left transition-opacity duration-1000 ${
              showThirdText ? "opacity-100" : "opacity-0"
            }`}
          >
            ICT & Media Design Student
          </p>
        </div>
      </div>
    </section>
  );
}
