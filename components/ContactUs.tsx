"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", query: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4">
            Contact Us
          </h2>
          <p className="text-base text-slate-500 font-semibold">
            We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Details & Hours (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 flex flex-col gap-8 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">TravelReady</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Have a question about our services? Want to see if your particular vacation is one we can help with? We&apos;d love to hear from you!
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Business Hours
              </h4>
              <table className="w-full text-sm font-medium text-slate-600 space-y-2">
                <tbody>
                  <tr className="flex justify-between py-1.5 border-b border-slate-100/50">
                    <td className="font-semibold text-slate-800">Mon</td>
                    <td>09:00 – 17:00</td>
                  </tr>
                  <tr className="flex justify-between py-1.5 border-b border-slate-100/50">
                    <td className="font-semibold text-slate-800">Tue</td>
                    <td>09:00 – 17:00</td>
                  </tr>
                  <tr className="flex justify-between py-1.5 border-b border-slate-100/50">
                    <td className="font-semibold text-slate-800">Wed</td>
                    <td>09:00 – 17:00</td>
                  </tr>
                  <tr className="flex justify-between py-1.5 border-b border-slate-100/50">
                    <td className="font-semibold text-slate-800">Thu</td>
                    <td>09:00 – 17:00</td>
                  </tr>
                  <tr className="flex justify-between py-1.5 border-b border-slate-100/50">
                    <td className="font-semibold text-slate-800">Fri</td>
                    <td>09:00 – 17:00</td>
                  </tr>
                  <tr className="flex justify-between py-1.5 border-b border-slate-100/50">
                    <td className="font-semibold text-slate-800">Sat</td>
                    <td className="text-slate-400 font-bold">Closed</td>
                  </tr>
                  <tr className="flex justify-between py-1.5">
                    <td className="font-semibold text-slate-800">Sun</td>
                    <td className="text-slate-400 font-bold">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Message Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg shadow-slate-100/50">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Send Us A Message</h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center animate-fadeIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 text-emerald-500 mx-auto mb-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4.13-5.69Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4 className="text-emerald-800 font-bold text-base mb-1">Message Sent!</h4>
                <p className="text-emerald-600 text-sm font-medium">
                  Thank you for reaching out. A member of our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-xs font-bold text-slate-700 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full text-slate-800 font-semibold bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-amber-500 focus:bg-white transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="text-xs font-bold text-slate-700 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full text-slate-800 font-semibold bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-amber-500 focus:bg-white transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-query" className="text-xs font-bold text-slate-700 uppercase">
                    Your Query
                  </label>
                  <textarea
                    id="form-query"
                    name="query"
                    required
                    rows={4}
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="How can we help with your vacation plans?"
                    className="w-full text-slate-800 font-semibold bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-amber-500 focus:bg-white transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 font-bold text-slate-900 bg-amber-500 hover:bg-amber-600 rounded-xl transition-all duration-300 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  suppressHydrationWarning
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
