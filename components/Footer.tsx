import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
             
              <span className="text-xl font-bold tracking-tight text-white">
                Travel<span className="text-amber-500 font-extrabold">Ready</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Our vision is to create unique and immersive travel experiences that go beyond the ordinary. We take a holistic approach to travel to ensure absolute peace of mind.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="#footer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-900 flex items-center justify-center text-slate-300 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#footer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-900 flex items-center justify-center text-slate-300 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.008 3.885.058 1.02.047 1.62.218 2.027.377.545.211.971.497 1.392.918.422.42.708.847.918 1.392.158.408.33.158.377 2.027.05 1.1.058 1.455.058 3.885 0 2.43-.008 2.784-.058 3.885-.047 1.02-.218 1.62-.377 2.027a3.86 3.86 0 01-.918 1.392 3.86 3.86 0 01-1.392.918c-.408.158-1.02.33-2.027.377-1.1.05-1.455.058-3.885.058-2.43 0-2.784-.008-3.885-.058-1.02-.047-1.62-.218-2.027-.377a3.86 3.86 0 01-1.392-.918 3.86 3.86 0 01-.918-1.392c-.158-.408-.33-1.02-.377-2.027-.047-1.03-.058-1.385-.058-3.885 0-2.43.008-2.784.058-3.885.047-1.02.218-1.62.377-2.027A3.86 3.86 0 013.44 2.8c.42-.422.847-.708 1.392-.918.408-.158 1.02-.33 2.027-.377 1.03-.047 1.385-.058 3.885-.058zm-.228 1.8c-2.386 0-2.67.01-3.606.053-.873.04-1.348.186-1.664.31a2.065 2.065 0 00-.763.497c-.247.247-.406.502-.497.763-.124.316-.27.79-.31 1.664-.043.935-.053 1.22-.053 3.606 0 2.386.01 2.67.053 3.606.04.873.186 1.348.31 1.664.09.247.25.502.497.763.247.247.502.406.763.497.316.124.79.27 1.664.31.935.043 1.22.053 3.606.053 2.386 0 2.67-.01 3.606-.053.873-.04 1.348-.186 1.664-.31.247-.09.502-.25.763-.497.247-.247.406-.502.497-.763.124-.316.27-.79.31-1.664.043-.935.053-1.22.053-3.606 0-2.386-.01-2.67-.053-3.606-.04-.873-.186-1.348-.31-1.664a2.065 2.065 0 00-.497-.763 2.065 2.065 0 00-.763-.497c-.316-.124-.79-.27-1.664-.31-.935-.043-1.22-.053-3.606-.053zM12 5.83a6.17 6.17 0 100 12.34 6.17 6.17 0 000-12.34zM12 16a4.17 4.17 0 110-8.34 4.17 4.17 0 010 8.34zm3.906-8.906a.984.984 0 111.968 0 .984.984 0 01-1.968 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#footer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-900 flex items-center justify-center text-slate-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3 font-semibold text-sm">
              <li>
                <Link href="#home" className="hover:text-amber-500 transition-colors duration-200">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-amber-500 transition-colors duration-200">
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-amber-500 transition-colors duration-200">
                  Guided Tour Gallery
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-500 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-amber-500 transition-colors duration-200">
                  Planning Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-500 transition-colors duration-200">
                  Contact Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 font-medium text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span>
                  Premium Suites, Plot 42
                  <br />
                  Mumbai, MH 400001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-amber-500 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a href="mailto:info@dreamescapes.com" className="hover:text-amber-500">
                  info@dreamescapes.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 text-amber-500 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.177-3.91-6.732-6.732l1.293-.97c.362-.272.528-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <a href="tel:+912255550199" className="hover:text-amber-500">
                  +91 (22) 5555-0199
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust / Badges */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Travel Protected
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-semibold">
              Your payments are 100% secure. We are a registered member of IATA and all tour bookings include full travel protection coverage.
            </p>
            {/* Cert badges placeholders */}
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 bg-slate-800 text-2xs font-extrabold tracking-wider text-slate-200 rounded border border-slate-700 uppercase select-none">
                IATA Member
              </span>
              <span className="px-3 py-1.5 bg-slate-800 text-2xs font-extrabold tracking-wider text-slate-200 rounded border border-slate-700 uppercase select-none">
                ATOL Protected
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-xs font-medium text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Copyright © 2026 - All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#footer" className="hover:text-amber-500">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#footer" className="hover:text-amber-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
