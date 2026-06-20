'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  ShoppingCart,
  Rocket,
  Smartphone,
  Wrench,
  Gauge,
  Search,
  Code2,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function WebDevelopmentPage() {
  const highlights = [
    { label: 'Business & corporate websites', icon: Building2 },
    { label: 'E-commerce development', icon: ShoppingCart },
    { label: 'Landing pages & sales funnels', icon: Rocket },
    { label: 'Responsive mobile-friendly design', icon: Smartphone },
    { label: 'Website maintenance & support', icon: Wrench },
    { label: 'Speed & performance optimization', icon: Gauge },
    { label: 'SEO-friendly website structure', icon: Search },
    { label: 'Custom web solutions', icon: Code2 },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent — single restrained source */}
        <div
          className="absolute top-[-12%] right-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#4F46E5' }}
        />

        {/* Main Container */}
        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-[80px] pb-24 flex flex-col">

          

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Heading, Content & Capability Grid */}
            <div className="lg:col-span-6 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Category Badge */}
                <span className="inline-flex items-center gap-2 border border-[#4F46E5]/20 bg-[#4F46E5]/[0.05] text-[#4F46E5] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  Web <span className="text-[#4F46E5]">Development</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  Your website is often the first impression customers have of your business &mdash; we build powerful digital assets
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal mb-10">
                  <p>
                    At DigiWire, we create websites that combine functionality, user experience, and performance. Whether it&apos;s a corporate website, e-commerce platform, portfolio, or landing page, every website is built to engage visitors, strengthen credibility, and encourage action.
                  </p>
                  <p>
                    From seamless navigation and mobile responsiveness to speed optimization and search engine readiness, we ensure your website works as a powerful digital asset for your business.
                  </p>
                </div>
              </motion.div>

              {/* Capability Grid — replaces the generic checklist */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-[11px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase mb-4">
                  What we build
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map(({ label, icon: Icon }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 hover:border-[#4F46E5]/30 transition-colors duration-300"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#4F46E5]/[0.08] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#4F46E5]" />
                      </div>
                      <span className="text-[13.5px] font-medium text-[#0B1120] leading-snug">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Responsive browser/device signature element */}
            <div className="lg:col-span-6 w-full flex justify-center lg:pt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full max-w-xl pb-10 pr-6"
              >
                {/* Browser frame */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.07)] overflow-hidden">
                  {/* Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E2E8F0]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                    <div className="flex-1 ml-2 bg-[#F1F5F9] rounded-full px-3.5 py-1 text-[11px] text-[#94A3B8] font-mono truncate">
                      yourbusiness.com
                    </div>
                  </div>

                  {/* Page layout */}
                  <div className="p-5">
                    {/* Nav */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex items-center justify-between mb-5"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#4F46E5]" />
                      <div className="flex gap-3">
                        <div className="h-2 w-10 bg-[#E2E8F0] rounded" />
                        <div className="h-2 w-10 bg-[#E2E8F0] rounded" />
                        <div className="h-2 w-10 bg-[#E2E8F0] rounded" />
                      </div>
                    </motion.div>

                    {/* Hero block */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.55 }}
                      className="rounded-xl bg-[#4F46E5]/[0.05] border border-[#4F46E5]/10 px-4 py-5 mb-4"
                    >
                      <div className="h-3 w-3/5 bg-[#0B1120]/80 rounded mb-2" />
                      <div className="h-2 w-4/5 bg-[#475569]/30 rounded mb-3" />
                      <div className="h-6 w-20 bg-[#4F46E5] rounded-md" />
                    </motion.div>

                    {/* Content cards */}
                    <div className="grid grid-cols-3 gap-3">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                          className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2.5"
                        >
                          <div className="h-8 w-full bg-[#4F46E5]/10 rounded mb-2" />
                          <div className="h-1.5 w-4/5 bg-[#E2E8F0] rounded" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile reflow frame, peeking from the corner */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
                  className="absolute -bottom-2 right-0 w-[100px] rounded-xl border-[3px] border-[#0B1120] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] overflow-hidden"
                >
                  <div className="p-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-3 h-3 rounded-sm bg-[#4F46E5]" />
                      <div className="flex flex-col gap-0.5">
                        <div className="h-0.5 w-3 bg-[#E2E8F0] rounded" />
                        <div className="h-0.5 w-3 bg-[#E2E8F0] rounded" />
                      </div>
                    </div>
                    <div className="rounded-md bg-[#4F46E5]/[0.06] px-1.5 py-2 mb-1.5">
                      <div className="h-1 w-3/5 bg-[#0B1120]/70 rounded mb-1" />
                      <div className="h-1 w-4/5 bg-[#475569]/25 rounded" />
                    </div>
                    <div className="rounded-md border border-[#E2E8F0] h-5 mb-1" />
                    <div className="rounded-md border border-[#E2E8F0] h-5" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* Closing statement, full width beneath both columns */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-[#4F46E5] text-[14px] sm:text-[15px] font-medium leading-relaxed border-t border-[#E2E8F0] pt-6 mt-12 lg:max-w-md lg:ml-auto lg:text-right"
          >
            A website should do more than exist &mdash; it should help your business grow.
          </motion.p>
        </section>

        {/* Footer copyright */}
        <footer className="relative z-10 border-t border-[#E2E8F0] py-6 text-center text-xs text-[#94A3B8] select-none">
          &copy; 2026 Digiwire Solutions Pvt. Ltd. All rights reserved.
        </footer>
      </div>
    </main>
  );
}