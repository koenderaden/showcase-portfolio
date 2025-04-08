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
      <main className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[60px] flex-grow mt-16 sm:mt-20">
        {/* Project Logo */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <Image
            src="/dmclogo.webp"
            alt="Danse Macabre Logo"
            width={800}
            height={800}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[800px] h-auto"
          />
        </div>

        {/* Introduction */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
            Introduction
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
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
          <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4">
            I also started this project to develop my app-building skills. To
            bring this idea to life, I used the Ionic Framework with React to
            create a smooth and interactive experience.
          </p>
        </section>

        {/* App Availability */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
            App Availability
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            To make the app easily accessible, I deployed it using Appflow,
            which allows users to download the app directly (currently available
            only for Android). For those without Android devices, the app can
            also be viewed and tested on Appetize.io. This ensures that all
            visitors can enjoy the app regardless of their platform.
          </p>
        </section>

        {/* QR Code Integration */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
            QR Code Integration
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            To enhance accessibility and add a thematic element, I created a QR
            code that I plan to display on themed signboards throughout the
            queue. Visitors will be able to easily access the audio tour by
            scanning the QR code with their smartphones, making the experience
            both convenient and immersive.
          </p>
        </section>

        {/* Live Demo Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12 sm:mb-16 md:mb-24">
          {/* Live Demo Button */}
          <a
            href="https://appetize.io/app/b_shhatdzanykrvdlryt67kfv4ri"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[300px] sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#667D77] text-white flex justify-center text-center text-base sm:text-lg font-bold rounded-lg shadow-lg hover:bg-[#556b63] transition-all duration-300"
          >
            🎧 Live Demo 🎧
            <br />
            (Appetize.io)
          </a>
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 shadow-lg cursor-pointer">
            {/* QR-code image */}
            <img
              src="/dmcaudiotour/dmcqr.png"
              alt="QR Code for Live Demo"
              className="w-full h-full object-cover"
              onClick={() => openModal("/dmcaudiotour/dmcqr.png")}
            />
            {/* Overlay with text */}
            <div
              className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white font-bold text-sm sm:text-lg hover:bg-opacity-50 transition-all text-center p-2"
              onClick={() => openModal("/dmcaudiotour/dmcqr.png")}
            >
              <div>
                Click on Me
                <br />
                (Then Scan Me)
              </div>

              {/* Android-logo under the text */}
              <img
                src="/androidlogo.png"
                alt="Android Logo"
                className="w-12 h-12 sm:w-20 sm:h-20 mt-2 sm:mt-4"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-[#667D77] opacity-70 hidden sm:block"></div>

          {/* Timeline Item 1 */}
          <div className="mb-12 sm:mb-16 md:mb-24 flex flex-col sm:flex-row items-center w-full group">
            {/* Left side: Text */}
            <div className="w-full sm:w-1/2 pr-0 sm:pr-8 text-center sm:text-right mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                WebDesign (Click on Image for better view)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300 group-hover:text-white transition-all">
                I designed the Danse Macabre Audio Tour app to reflect the eerie
                and enchanting atmosphere of the attraction. The design blends
                dark, gothic elements with user-friendly navigation, creating an
                immersive digital experience that complements the storytelling
                and theme of the tour.
              </p>
            </div>

            {/* Right side: Image centered */}
            <div className="relative w-full sm:w-1/2 pl-0 sm:pl-8 flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/dmcaudiotour/dmcaudiotourmobile1.png"
                  alt="Introduction"
                  width={200}
                  height={200}
                  className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => openModal("/dmcaudiotour/dmcaudiotourmobile1.png")}
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl cursor-pointer"
                  onClick={() => openModal("/dmcaudiotour/dmcaudiotourmobile1.png")}
                >
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg font-medium">
                    Click to view
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-12 sm:mb-16 md:mb-24 flex flex-col sm:flex-row items-center w-full justify-center sm:flex-row-reverse group">
            <div className="w-full sm:w-1/2 pl-0 sm:pl-8 text-center sm:text-left mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                App Availability (Click on Image for scan)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300 group-hover:text-white transition-all">
                The Danse Macabre Audio Tour app is available for Android via a
                QR code generated through Appflow, allowing you to download and
                experience the app seamlessly.
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-300 group-hover:text-white transition-all">
                Unfortunately, due to not having access to a MacBook or an iOS
                certificate, I cannot publish the app to the iOS App Store. To
                make it accessible, the app is hosted on the cloud-based
                emulator <strong>Appetize.io</strong>, where you can run the app
                directly on your browser.
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-300 group-hover:text-white transition-all">
                Try the app on Appetize.io using the green button above.
              </p>
            </div>
            <div className="relative w-full sm:w-1/2 pr-0 sm:pr-8">
              <div className="relative">
                <Image
                  src="/dmcaudiotour/dmcqr.png"
                  alt="History"
                  width={400}
                  height={400}
                  className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => openModal("/dmcaudiotour/dmcqr.png")}
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl cursor-pointer"
                  onClick={() => openModal("/dmcaudiotour/dmcqr.png")}
                >
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg font-medium">
                    Click to view
                  </span>
                </div>
              </div>
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
