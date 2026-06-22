// src/components/Navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  palette?: string;
  setPalette?: (id: string) => void;
}

const mainNavLinks = [
  { label: 'Services', href: '/#solutions' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Work', href: '/#products' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
];

const servicesList = [
  { label: 'SEO Optimization', href: '/services/seo-optimization' },
  { label: 'Social Media Management', href: '/services/social-media-management' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'App Development', href: '/services/app-development' },
  { label: 'CRM Solutions', href: '/services/crm-solutions' },
  { label: 'Graphic Design', href: '/services/graphic-design' },
  { label: 'Lead Generation', href: '/services/lead-generation' },
  { label: 'Video Creation', href: '/services/video-creation' },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const transitionConfig = {
  duration: 0.55,
  ease: smoothEase,
};

const fastTransition = {
  duration: 0.28,
  ease: smoothEase,
};

const springTransition = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 32,
  mass: 0.7,
};
export default function Navbar({ palette, setPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY >= 80);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [scrolled]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      ref={navRef}
      className="fixed left-1/2 top-4 z-[999] flex w-full max-w-7xl -translate-x-1/2 flex-col items-center pointer-events-none px-4"
    >
      <motion.div
        layout
        transition={springTransition}
        onClick={() => scrolled && setDropdownOpen((prev) => !prev)}
        whileHover={{
          scale: scrolled ? 1.025 : 1,
          boxShadow: scrolled
            ? '0 18px 50px rgba(15,23,42,0.10)'
            : '0 14px 38px rgba(15,23,42,0.07)',
        }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
        }}
        className={`pointer-events-auto flex items-center select-none transition-colors duration-500 ${scrolled
            ? 'h-[50px] w-auto min-w-[185px] cursor-pointer justify-center gap-3 rounded-md px-6 shadow-[0_14px_38px_rgba(15,23,42,0.08)]'
            : 'h-[60px] w-[92vw] justify-between rounded-full px-8 shadow-[0_14px_38px_rgba(15,23,42,0.07)]'
          }`}
      >
        <motion.div
          layout="position"
          transition={springTransition}
          className="flex items-center gap-3"
        >
          <Link
            href="/"
            onClick={(e) => {
              if (scrolled) e.preventDefault();
            }}
            className="flex items-center"
          >
            <motion.img
              src="/Logo/digiwirelogo (1).png"
              alt="Digiwire Solutions Logo"
              animate={{ height: scrolled ? 140 : 140 }}
              transition={springTransition}
              className="h-45 w-auto object-contain"
            />
          </Link>

          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: -4 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.7, x: -4 }}
                transition={fastTransition}
              >
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={springTransition}
                >
                  <ChevronDown className="h-5 w-5 text-slate-600" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6, transition: fastTransition }}
              transition={transitionConfig}
              className="hidden items-center gap-9 md:flex"
            >
              {mainNavLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <div
                      key={link.label}
                      className="relative py-2"
                      onMouseEnter={() => setHoveredServices(true)}
                      onMouseLeave={() => setHoveredServices(false)}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-1 text-[15px] font-semibold text-slate-800 transition-colors duration-300 hover:text-slate-950 focus:outline-none"
                      >
                        <span>Services</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${hoveredServices ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {hoveredServices && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: smoothEase }}
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.98)',
                              border: '1px solid rgba(226, 232, 240, 0.9)',
                            }}
                            className="absolute left-1/2 top-full z-[1000] mt-2 w-64 -translate-x-1/2 rounded-2xl p-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                          >
                            <div className="flex flex-col gap-1">
                              {servicesList.map((service) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  onClick={handleLinkClick}
                                  className="rounded-xl px-3 py-2 text-[13px] font-medium text-slate-700 transition-all duration-300 hover:bg-white/60 hover:text-slate-950"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[15px] font-semibold text-slate-800 transition-colors duration-300 hover:text-slate-950"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12, transition: fastTransition }}
              transition={transitionConfig}
              className="flex items-center gap-3"
            >
              <Link
                href="/contact"
                className="hidden items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex"
              >
                Book a Demo
              </Link>

              <button
                type="button"
                className="rounded-full p-2.5 text-slate-700 transition-colors duration-300 hover:bg-slate-100/80 hover:text-slate-950 focus:outline-none md:hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen((prev) => !prev);
                }}
                aria-label="Toggle menu"
              >
                {dropdownOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.45, ease: smoothEase }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
            }}
            className="pointer-events-auto mt-3 w-[calc(100vw-32px)] max-w-md overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(15,23,42,0.10)] md:max-w-2xl"
          >
            <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="flex flex-col gap-4 md:col-span-5">
                  <h3 className="select-none text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Navigation
                  </h3>

                  <div className="flex flex-col gap-2">
                    {mainNavLinks
                      .filter((link) => link.label !== 'Services')
                      .map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={handleLinkClick}
                          className="inline-block rounded-xl px-3 py-2 text-base font-semibold text-slate-800 transition-all duration-300 hover:translate-x-1 hover:bg-white/60 hover:text-slate-950"
                        >
                          {link.label}
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-200/60 pt-6 md:col-span-7 md:border-t-0 md:pt-0">
                  <h3 className="select-none text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Our Services
                  </h3>

                  <div className="grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
                    {servicesList.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        onClick={handleLinkClick}
                        className="inline-block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-white/60 hover:text-slate-950"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/60 pt-6">
                <div className="text-sm text-slate-500">
                  Need a custom digital strategy?
                </div>

                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}