import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "San Francisco, USA",
    trip: "Amalfi Coast Curated Cruise",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote:
      "The Amalfi Coast trip was planned to perfection. Roam & Refine arranged flawless logistics, from the airport concierge transfers to a stunning boutique hotel overlooking the sea. The private boat tour around Capri was a lifetime highlight!",
  },
  {
    id: 2,
    name: "Marcus Vance",
    location: "London, UK",
    trip: "Kyoto Heritage Excursion",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote:
      "Kyoto was absolutely magical. Our local guide Kenji had incredible knowledge and showed us secret zen gardens and small culinary spots that aren't on any online map. Standard packages don't even compare to this experience.",
  },
  {
    id: 3,
    name: "Elena Rostova",
    location: "Munich, Germany",
    trip: "Swiss Alps Private Trek",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    quote:
      "We booked the private Swiss Alps trek for our family. The alpine views from our chalet were breathtaking. The hiking routes were fully customized to our physical comfort, and the 24/7 concierge was incredibly helpful.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
            Guest Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">
            Loved By Travelers Worldwide
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Hear from our community of global adventurers who experienced our handpicked stays and custom guided itineraries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100/50 flex flex-col justify-between hover:shadow-lg hover:shadow-slate-100/50 hover:bg-amber-50/10 transition-all duration-300 relative group"
            >
              {/* Floating Quote Marks */}
              <span className="absolute top-6 right-8 text-6xl font-serif text-slate-200 select-none pointer-events-none group-hover:text-amber-200 transition-colors duration-300">
                “
              </span>

              {/* Review Text */}
              <div className="mb-8">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.657c-.21.819.68 1.465 1.397 1.004L10 15.617l4.19 2.762c.717.461 1.607-.185 1.397-1.004l-1.197-4.657 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 font-medium text-sm leading-relaxed italic relative z-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* User Identity Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                  <span className="text-xs text-slate-400 font-medium block mb-1">
                    {item.location}
                  </span>
                  <span className="inline-flex items-center text-2xs font-bold text-amber-600 tracking-wide uppercase">
                    {item.trip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
