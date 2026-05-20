"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    subtitle: "We Listen to Your Dreams",
    description: "Begin with a personal consultation where our expert advisors learn about your desired pacing, interest areas, budget, and travel dreams.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Bespoke Curation",
    subtitle: "Tailored Just For You",
    description: "We craft a personalized draft itinerary, hand-picking hotels, recommending excursions, and designing logical routes matching your criteria.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Seamless Bookings",
    subtitle: "Locking In All Details",
    description: "Once you approve the itinerary, we manage all flight seats, premium hotel stays, private transfers, and local ticket bookings for you.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-5 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Relax & Explore",
    subtitle: "With 24/7 Peace of Mind",
    description: "Embark on your luxury trip knowing our 24/7 live concierge has your back for any unexpected flight changes or updates in transit.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function TravelProcess() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 hidden lg:block -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 font-extrabold uppercase tracking-widest text-xs inline-block mb-3 px-3 py-1 bg-amber-500/10 rounded-full">
            Our Method
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            How We Plan Your Perfect Escape
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded mb-6" />
          <p className="text-slate-600 font-medium leading-relaxed">
            Planning a luxury holiday shouldn't be stressful. We've streamlined our planning workflow into a simple, high-touch consultation process.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Step Connection Lines (Mobile vertical indicators) */}
              {idx < steps.length - 1 && (
                <div className="absolute top-24 bottom-[-48px] w-0.5 bg-slate-100 lg:hidden" />
              )}

              {/* Number Badge and Icon Container */}
              <div className="relative mb-8">
                {/* Huge back number */}
                <span className="absolute -top-10 -left-10 text-7xl font-black text-slate-100 select-none tracking-tighter opacity-70 group-hover:text-slate-200 transition-colors duration-300">
                  {step.number}
                </span>

                {/* Main Circle Icon */}
                <div className="w-20 h-20 rounded-full bg-slate-900 shadow-lg shadow-slate-900/10 border-4 border-white flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105 group-hover:bg-amber-500">
                  {step.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 lg:p-5 w-full flex-1 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:border-slate-200/60">
                <span className="text-2xs font-extrabold text-amber-500 uppercase tracking-widest block mb-1">
                  {step.subtitle}
                </span>
                <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-100 px-8 py-5 rounded-3xl sm:rounded-full">
            <span className="text-sm font-semibold text-slate-700">
              Ready to start planning your bespoke luxury itinerary?
            </span>
            <Link
              href="#contact"
              className="px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-600 rounded-full transition-all duration-200 shadow-md shadow-amber-500/10 hover:-translate-y-0.5"
            >
              Start Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
