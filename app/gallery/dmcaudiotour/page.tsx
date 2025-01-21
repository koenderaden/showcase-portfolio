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

        {/* App Availability */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            App Availability
          </h2>
          <p className="text-lg text-gray-300">
            To make the app easily accessible, I deployed it using Appflow,
            which allows users to download the app directly (currently available
            only for Android). For those without Android devices, the app can
            also be viewed and tested on Appetize.io. This ensures that all
            visitors can enjoy the app regardless of their platform.
          </p>
        </section>

        {/* QR Code Integration */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            QR Code Integration
          </h2>
          <p className="text-lg text-gray-300">
            To enhance accessibility and add a thematic element, I created a QR
            code that I plan to display on themed signboards throughout the
            queue. Visitors will be able to easily access the audio tour by
            scanning the QR code with their smartphones, making the experience
            both convenient and immersive.
          </p>
        </section>

        {/* Live Demo Button */}
        <div className="flex justify-center items-center gap-8 mb-24">
          {/* Live Demo Knop */}
          <a
            href="https://appetize.io/app/b_shhatdzanykrvdlryt67kfv4ri"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#667D77] text-white flex justify-center text-center text-lg font-bold rounded-lg shadow-lg hover:bg-[#556b63] transition-transform duration-300"
          >
            🎧 Live Demo 🎧
            <br />
            (Appetize.io)
          </a>
          <div className="relative w-48 h-48 shadow-lg cursor-pointer">
            {/* QR-code afbeelding */}
            <img
              src="/dmcaudiotour/dmcqr.png"
              alt="QR Code for Live Demo"
              className="w-full h-full object-cover"
              onClick={() => openModal("/dmcaudiotour/dmcqr.png")}
            />
            {/* Overlay met tekst */}
            <div
              className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white font-bold text-lg hover:bg-opacity-50 transition-all text-center"
              onClick={() => openModal("/dmcaudiotour/dmcqr.png")}
            >
              <div>
                Click on Me
                <br />
                (Then Scan Me)
              </div>

              {/* Android-logo onder de tekst */}
              <img
                src="/androidlogo.png"
                alt="Android Logo"
                className="w-20 h-20 mt-4"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#667D77] opacity-70"></div>

          {/* Timeline Item 1 */}
          <div className="mb-24 flex items-center w-full group">
            {/* Linkerkant: Tekst */}
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                WebDesign
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                I designed the Danse Macabre Audio Tour app to reflect the eerie
                and enchanting atmosphere of the attraction. The design blends
                dark, gothic elements with user-friendly navigation, creating an
                immersive digital experience that complements the storytelling
                and theme of the tour.
              </p>
            </div>

            {/* Rechterkant: Afbeelding gecentreerd */}
            <div className="relative w-1/2 pl-8 flex items-center justify-center">
              <Image
                src="/dmcaudiotour/dmcaudiotourmobile1.png"
                alt="Introduction"
                width={200}
                height={200}
                className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() =>
                  openModal("/dmcaudiotour/dmcaudiotourmobile1.png")
                }
              />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-24 flex items-center w-full  justify-center flex-row-reverse group">
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                App Availability
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                The Danse Macabre Audio Tour app is available for Android via a
                QR code generated through Appflow, allowing you to download and
                experience the app seamlessly.
              </p>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Unfortunately, due to not having access to a MacBook or an iOS
                certificate, I cannot publish the app to the iOS App Store. To
                make it accessible, the app is hosted on the cloud-based
                emulator <strong>Appetize.io</strong>, where you can run the app
                directly on your browser.
              </p>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Try the app on Appetize.io using the green button above.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <Image
                src="/dmcaudiotour/dmcqr.png"
                alt="History"
                width={400}
                height={400}
                className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => openModal("/dmcaudiotour/dmcqr.png")}
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
