import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ExperienceGunjan from "@/components/ExperienceGunjan";
import GuidedToursGallery from "@/components/GuidedToursGallery";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import TravelProcess from "@/components/TravelProcess";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-amber-500/20 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Experience Custom Travel (Vision & Approach) */}
        <ExperienceGunjan />

        {/* Guided Tours Slider Gallery */}
        <GuidedToursGallery />

        {/* Premium Services Grid */}
        <OurServices />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Custom Travel Planning Timeline / Process */}
        <TravelProcess />

        {/* Customer Reviews / Testimonials */}
        <Testimonials />

        {/* Blogs / Chronicles */}
        <BlogSection />

        {/* Contact Us Details & Enquiry Form */}
        <ContactUs />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
