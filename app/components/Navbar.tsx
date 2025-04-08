"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      } bg-black/70 backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 sm:px-[60px] py-4 flex justify-between items-center">
        <div>
          <Link href="/" passHref>
            <span className="font-spartan text-xl sm:text-2xl font-bold text-white/90 hover:text-white transition-all duration-300 cursor-pointer">
              Koen de Raden
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-black z-50">
          <ul className="flex flex-col items-center space-y-8 p-8 pt-12">
            <li>
              <Link href="/#gallery" passHref onClick={() => setIsMenuOpen(false)}>
                <span className="font-spartan text-2xl text-white hover:text-white/80 transition-all duration-300 cursor-pointer">
                  Gallery
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#about-me" passHref onClick={() => setIsMenuOpen(false)}>
                <span className="font-spartan text-2xl text-white hover:text-white/80 transition-all duration-300 cursor-pointer">
                  About Me
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#about-me" passHref onClick={() => setIsMenuOpen(false)}>
                <span className="font-spartan text-2xl text-white hover:text-white/80 transition-all duration-300 cursor-pointer">
                  My Skills
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contact" passHref onClick={() => setIsMenuOpen(false)}>
                <span className="font-spartan text-2xl text-white hover:text-white/80 transition-all duration-300 cursor-pointer">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
