"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-[60px] bg-[#171717] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-spartan">Gallery</h3>
            <ul className="space-y-2 font-roboto">
              <li>
                <Link
                  href="/gallery/upendo"
                  className="font-spartan text-lg sm:text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Upendo
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery/marketingloom"
                  className="font-spartan text-lg sm:text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  MarketingLoom
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery/dmcaudiotour"
                  className="font-spartan text-lg sm:text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Danse Macabre Audio Tour
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-spartan">Contact</h3>
            <div className="font-roboto space-y-2">
              <div className="flex items-center">
                <Image
                  src="/svgs/mail-icon.svg"
                  alt="Email Icon"
                  width={16}
                  height={16}
                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                <a
                  href="mailto:koenderaden@gmail.com"
                  className="hover:underline text-sm sm:text-base"
                >
                  koenderaden@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Image
                  src="/svgs/phone-icon.svg"
                  alt="Phone Icon"
                  width={16}
                  height={16}
                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                <a href="tel:+31682313234" className="hover:underline text-sm sm:text-base">
                  +31 6 82313234
                </a>
              </div>
              <div className="flex items-center">
                <Image
                  src="/svgs/linkedin-icon.svg"
                  alt="LinkedIn Icon"
                  width={16}
                  height={16}
                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                <a
                  href="https://www.linkedin.com/in/koen-de-raden-b5a797320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm sm:text-base"
                >
                  Koen de Raden
                </a>
              </div>
              <div className="flex items-center">
                <Image
                  src="/svgs/github-bw.svg"
                  alt="GitHub Icon"
                  width={16}
                  height={16}
                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                <a
                  href="https://github.com/koenderaden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm sm:text-base"
                >
                  koenderaden
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-spartan">About Me</h3>
            <div className="font-roboto">
              <p className="mb-4 text-xs sm:text-sm">
                I'm passionate about technology, creativity, and continuous
                learning. With a strong interest in ICT and innovation, I am
                always looking for opportunities to grow and develop new skills.
                My goal is to turn ideas into impactful solutions and contribute
                to a better digital world.
              </p>

              <Link href="/#about-me" passHref>
                <span className="font-spartan text-lg sm:text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                  Learn more about me
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center font-roboto text-xs sm:text-sm">
          <p>&copy; 2025 Koen de Raden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
