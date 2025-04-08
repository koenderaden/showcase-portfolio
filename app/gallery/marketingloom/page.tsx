"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/contact";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MarketingLoomPage() {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const timelineImagesWebDesign = [
    {
      src: "/marketingloomweb/marketingloomwebhome.png",
      alt: "Web Design Image 1",
    },
    {
      src: "/marketingloomweb/marketingloomwebinloggen.png",
      alt: "Web Design Image 2",
    },
    {
      src: "/marketingloomweb/marketingloomwebnieuws.png",
      alt: "Web Design Image 3",
    },
    {
      src: "/marketingloomweb/marketingloomwebartikelen.png",
      alt: "Web Design Image 4",
    },
    {
      src: "/marketingloomweb/marketingloomwebartikel.png",
      alt: "Web Design Image 5",
    },
    {
      src: "/marketingloomweb/marketingloomwebinterviews.png",
      alt: "Web Design Image 6",
    },
    {
      src: "/marketingloomweb/marketingloomwebevenementenwebinars.png",
      alt: "Web Design Image 7",
    },
    {
      src: "/marketingloomweb/marketingloomwebinterviewartikel.png",
      alt: "Web Design Image 8",
    },
  ];

  const timelineImagesMobileDesign = [
    {
      src: "/marketingloommobile/marketingloommobile1.png",
      alt: "Mobile Design Image 1",
    },
    {
      src: "/marketingloommobile/marketingloommobile2.png",
      alt: "Mobile Design Image 2",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[60px] flex-grow mt-16 sm:mt-20">
        {/* Project Logo */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <Image
            src="/marketingloomlogo.svg"
            alt="Marketing Loom Project Logo"
            width={600}
            height={800}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>

        {/* Introduction */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
            Introduction
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            The <strong>Marketing Loom Project</strong> was developed by our
            team as a school project for <strong>2ManyDots</strong>. The goal
            was to provide marketing professionals, communication experts, and
            entrepreneurs with up-to-date insights, trends, and developments in
            the marketing industry. The platform delivers daily articles,
            in-depth analyses, expert interviews, case studies, and market data.
            Users can subscribe to newsletters and participate in webinars and
            events.
          </p>
          <p className="text-base sm:text-lg text-gray-300 mt-3 sm:mt-4">
            The website is designed to be fast, user-friendly, and visually
            appealing while integrating interactive elements like an event
            calendar, social media integration, and advertisement placements.
            Built with <strong>Storyblok CMS</strong> and styled using{" "}
            <strong>Tailwind CSS</strong>, Marketing Loom ensures seamless
            content management and a modern, responsive design.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 sm:mb-4">
            Key Features
          </h2>
          <ul className="text-base sm:text-lg text-gray-300 list-disc list-inside space-y-2">
            <li>Daily articles, analyses, and expert interviews.</li>
            <li>Interactive event calendar for webinars and events.</li>
            <li>Newsletter subscriptions and social media integration.</li>
            <li>Advertisement space for targeted marketing campaigns.</li>
            <li>
              Built with <strong>Storyblok CMS</strong> and styled using{" "}
              <strong>Tailwind CSS</strong>.
            </li>
          </ul>
        </section>

        {/* Explore More Button */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-24">
          <a
            href="https://marketingloom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[300px] sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#E94560] text-white text-base sm:text-lg font-bold rounded-lg shadow-lg hover:bg-[#E94560] transition-all duration-300 flex items-center justify-center"
          >
            🌍 Live Demo
          </a>
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
                MarketingLoom is designed with a modern, clean interface that
                emphasizes user experience and accessibility. The design features
                a responsive layout that adapts seamlessly across all devices,
                ensuring a consistent experience whether on desktop, tablet, or
                mobile.
              </p>
            </div>

            {/* Right side: Image centered */}
            <div className="relative w-full sm:w-1/2 pl-0 sm:pl-8 flex items-center justify-center">
              <div className="relative group">
                <Image
                  src="/marketingloomweb/marketingloomwebhome.png"
                  alt="Introduction"
                  width={300}
                  height={200}
                  className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => openModal("/marketingloomweb/marketingloomwebhome.png")}
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl cursor-pointer"
                  onClick={() => openModal("/marketingloomweb/marketingloomwebhome.png")}
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
                Features (Click on Image for better view)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300 group-hover:text-white transition-all">
                MarketingLoom offers a comprehensive suite of tools for digital
                marketing professionals. Key features include:
              </p>
              <ul className="mt-2 text-sm sm:text-base text-gray-300 group-hover:text-white transition-all list-disc list-inside">
                <li>Advanced analytics dashboard</li>
                <li>Social media management tools</li>
                <li>Content calendar and scheduling</li>
                <li>SEO optimization tools</li>
                <li>Email marketing integration</li>
              </ul>
            </div>
            <div className="relative w-full sm:w-1/2 pr-0 sm:pr-8">
              <div className="relative group">
                <Image
                  src="/marketingloommobile/marketingloommobile1.png"
                  alt="Features"
                  width={400}
                  height={400}
                  className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => openModal("/marketingloommobile/marketingloommobile1.png")}
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl cursor-pointer"
                  onClick={() => openModal("/marketingloommobile/marketingloommobile1.png")}
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
          <div className="relative w-[90vw] h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Fullscreen Image"
              className="rounded-lg object-contain"
              fill
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
