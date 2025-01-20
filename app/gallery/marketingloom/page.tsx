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
  };

  const timelineImagesWebDesign = [
    { src: "/marketingloomwebhome.png", alt: "Web Design Image 1" },
    { src: "/marketingloomwebinloggen.png", alt: "Web Design Image 2" },
    { src: "/marketingloomwebnieuws.png", alt: "Web Design Image 3" },
    { src: "/marketingloomwebartikelen.png", alt: "Web Design Image 4" },
    { src: "/marketingloomwebartikel.png", alt: "Web Design Image 5" },
    { src: "/marketingloomwebinterviews.png", alt: "Web Design Image 6" },
    { src: "/marketingloomwebevenementenwebinars.png", alt: "Web Design Image 7" },
    { src: "/marketinloomwebinterviewartikel.png", alt: "Web Design Image 8" },
  ];

  const timelineImagesMobileDesign = [
    { src: "/marketingloommobile1.png", alt: "Mobile Design Image 1" },
    { src: "/marketingloommobile2.png", alt: "Mobile Design Image 2" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-24 px-[60px] flex-grow">
        {/* Project Logo */}
        <div className="flex justify-center mb-16">
          <Image
            src="/marketingloomlogo.svg"
            alt="Marketing Loom Project Logo"
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
            The <strong>Marketing Loom Project</strong> was developed by our
            team as a school project for <strong>2ManyDots</strong>. The goal
            was to provide marketing professionals, communication experts, and
            entrepreneurs with up-to-date insights, trends, and developments in
            the marketing industry. The platform delivers daily articles,
            in-depth analyses, expert interviews, case studies, and market data.
            Users can subscribe to newsletters and participate in webinars and
            events.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            The website is designed to be fast, user-friendly, and visually
            appealing while integrating interactive elements like an event
            calendar, social media integration, and advertisement placements.
            Built with <strong>Storyblok CMS</strong> and styled using{" "}
            <strong>Tailwind CSS</strong>, Marketing Loom ensures seamless
            content management and a modern, responsive design.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Key Features
          </h2>
          <ul className="text-lg text-gray-300 list-disc list-inside">
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
        <div className="flex justify-center mb-24">
          <a
            href="https://marketingloom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#E94560] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#E94560] transition-transform duration-300"
          >
            🌍 Live Demo
          </a>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#E94560]"></div>

          {/* Timeline Item 1: Web Design */}
          <div className="mb-24 flex items-center w-full group">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#E94560] transition-all">
                Web Design (Click on image for better view)
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                The Marketing Loom platform was crafted with a user-centered
                design approach. The focus was on creating a modern, visually
                engaging, and accessible interface that ensures users can easily
                navigate through articles, events, and tools.
              </p>
            </div>
            <div className="relative w-1/2 pl-8">
              <Slider {...sliderSettings}>
                {timelineImagesWebDesign.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-xl cursor-pointer"
                      onClick={() => openModal(image.src)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Timeline Item 2: Optimized for Mobile */}
          <div className="mb-24 flex items-center w-full flex-row-reverse group">
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#E94560] transition-all">
                Optimized for Mobile (Click on image for better view)
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Designed with a mobile-first approach, the platform ensures
                seamless performance and usability on all devices. From
                responsive layouts to fast load times, Marketing Loom delivers
                an intuitive experience for users on the go.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <Slider {...sliderSettings}>
                {timelineImagesMobileDesign.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-xl cursor-pointer"
                      onClick={() => openModal(image.src)}
                    />
                  </div>
                ))}
              </Slider>
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
