"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/contact";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UpendoPage() {
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
    { src: "/upendoweb/upendowebhome.png", alt: "Web Design Image 1" },
    { src: "/upendoweb/upendowebabout.png", alt: "Web Design Image 2" },
    { src: "/upendoweb/upendowebservice.png", alt: "Web Design Image 3" },
    { src: "/upendoweb/upendowebpricing.png", alt: "Web Design Image 4" },
    { src: "/upendoweb/upendowebtraining.png", alt: "Web Design Image 5" },
    { src: "/upendoweb/upendowebschedule.png", alt: "Web Design Image 6" },
  ];

  const timelineImagesMobileDesign = [
    { src: "/upendomobile/upendomobile1.png", alt: "Mobile Design Image 1" },
    { src: "/upendomobile/upendomobile2.png", alt: "Mobile Design Image 2" },
    { src: "/upendomobile/upendomobile3.png", alt: "Mobile Design Image 3" },
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
            src="/upendologo.svg"
            alt="Upendo Project Logo"
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
            The <strong>Upendo Project</strong> was developed by our team as a
            dedicated project for <strong>2ManyDots</strong>. The goal was to
            provide businesses with clear and accessible data-driven solutions.
            Upendo focuses on simplifying complex data insights, setting it
            apart from traditional web development services. Designed
            specifically for <strong>SMEs</strong> and{" "}
            <strong>semi-government institutions</strong>, the platform delivers
            a seamless experience to make data-driven decision-making easier and
            more effective. The website is fully developed in{" "}
            <strong>English</strong> to cater to a broader audience.
          </p>
        </section>
        {/* Branding Elements and Sitemap */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Given: Branding Elements and Sitemap
          </h2>
          <p className="text-lg text-gray-300">
            At the start of the project, we were provided with key branding
            elements and a structured sitemap by <strong>2ManyDots</strong>.
            These materials ensured that the project aligned with their vision
            and branding guidelines.
          </p>
          <ul className="text-lg text-gray-300 list-disc list-inside">
            <li>
              <strong>Branding Elements</strong> - Included color schemes,
              typography, logos, and other design assets to ensure consistency
              throughout the platform.
            </li>
            <li>
              <strong>Sitemap</strong> - Provided a clear structure for
              navigation and content hierarchy, ensuring an intuitive user
              experience.
            </li>
          </ul>
        </section>
        {/* Services Provided */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Services Provided
          </h2>
          <p className="text-lg text-gray-300">
            As part of the project for 2ManyDots, we created a comprehensive
            suite of features designed to simplify data handling and analysis
            for their clients.
          </p>
          <ul className="text-lg text-gray-300 list-disc list-inside">
            <li>
              <strong>Configuration</strong> - Customizing data setups to meet
              business needs.
            </li>
            <li>
              <strong>Optimization</strong> - Enhancing data performance for
              better efficiency.
            </li>
            <li>
              <strong>Visualization</strong> - Creating clear, interactive data
              displays.
            </li>
            <li>
              <strong>Analysis</strong> - Providing detailed insights and data
              interpretation.
            </li>
            <li>
              <strong>Training</strong> - Educating teams on data tools and best
              practices.
            </li>
          </ul>
        </section>

        {/* Explore More Button */}
        <div className="flex justify-center mb-24">
          <a
            href="https://fontys-upendo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#002626] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#003A47] transition-transform duration-300"
          >
            🌍 Live Demo
          </a>
        </div>
        {/* Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#A8FF1A]"></div>

          {/* Timeline Item 1: Web Design */}
          <div className="mb-24 flex items-center w-full group">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#A8FF1A] transition-all">
                Web Design (Click on image for better view)
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                The Upendo Project’s design philosophy was crafted to align with
                the needs of 2ManyDots and their clients. It centers on creating
                a seamless and visually engaging user experience.
              </p>
            </div>
            <div className="relative w-1/2 pl-8 ">
              <Slider {...sliderSettings}>
                {timelineImagesWebDesign.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
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
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#A8FF1A] transition-all">
                Optimized for Mobile (Click on image for better view)
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Our team implemented a mobile-first approach to ensure flawless
                functionality across all devices. The platform offers quick load
                times, responsive layouts, and intuitive navigation.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <Slider {...sliderSettings}>
                {timelineImagesMobileDesign.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
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
