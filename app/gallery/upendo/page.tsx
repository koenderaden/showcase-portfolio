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
            The <strong>Upendo Project</strong> was developed by our team at{" "}
            <strong>2ManyDots</strong> to offer businesses clear and accessible
            data-driven solutions. Upendo focuses on simplifying complex data
            insights, setting it apart from traditional web development
            services. Designed specifically for <strong>SMEs</strong> and{" "}
            <strong>semi-government institutions</strong>, the platform provides
            a seamless experience to make data-driven decision-making easier and
            more effective. The website is fully developed in{" "}
            <strong>English</strong> to cater to a broader audience.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-300">
            Upendo offers a comprehensive suite of services designed to simplify
            data handling and analysis for businesses.
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

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-300">
            To support Upendo's functionality, we built a{" "}
            <strong>responsive website</strong> using the{" "}
            <strong>Storyblok CMS</strong>. This modern content management
            system allows seamless page, content, and form management without
            the need for traditional page builders.
          </p>
          <ul className="text-lg text-gray-300 list-disc list-inside">
            <li>
              Efficient <strong>training program management</strong>
            </li>
            <li>
              Dynamic and flexible <strong>pricing tables</strong>
            </li>
            <li>
              Integrated <strong>SEO optimization</strong> tools
            </li>
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
