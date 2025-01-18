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
            team at <strong>2ManyDots</strong> to provide marketing
            professionals, communication experts, and entrepreneurs with
            up-to-date insights, trends, and developments in the marketing
            industry. The platform delivers daily articles, in-depth analyses,
            expert interviews, case studies, and market data. Users can
            subscribe to newsletters and participate in webinars and events.
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

          {/* Timeline Item 1 */}
          <div className="mb-24 flex items-center w-full group">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#E94560] transition-all">
                Concept Development
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Initial ideas and market research for Marketing Loom.
              </p>
            </div>
            <div className="relative w-1/2 pl-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#E94560] rounded-full border-2 border-white"></div>
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
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#E94560] transition-all">
                Product Launch
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Launching the first version of the Marketing Loom platform.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#E94560] rounded-full border-2 border-white"></div>
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
