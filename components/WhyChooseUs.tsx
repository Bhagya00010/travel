export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "Curated Journeys",
      description:
        "Every itinerary is custom designed to match your pace, interests, and expectations. No cookie-cutter packages, just pure exploration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.684A1.125 1.125 0 0 0 3 6.69v11.22c0 .425.24.815.622 1.006l4.875 2.437a1.125 1.125 0 0 0 1.006 0l5.38-2.69a1.125 1.125 0 0 1 1.006 0Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Certified Local Guides",
      description:
        "Go beyond standard tourist spots. Our native experts open doors to local secrets, sacred sanctuaries, and authentic food gems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h7.5c.414 0 .75.336.75.75v7.5c0 .414-.336.75-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5c0-.414.336-.75.75-.75Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Flexible & Secure Booking",
      description:
        "Travel plans change, and that's okay. Enjoy instant confirmation, simple payment schedules, and hassle-free cancellation options.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "24/7 Concierge Support",
      description:
        "From midnight flight rebookings to finding last-minute dinner reservations, our global concierge desk is always at your command.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.177-3.91-6.732-6.732l1.293-.97c.362-.272.528-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left Column */}
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
              The Aura Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-6 leading-tight">
              We Craft Travel Experiences That Elevate the Soul
            </h2>
            <p className="text-base text-slate-500 mb-8 leading-relaxed font-medium">
              We believe travel is not about checking places off a map, but about the profound moments that change how you look at the world. Every detail of our service is designed around ease, safety, and extraordinary luxury.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="text-center sm:text-left">
                <span className="block text-4xl font-extrabold text-slate-800 mb-1">15k+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Happy Clients
                </span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div className="text-center sm:text-left">
                <span className="block text-4xl font-extrabold text-slate-800 mb-1">120+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Destinations
                </span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div className="text-center sm:text-left">
                <span className="block text-4xl font-extrabold text-slate-800 mb-1">99.2%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Satisfaction Rate
                </span>
              </div>
            </div>
          </div>

          {/* Cards Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="p-6 md:p-8 bg-slate-50 hover:bg-amber-50/30 border border-slate-100 rounded-3xl transition-all duration-300 group"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shadow-slate-100 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-6">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-amber-500 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
