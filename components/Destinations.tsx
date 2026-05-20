import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    category: "Coastal Escape",
    price: "$1,299",
    duration: "7 Days",
    rating: "4.9",
    reviewsCount: "128",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Swiss Alps, Switzerland",
    category: "Mountain Peaks",
    price: "$1,850",
    duration: "5 Days",
    rating: "4.8",
    reviewsCount: "86",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    category: "Cultural Tour",
    price: "$1,420",
    duration: "8 Days",
    rating: "4.9",
    reviewsCount: "142",
    badge: "Highly Rated",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Ubud, Bali",
    category: "Tropical Wellness",
    price: "$980",
    duration: "6 Days",
    rating: "4.7",
    reviewsCount: "215",
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Amalfi Coast, Italy",
    category: "Romantic Stay",
    price: "$1,650",
    duration: "7 Days",
    rating: "4.9",
    reviewsCount: "94",
    badge: "Romantic",
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Reykjavik, Iceland",
    category: "Arctic Adventure",
    price: "$1,990",
    duration: "6 Days",
    rating: "4.8",
    reviewsCount: "73",
    badge: "Rare Find",
    image: "https://images.unsplash.com/photo-1504829857797-ddff28127792?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
            Curated Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">
            Trending Destinations Across The Globe
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Explore our handpicked collection of awe-inspiring locales, selected for their rich histories, natural wonders, and luxury accommodation.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-slate-200 border border-slate-100 transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                {/* Badge Overlay */}
                <span className="absolute top-4 left-4 z-10 inline-block px-3.5 py-1 text-xs font-bold text-slate-900 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                  {dest.badge}
                </span>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>

              {/* Information Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
                  {dest.category}
                </span>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-500 transition-colors duration-200 mb-3">
                  {dest.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-6">
                  <div className="flex items-center text-amber-400">
                    <svg
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
                  </div>
                  <span className="text-sm font-bold text-slate-800">{dest.rating}</span>
                  <span className="text-xs text-slate-400 font-medium">
                    ({dest.reviewsCount} reviews)
                  </span>
                </div>

                {/* Footer Metadata */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100">
                  <div className="flex items-center gap-1 text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-amber-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-xs font-semibold">{dest.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-400 block leading-none mb-1">
                      Starting From
                    </span>
                    <span className="text-lg font-extrabold text-slate-800 tracking-tight">
                      {dest.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#packages"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-800 hover:text-white bg-white hover:bg-slate-900 border border-slate-200 rounded-full transition-all duration-300 shadow-sm"
          >
            Explore All Destinations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
