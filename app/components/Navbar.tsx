"use client";

import { useState, useEffect } from "react";

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
      <div className="container mx-auto px-[60px] py-4">
        <ul className="flex justify-end space-x-8">
          <li>
            <a
              href="#gallery"
              className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300"
            >
              My Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-spartan text-xl text-white/80 hover:text-white transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
