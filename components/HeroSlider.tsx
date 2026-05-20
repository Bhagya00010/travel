"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    tag: "TRAVELREADY",
    title: "Escape to paradise with our custom holidays",
    subtitle: "Unwind and relax in breathtaking destinations handpicked by our travel experts.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    tag: "MOUNTAIN TREKS",
    title: "Escape To Pristine Nature & Majestic Mountain Peaks",
    subtitle: "Immerse yourself in crisp alpine air, luxury chalets, and guided trails across the heart of Switzerland.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80",
    tag: "CULTURAL IMMERSION",
    title: "Experience Ancient Heritage & Calm Sanctuaries",
    subtitle: "Uncover silent temples, colorful cherry blossoms, and centuries-old culinary traditions in historic Kyoto.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
    tag: "TROPICAL PARADISE",
    title: "Indulge In Tropical Bliss & Serene Sandy Beaches",
    subtitle: "Unwind at private ocean villas, emerald rice fields, and calming spiritual wellness retreats in Bali.",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-slate-50">
      {/* Slider Carousel Container */}
      <div className="relative h-[550px] md:h-[650px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center select-none"
              sizes="100vw"
            />

            {/* Slider Content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 text-xs font-semibold tracking-wider text-amber-400 bg-white/10 backdrop-blur-md rounded-full border border-white/10 uppercase">
                    {slide.tag}
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight mb-4 sm:mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 sm:mb-8 leading-relaxed font-medium">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <a
                      href="#contact"
                      className="px-6 py-3 sm:px-8 sm:py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm md:text-base"
                    >
                      Book Now
                    </a>
                    <a
                      href="#gallery"
                      className="px-6 py-3 sm:px-8 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
                    >
                      View Gallery
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute right-4 sm:right-8 bottom-8 flex gap-3 z-30">
          <button
            onClick={prevSlide}
            className="p-3 sm:p-3 bg-white/10 hover:bg-white/20 text-white hover:text-amber-400 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-200 focus:outline-none active:scale-95"
            aria-label="Previous slide"
            suppressHydrationWarning
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-3 sm:p-3 bg-white/10 hover:bg-white/20 text-white hover:text-amber-400 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-200 focus:outline-none active:scale-95"
            aria-label="Next slide"
            suppressHydrationWarning
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute left-4 sm:left-8 bottom-8 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-amber-500" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              suppressHydrationWarning
            />
          ))}
        </div>
      </div>
    </section>
  );
}
