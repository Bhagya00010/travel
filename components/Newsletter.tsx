"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500/10 via-amber-50/70 to-slate-50 border border-amber-100 p-8 md:p-16 text-center shadow-md">
          {/* Decorative floating shapes */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-400/15 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Tag */}
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-amber-600 bg-amber-50 rounded-full uppercase">
              Mailing List
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-4 leading-tight">
              Join Our Mailing List
            </h2>
            <p className="text-base text-slate-500 font-medium mb-8 leading-relaxed">
              Get 10% off your first purchase when you sign up for our newsletter!
            </p>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center max-w-md mx-auto animate-fadeIn">
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
                <h4 className="text-emerald-800 font-bold text-base mb-1">
                  You&apos;re Subscribed!
                </h4>
                <p className="text-emerald-600 text-sm font-medium">
                  Welcome to Gunjan Holidays. Keep an eye on your inbox for your 10% discount code.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-slate-800 font-semibold bg-white border border-slate-200 rounded-xl py-3.5 px-5 outline-none focus:border-amber-500 transition-colors duration-200 text-sm placeholder:text-slate-400 placeholder:font-medium shadow-inner"
                />
                <button
                  type="submit"
                  className="py-3.5 px-6 font-bold text-slate-900 bg-amber-500 hover:bg-amber-600 rounded-xl transition-all duration-300 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 text-sm shrink-0 whitespace-nowrap"
                >
                  Sign Up
                </button>
              </form>
            )}

            <p className="text-xs text-slate-400 font-medium mt-4">
              We value your privacy. Unsubscribe at any time in one simple click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
