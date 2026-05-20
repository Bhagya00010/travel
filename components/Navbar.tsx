"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100/50 py-3"
          : "bg-white/70 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-slate-800">
                Travel<span className="text-amber-500 font-extrabold">Ready</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-slate-600 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="#experience"
              className="text-slate-600 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-slate-600 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="#services"
              className="text-slate-600 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-slate-600 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Planning Process
            </Link>
            <Link
              href="#contact"
              className="text-slate-600 hover:text-amber-500 font-medium text-sm transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-amber-500 rounded-full transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-amber-500/20 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-3 pb-6 space-y-2 bg-white shadow-xl">
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 transition-colors duration-200"
          >
            Gallery
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#process"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 transition-colors duration-200"
          >
            Planning Process
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-amber-500 hover:bg-amber-50/50 transition-colors duration-200"
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-slate-100 px-4">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-6 py-3 rounded-full text-base font-bold text-white bg-slate-900 hover:bg-amber-500 shadow-md shadow-slate-900/10 transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
