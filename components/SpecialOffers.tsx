import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Amalfi Coast & Capri Summer Cruise",
    duration: "6 Nights / 7 Days",
    originalPrice: "$2,400",
    discountedPrice: "$1,899",
    rating: "4.9",
    reviews: "42",
    badge: "Save 20%",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Luxury Ocean Hotels", "Capri Boat Excursion", "Guided Food & Wine Tasting", "Airport Private Transfers"],
  },
  {
    id: 2,
    title: "Imperial Cities & Kyoto Tea Ceremony",
    duration: "8 Nights / 9 Days",
    originalPrice: "$3,200",
    discountedPrice: "$2,650",
    rating: "5.0",
    reviews: "58",
    badge: "Popular Deal",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Shinkansen Bullet Train Pass", "Mt. Fuji Panoramic Tour", "Traditional Ryokan Stay", "Daily Kyoto Sightseeing Tours"],
  },
  {
    id: 3,
    title: "Active Volcanoes & Aurora Borealis Hunt",
    duration: "5 Nights / 6 Days",
    originalPrice: "$2,200",
    discountedPrice: "$1,799",
    rating: "4.8",
    reviews: "34",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=800&q=80",
    inclusions: ["Aurora Boat Expedition", "Blue Lagoon Premium Access", "Skaftafell Glacier Hike", "4x4 Superjeep Wilderness Tour"],
  },
];

export default function SpecialOffers() {
  return (
    <section id="packages" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
              Exclusive Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">
              Seasonal Signature Tour Packages
            </h2>
            <p className="text-base text-slate-500 font-medium">
              Join curated small-group travel packages planned to perfection. Incredible value, 5-star stays, and lifetime memories guaranteed.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              All-inclusive Pricing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Flexible Cancellations
            </span>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <span className="absolute top-4 left-4 z-10 inline-block px-3.5 py-1 text-xs font-bold text-white bg-amber-500 rounded-full shadow-md">
                  {pkg.badge}
                </span>
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>

              {/* Package Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Duration & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {pkg.duration}
                  </span>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-amber-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.657c-.21.819.68 1.465 1.397 1.004L10 15.617l4.19 2.762c.717.461 1.607-.185 1.397-1.004l-1.197-4.657 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.83-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-bold text-slate-800">{pkg.rating}</span>
                    <span className="text-xs text-slate-400 font-medium">({pkg.reviews})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-6 hover:text-amber-500 transition-colors duration-200 line-clamp-2">
                  {pkg.title}
                </h3>

                {/* Highlights / Inclusions list */}
                <div className="mb-8 flex-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Package Inclusions
                  </h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing / Booking Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <div>
                    <span className="text-xs font-bold text-slate-400 line-through block leading-none mb-1">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-2xl font-extrabold text-slate-800 tracking-tight">
                      {pkg.discountedPrice}
                      <span className="text-xs font-bold text-slate-400 uppercase ml-1">/ person</span>
                    </span>
                  </div>
                  <a
                    href="#packages"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-slate-900 hover:bg-amber-500 rounded-full transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-amber-500/20"
                  >
                    Reserve Spot
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
