import Navbar from "@/components/Navbar";
import Footer from "@/components/contact";
import Image from "next/image";

export default function UpendoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-[60px] py-24 flex-grow">
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

        {/* Given: Branding Elements and Sitemap */}
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

        {/* Our Services */}
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

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-300">
            To ensure the Upendo platform met the requirements set by 2ManyDots,
            our team built a <strong>responsive website</strong> using{" "}
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
            href="https://fontys-upendo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#003A47] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-[#002626] transition-transform duration-300"
          >
            🌍 Live Demo
          </a>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#003A47]"></div>

          {/* Timeline Item 1 */}
          <div className="mb-24 flex items-center w-full group">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#F4C5FF] transition-all">
                Web Design
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                The Upendo Project’s design philosophy was crafted to align with
                the needs of 2ManyDots and their clients. It centers on creating
                a seamless and visually engaging user experience. Every aspect,
                from layout to typography, was carefully tailored to provide
                clarity, consistency, and ease of use for a broad audience.
              </p>
            </div>
            <div className="relative w-1/2 pl-8">
              <Image
                src="/upendoweb.png"
                alt="Web Design Overview"
                width={600}
                height={400}
                className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-24 flex items-center w-full flex-row-reverse group">
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-3xl font-semibold text-white group-hover:text-[#F4C5FF] transition-all">
                Optimized for Mobile
              </h3>
              <p className="mt-2 text-gray-300 group-hover:text-white transition-all">
                Our team implemented a mobile-first approach to ensure flawless
                functionality across all devices. The platform offers quick load
                times, responsive layouts, and intuitive navigation, meeting the
                high standards expected by 2ManyDots and their clients.
              </p>
            </div>
            <div className="relative w-1/2 pr-8">
              <div className="relative">
                <Image
                  src="/upendomobile.png"
                  alt="Mobile Optimization Showcase"
                  width={600}
                  height={400}
                  quality={100}
                  unoptimized
                  className="rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
