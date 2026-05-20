import Image from "next/image";

export default function ExperienceGunjan() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">
            Experience Custom Travel Planning
          </h2>
          <p className="text-base text-slate-500 font-medium">
            We are dedicated to crafting custom vacations that broaden perspectives, foster connections, and deliver absolute tranquility.
          </p>
        </div>

        {/* 2-Column Grid (Vision & Approach) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: Our Vision */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                alt="People planning a trip with map, camera, and airplane model"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-500 transition-colors duration-200">
                Our Vision
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                Our vision is to create unique and immersive travel experiences that go beyond the ordinary. We believe that travel should be transformative and inspire personal growth, and we&apos;re committed to making it happen.
              </p>
            </div>
          </div>

          {/* Card 2: Our Approach */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                alt="A plane's shadow over clear blue water near a sandy beach"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-500 transition-colors duration-200">
                Our Approach
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                We take a holistic approach to travel, considering every aspect of your journey to create a seamless and unforgettable experience. From the moment you start planning to the day you return home, we&apos;re here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
