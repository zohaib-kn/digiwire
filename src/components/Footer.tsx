import { Zap, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const footerLinks = {
  Services: [
    { label: 'SEO Optimization', href: '/services/seo-optimization' },
    { label: 'Social Media Management', href: '/services/social-media-management' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'App Development', href: '/services/app-development' },
    { label: 'CRM Solutions', href: '/services/crm-solutions' },
    { label: 'Lead Generation', href: '/services/lead-generation' },
  ],
  Solutions: [
    { label: 'Sales Automation', href: '/#solutions' },
    { label: 'Customer Management', href: '/#solutions' },
    { label: 'Lead Tracking', href: '/#solutions' },
    { label: 'AI Assistants', href: '/#solutions' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Products', href: '/#products' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book Demo', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Security Details', href: '/contact' },
  ],
};

const socials = [
  { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com/' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/' },
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
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[15px] text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <span className="relative">
                        {link.label}
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