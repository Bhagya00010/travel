"use client";

import { useState } from "react";

const servicesList = [
  {
    id: 1,
    title: "Customized Itinerary Design",
    description: "Fully bespoke day-by-day itineraries tailored to your unique preferences, travel pace, and dream destinations.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-500 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    badge: "100% Bespoke",
  },
  {
    id: 2,
    title: "Flight & Transport Reservations",
    description: "Global flight coordination, private transfers, and luxury car hire sorted seamlessly for an absolute stress-free journey.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-500 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    badge: "Worldwide",
  },
  {
    id: 3,
    title: "Luxury Resorts & Hotel Bookings",
    description: "Exclusive partnerships with elite properties globally to offer preferred rates, complimentary room upgrades, and VIP amenities.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-500 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    badge: "5-Star Only",
  },
  {
    id: 4,
    title: "Visa & Travel Documentation",
    description: "Hassle-free, end-to-end guidance for travel visa applications, comprehensive travel insurance, and global entry compliance.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-500 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    badge: "Hassle-Free",
  },
  {
    id: 5,
    title: "Guided Group & Private Excursions",
    description: "Curated cultural tours and high-end excursions led by certified, passionate local guides who tell the true stories of the soil.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-500 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    badge: "Expert Guides",
  },
  {
    id: 6,
    title: "24/7 Global Concierge Assistance",
    description: "Round-the-clock live support from booking to boarding. Real-time updates, flight re-routings, and instant solutions while you are away.",
    icon: (
      <svg
        className="w-8 h-8 text-amber-500 transition-transform duration-300 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    badge: "24/7 Coverage",
  },
];

export default function OurServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-extrabold uppercase tracking-widest text-xs inline-block mb-3 px-3 py-1 bg-amber-500/10 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Bespoke Travel Planning Crafted Exclusively for You
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded mb-6" />
          <p className="text-slate-600 font-medium leading-relaxed">
            At our agency, we take care of every detail of your vacation planning, ensuring you enjoy absolute luxury, peace of mind, and customized experiences wherever you venture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5 flex flex-col justify-between group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center transition-colors duration-300 group-hover:bg-amber-100">
                    {service.icon}
                  </div>
                  {/* Service Badge */}
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full group-hover:text-amber-600 group-hover:bg-amber-50 transition-colors duration-300">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Action Link / Micro-interaction */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-200 cursor-pointer">
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    hoveredCard === service.id ? "translate-x-1.5" : ""
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
