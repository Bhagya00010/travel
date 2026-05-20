"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    caption: "Majestic Alpine Summits & Guided Hikes",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    caption: "Pristine Tropical Coastlines & Relaxation Resorts",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    caption: "Historic Shrines & Culturally Rich Neighborhoods",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1542082851-855923630b2c?auto=format&fit=crop&w=1200&q=80",
    caption: "Ancient Forest Trails & Eco-friendly Safaris",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    caption: "Breathtaking Canyon Walks & Guided Wilderness Expeditions",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80",
    caption: "Mediterranean Coastlines & Private Cruise Excursions",
  },
];

export default function GuidedToursGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(slideTimer);
  }, [nextSlide]);

  return (
    <section id="gallery" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
            Tour Highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">
            Travel to New Horizons with Our Guided Tours
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Take a look at real moments and beautiful vistas captured during our guided group excursions across the globe.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
          <div className="relative h-[250px] sm:h-[400px] md:h-[500px] w-full">
            {galleryImages.map((img, idx) => (
              <div
                key={img.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  idx === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover object-center select-none"
                  sizes="(max-w-1024px) 100vw, 896px"
                />

                {/* Counter Overlay (e.g. 1/6) */}
                <div className="absolute top-4 right-4 bg-slate-900/70 text-white font-bold text-xs py-1.5 px-3 rounded-full backdrop-blur-sm z-20">
                  {idx + 1} / {galleryImages.length}
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 z-20">
                  <p className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}

            {/* Left & Right Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-md z-30 transition-all duration-200 focus:outline-none"
              aria-label="Previous image"
              suppressHydrationWarning
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-md z-30 transition-all duration-200 focus:outline-none"
              aria-label="Next image"
              suppressHydrationWarning
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dots Navigator */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-amber-500" : "w-2 bg-slate-300"
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
