import Navbar from "@/components/Navbar";
import Footer from "@/components/contact";
import Image from "next/image";

export default function UpendoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-24 px-6 flex-grow">
        {/* Project Title */}
        <h1 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-lg">
          Upendo Project
        </h1>

        {/* Project Logo */}
        <div className="flex justify-center mb-16">
          <Image
            src="/upendologo.webp"
            alt="Upendo Project Logo"
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
            Learn more about the Upendo Project, a unique initiative aimed at
            creating meaningful change and fostering innovation through
            technology.
          </p>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Objectives</h2>
          <ul className="text-lg text-gray-300 list-disc list-inside">
            <li>Empower communities through technology.</li>
            <li>Promote sustainable solutions for global challenges.</li>
            <li>Encourage innovation and creativity in problem-solving.</li>
          </ul>
        </section>

        {/* Learn More Button */}
        <div className="flex justify-center mb-24">
          <a
            href="https://upendo-project.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#667D77] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#556b63] transition-transform duration-300"
          >
            🌍 Learn More
          </a>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#667D77]"></div>

          {/* Timeline Item 1 */}
          <div className="mb-24 flex items-center w-full group">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#667D77] transition-all">
                Project Launch
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                The Upendo Project officially launched, introducing innovative
                solutions for communities.
              </p>
            </div>
            <div className="relative w-1/2 pl-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#667D77] rounded-full border-2 border-white"></div>
              <Image
                src="/launch_upendo.png"
                alt="Project Launch"
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
                Community Impact
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Positive changes and sustainable development in local
                communities.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#667D77] rounded-full border-2 border-white"></div>
              <Image
                src="/impact.png"
                alt="Community Impact"
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
