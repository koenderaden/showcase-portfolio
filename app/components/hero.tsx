"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const [showName, setShowName] = useState(false);
  const [showFirstText, setShowFirstText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowName(true), 250);
    setTimeout(() => setShowFirstText(true), 1000);
    setTimeout(() => setShowThirdText(true), 1500);
    setTimeout(() => setShowNavbar(true), 2000); 
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      {showNavbar && <Navbar />}
      <Image
        src="/imagekoen.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-[60px]">
          <div className="max-w-3xl">
            <p
              className={`font-spartan text-2xl md:text-3xl font-semibold mb-2 text-left text-white/90 transition-all duration-1000 ${
                showFirstText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Hi, my name is
            </p>

            <h1
              className={`font-spartan text-6xl md:text-8xl font-bold mb-4 text-left text-white transition-all duration-1000 ${
                showName
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Koen de Raden
            </h1>

            <p
              className={`font-spartan text-2xl md:text-3xl font-semibold mt-1 text-left text-white/90 transition-all duration-1000 ${
                showThirdText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              ICT & Media Design Student
            </p>

            <div
              className={`mt-8 transition-all duration-1000 ${
                showThirdText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
