"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black/30 backdrop-blur-sm`}
    >
      <div className="container mx-auto px-[60px] py-4 flex justify-between items-center">
        {/* Naam links uitgelijnd */}
        <div>
          <Link href="/" passHref>
            <span className="font-spartan text-2xl font-bold text-white/90 hover:text-white transition-all duration-300 cursor-pointer">
              Koen de Raden
            </span>
          </Link>
        </div>

        {/* Navigatielinks rechts uitgelijnd */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/#gallery" passHref>
              <span className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                Gallery
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#about-me" passHref>
              <span className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                About Me
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#about-me" passHref>
              <span className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                My Skills
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#contact" passHref>
              <span className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300 cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
