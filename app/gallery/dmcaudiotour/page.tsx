"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/contact";
import Image from "next/image";
import { useState } from "react";

export default function DmcaudioTourPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-24 px-[60px] flex-grow">
        {/* Project Logo */}
        <div className="flex justify-center mb-16">
          <Image
            src="/dmclogo.webp"
            alt="Danse Macabre Logo"
            width={800}
            height={800}
          />
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Introduction
          </h2>
          <p className="text-lg text-gray-300">
            The idea for the Danse Macabre Audio Tour was born from my personal
            experience working at the new Danse Macabre attraction in Efteling
            during its opening week. Many visitors frequently asked me about the
            story behind the attraction. At the same time, the queue was
            extremely busy, sometimes reaching waiting times of 5 to 6 hours.
            This inspired me to create an audio tour that guests could access by
            scanning QR codes while waiting in line. Through this tour, visitors
            can explore the story behind the attraction, making their wait more
            engaging and informative.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            I also started this project to develop my app-building skills. To
            bring this idea to life, I used the Ionic Framework with React to
            create a smooth and interactive experience.
          </p>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Requirements
          </h2>
          <ul className="text-lg text-gray-300 list-disc list-inside">
            <li>Stable internet connection for the audio experience.</li>
            <li>Headphones for the best sound quality.</li>
            <li>Smartphone or tablet for easy access.</li>
          </ul>
        </section>

        {/* Live Demo Button */}
        <div className="flex justify-center mb-24">
          <a
            href="https://demo-website.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#667D77] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#556b63] transition-transform duration-300"
          >
            🎧 Live Demo
          </a>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#667D77] to-[#082823] opacity-70"></div>

          {/* Timeline Item 1 */}
          <div className="mb-24 flex items-center w-full group">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                Design
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                An introduction to the Danse Macabre Audio Tour.
              </p>
            </div>
            <div className="relative w-1/2 pl-8">
              <Image
                src="/imagekoen.png"
                alt="Introduction"
                width={600}
                height={400}
                className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => openModal("/imagekoen.png")}
              />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-24 flex items-center w-full flex-row-reverse group">
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                The App
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Discover the historical background of the Danse Macabre.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <Image
                src="/imagekoen.png"
                alt="History"
                width={600}
                height={400}
                className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => openModal("/imagekoen.png")}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full w-[90vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt="Fullscreen Image"
              fill
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
              onClick={closeModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
