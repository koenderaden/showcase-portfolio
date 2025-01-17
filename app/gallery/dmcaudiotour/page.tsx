import Navbar from "@/components/Navbar";
import Footer from "@/components/contact";
import Image from "next/image";

export default function DmcaudioTourPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-24 flex-grow">
        <h1 className="text-5xl font-bold mb-10 text-center text-gray-800 animate-fade-in">
          Danse Macabre Audio Tour
        </h1>
        <p className="mb-20 text-center text-lg text-gray-600 animate-fade-in delay-200">
          Ontdek de geheimen en geschiedenis achter de Danse Macabre.
        </p>

        {/* Scrollable Timeline */}
        <div className="relative mx-auto max-w-6xl">
          <div className="border-l-4 border-gray-400 ml-6">
            {/* Timeline Item 1 */}
            <div className="mb-20 ml-8 flex items-center group">
              <div className="w-1/2 pr-8">
                <h3 className="text-3xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-all">
                  Introductie
                </h3>
                <p className="text-gray-600 group-hover:text-black transition-all">
                  Een inleiding tot de Danse Macabre Audio Tour.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src="/imagekoen.png"
                  alt="Introductie"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-20 ml-8 flex items-center group flex-row-reverse">
              <div className="w-1/2 pl-8">
                <h3 className="text-3xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-all">
                  De Geschiedenis
                </h3>
                <p className="text-gray-600 group-hover:text-black transition-all">
                  Ontdek de historische achtergrond van de Danse Macabre.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src="/imagekoen.png"
                  alt="Geschiedenis"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="mb-20 ml-8 flex items-center group">
              <div className="w-1/2 pr-8">
                <h3 className="text-3xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-all">
                  Interactieve Ervaring
                </h3>
                <p className="text-gray-600 group-hover:text-black transition-all">
                  Beleef de Danse Macabre Audio Tour op een interactieve manier.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src="/imagekoen.png"
                  alt="Interactieve Ervaring"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-500"
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
