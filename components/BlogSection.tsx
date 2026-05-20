import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "10 Essential Packing Tips for Multi-Day Mountain Trekking",
    summary:
      "Failing to pack light or neglecting critical insulation layers is a classic trekking mistake. Read our certified packing checklist to keep your pack under 10kg.",
    date: "May 15, 2026",
    readTime: "5 min read",
    author: "Julian Thorne",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "A Local's Culinary Journey Through Kyoto's Hidden Alleys",
    summary:
      "Beyond famous restaurants lie century-old family kitchens. Discover secret ramen houses, traditional tea ceremonies, and authentic seasonal street foods.",
    date: "May 10, 2026",
    readTime: "8 min read",
    author: "Yoko Sato",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Art of Slow Travel: Why Haste Ruins Great Memories",
    summary:
      "Rushing between monuments is tiring. Learn how spending a full week in a single historic neighborhood opens doors to deep local connections and relaxation.",
    date: "May 02, 2026",
    readTime: "6 min read",
    author: "Clara Finch",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
              Travel Chronicles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">
              Latest Stories & Inspiration
            </h2>
            <p className="text-base text-slate-500 font-medium">
              Read travel guides, cultural deep-dives, and expert packing advice designed to prepare you for your next grand adventure.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-amber-500 transition-colors duration-200"
            >
              Browse All Articles
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-500 transition-colors duration-200 mb-3 leading-snug line-clamp-2">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6 line-clamp-3">
                  {post.summary}
                </p>

                {/* Author footer */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                  <span className="text-xs font-bold text-slate-700">
                    By <span className="underline decoration-amber-400 decoration-2">{post.author}</span>
                  </span>
                  <span className="text-xs font-bold text-amber-500 group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1">
                    Read Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4.5 h-4.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
