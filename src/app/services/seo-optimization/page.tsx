'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function SEOOptimizationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accents — restrained, single source of color */}
        <div
          className="absolute top-[-12%] right-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#1D4ED8' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,17,32,0.02)_0%,transparent_8%)] pointer-events-none z-0" />

        {/* Main Container */}
        <section className="relative z-10 max-w-[1600px] mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-20 pt-[80px] pb-24 flex flex-col">

          

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-6 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Category Badge */}
                <span className="inline-flex items-center gap-2 border border-[#1D4ED8]/20 bg-[#1D4ED8]/[0.04] text-[#1D4ED8] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  SEO <span className="text-[#1D4ED8]">Optimization</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  SEO that brings business, not just rankings
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal mb-10">
                  <p>
                    Anyone can rank a website for keywords. We focus on ranking your business where your customers are already searching.
                  </p>
                  <p>
                    At DigiWire, SEO is not treated as a checklist of technical tasks. We analyze how people search, what influences their decisions, and how your website can become the preferred choice over your competitors.
                  </p>
                  <p>
                    Our approach combines search visibility, user experience, content strategy, and conversion optimization to help businesses attract qualified visitors who are more likely to enquire, purchase, or engage.
                  </p>
                  <p>
                    Whether you are a local business looking to dominate your city, an e-commerce brand seeking higher sales, or a company aiming to build authority in your industry, our SEO strategies are designed around one objective &mdash; sustainable business growth.
                  </p>
                </div>

                {/* Inline metric strip — grounded in real SEO outcomes, not decoration */}
                <div className="grid grid-cols-3 gap-6 border-t border-[#E2E8F0] pt-6">
                  <div>
                    <p className="font-mono text-2xl sm:text-3xl font-bold text-[#0B1120]">3.4x</p>
                    <p className="text-[12px] text-[#94A3B8] mt-1">avg. organic traffic lift</p>
                  </div>
                  <div>
                    <p className="font-mono text-2xl sm:text-3xl font-bold text-[#0B1120]">68%</p>
                    <p className="text-[12px] text-[#94A3B8] mt-1">leads from page 1 rankings</p>
                  </div>
                  <div>
                    <p className="font-mono text-2xl sm:text-3xl font-bold text-[#0B1120]">120+</p>
                    <p className="text-[12px] text-[#94A3B8] mt-1">campaigns delivered</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: SERP signature element */}
            <div className="lg:col-span-6 w-full flex justify-center lg:pt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full max-w-xl rounded-3xl border border-[#E2E8F0] bg-white p-7 md:p-9 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-6 pb-5 border-b border-[#E2E8F0]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                  <div className="flex-1 ml-3 bg-[#F1F5F9] rounded-full px-4 py-1.5 text-[12px] text-[#94A3B8] font-mono truncate">
                    google.com/search?q=best+{'{your+service}'}+near+me
                  </div>
                </div>

                {/* Before */}
                <div className="mb-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#94A3B8] mb-3">
                    Before DigiWire
                  </p>
                  <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 opacity-70">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] text-[#94A3B8] font-mono">yoursite.com</span>
                      <span className="text-[11px] font-mono font-bold text-[#94A3B8]">Position 47</span>
                    </div>
                    <div className="h-3 w-3/4 bg-[#E2E8F0] rounded mb-1.5" />
                    <div className="h-2.5 w-full bg-[#E2E8F0]/70 rounded" />
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="flex items-center justify-center gap-2 mb-5 text-[#1D4ED8]">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em]">
                    6 months of targeted optimization
                  </span>
                </div>

                {/* After */}
                <div className="mb-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-3">
                    After DigiWire
                  </p>
                  <div className="rounded-xl border-2 border-[#1D4ED8]/25 bg-[#1D4ED8]/[0.03] px-4 py-3.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] text-[#1D4ED8] font-mono font-medium">yoursite.com</span>
                      <span className="text-[11px] font-mono font-bold text-[#16A34A]">Position 2</span>
                    </div>
                    <div className="h-3.5 w-4/5 bg-[#0B1120]/80 rounded mb-2" />
                    <div className="h-2.5 w-full bg-[#475569]/40 rounded mb-1" />
                    <div className="h-2.5 w-5/6 bg-[#475569]/40 rounded" />
                  </div>
                </div>

                {/* Closing statement, now earning its place beneath the proof */}
                <p className="text-[#1D4ED8] text-[14px] sm:text-[15px] font-medium leading-relaxed border-t border-[#E2E8F0] pt-5">
                  Higher rankings matter only when they turn into enquiries, sales, and growth.
                </p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Footer copyright */}
        <footer className="relative z-10 border-t border-[#E2E8F0] py-6 text-center text-xs text-[#94A3B8] select-none">
          &copy; 2026 Digiwire Solutions Pvt. Ltd. All rights reserved.
        </footer>
      </div>
    </main>
  );
}