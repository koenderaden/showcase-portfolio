"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-[60px] bg-[#171717] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-spartan">Gallery</h3>
            <ul className="space-y-2 font-roboto">
              <li>
                <Link
                  href="/gallery/upendo"
                  className="font-spartan text-base text-white/80 hover:text-white hover:text-lg transition-all duration-300"
                >
                  Upendo
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery/marketingloom"
                  className="font-spartan text-base text-white/80 hover:text-white hover:text-lg transition-all duration-300"
                >
                  MarketingLoom
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery/dmcaudiotour"
                  className="font-spartan text-base text-white/80 hover:text-white hover:text-lg transition-all duration-300"
                >
                  Danse Macabre Audio Tour
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 font-spartan">Contact</h3>
            <div className="font-roboto">
              <p className="mb-2">Email: contact@example.com</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Address: 123 Art Street, Creativity City, AC 12345</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 font-spartan">About Me</h3>
            <div className="font-roboto">
              <p className="mb-4">
                I'm a passionate photographer capturing the beauty of the world
                through my lens. With over 10 years of experience, I specialize
                in nature, urban, and abstract photography.
              </p>
              <Link
                href="/about"
                className="font-spartan text-base text-white/80 hover:text-white hover:text-lg transition-all duration-300"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center font-roboto">
          <p>&copy; 2025 Your Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
