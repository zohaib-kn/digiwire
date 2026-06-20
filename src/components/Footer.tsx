import { Zap, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const footerLinks = {
  Services: [
    'Design Services',
    'Software & AI Services',
    'Custom SaaS Development',
    'AI Automation Solutions',
  ],
  Solutions: [
    'Sales Automation',
    'Customer Management',
    'Lead Tracking',
    'AI Assistants',
  ],
  Company: ['About Us', 'Case Studies', 'Careers', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'],
};

const socials = [
  { icon: FaXTwitter, label: 'X (Twitter)' },
  { icon: FaLinkedin, label: 'LinkedIn' },
  { icon: FaGithub, label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200">
      {/* Subtle top accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-4 group">
              <img
                src="/Logo/digiwirelogo (1).png"
                alt="Digiwire Solutions Logo"
                className="h-45 w-auto object-contain"
              />
            </a>
            <p className="text-base text-slate-600 leading-relaxed mb-5 max-w-[250px]">
              AI-powered software and SaaS products for modern businesses.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-cyan-300 hover:text-cyan-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">
                {category}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-[15px] text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-slate-900 group-hover:w-full transition-all duration-200" />
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[15px] text-slate-500">
            &copy; 2026 DigiWire Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-slate-500">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}