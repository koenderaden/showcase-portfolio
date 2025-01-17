import Navbar from "@/components/Navbar";
import Footer from "@/components/contact";
import Image from "next/image";

export default function MarketingLoomPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-24 px-6 flex-grow">
        {/* Project Title */}
        <h1 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-lg">
          Marketing Loom Project
        </h1>

        {/* Project Logo */}
        <div className="flex justify-center mb-16">
          <Image
            src="/marketingloomlogo.webp"
            alt="Marketing Loom Project Logo"
            width={400}
            height={400}
          />
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Introduction
          </h2>
          <p className="text-lg text-gray-300">
            Discover the Marketing Loom Project, an innovative platform designed
            to revolutionize digital marketing strategies through advanced
            analytics and creative solutions.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Key Features
          </h2>
          <ul className="text-lg text-gray-300 list-disc list-inside">
            <li>Data-driven marketing strategies.</li>
            <li>Innovative content creation tools.</li>
            <li>Comprehensive performance analytics.</li>
          </ul>
        </section>

        {/* Explore More Button */}
        <div className="flex justify-center mb-24">
          <a
            href="https://marketingloom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#667D77] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#556b63] transition-transform duration-300"
          >
            🚀 Explore More
          </a>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#667D77]"></div>

          {/* Timeline Item 1 */}
          <div className="mb-24 flex items-center w-full group">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                Concept Development
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Initial ideas and market research for Marketing Loom.
              </p>
            </div>
            <div className="relative w-1/2 pl-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#667D77] rounded-full border-2 border-white"></div>
              <Image
                src="/concept.png"
                alt="Concept Development"
                width={600}
                height={400}
                className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-24 flex items-center w-full flex-row-reverse group">
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                Product Launch
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Launching the first version of the Marketing Loom platform.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#667D77] rounded-full border-2 border-white"></div>
              <Image
                src="/launch.png"
                alt="Product Launch"
                width={600}
                height={400}
                className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
