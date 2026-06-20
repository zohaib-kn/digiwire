'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  Sparkles,
  Megaphone,
  FileText,
  Presentation,
  BarChart2,
  Package,
  Image as ImageIcon,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function GraphicDesignPage() {
  const highlights = [
    { label: 'Social media creatives', icon: Sparkles },
    { label: 'Brand identity & logo design', icon: Layers },
    { label: 'Marketing & advertising creatives', icon: Megaphone },
    { label: 'Brochures, flyers & catalogues', icon: FileText },
    { label: 'Corporate presentations', icon: Presentation },
    { label: 'Infographics & visual content', icon: BarChart2 },
    { label: 'Packaging design', icon: Package },
    { label: 'Digital & print media designs', icon: ImageIcon },
  ];

  const palette = ['#7C3AED', '#0B1120', '#F59E0B', '#F8FAFC', '#475569'];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent — single restrained source */}
        <div
          className="absolute top-[-12%] left-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#7C3AED' }}
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
                <span className="inline-flex items-center gap-2 border border-[#7C3AED]/20 bg-[#7C3AED]/[0.05] text-[#7C3AED] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  Graphic <span className="text-[#7C3AED]">Design</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  Great design does more than look attractive &mdash; it communicates, influences, and leaves a lasting impression
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal mb-10">
                  <p>
                    At DigiWire, we create compelling visual content that strengthens brand identity, captures attention, and enhances customer engagement. From social media creatives and marketing materials to corporate branding and promotional campaigns, every design is crafted with a strategic purpose.
                  </p>
                  <p>
                    We combine creativity with brand understanding to ensure that every visual element reflects your business values and connects with your target audience.
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
                  What we design
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map(({ label, icon: Icon }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 hover:border-[#7C3AED]/30 transition-colors duration-300"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#7C3AED]/[0.08] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#7C3AED]" />
                      </div>
                      <span className="text-[13.5px] font-medium text-[#0B1120] leading-snug">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Portfolio moodboard signature element */}
            <div className="lg:col-span-6 w-full flex justify-center lg:pt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full max-w-xl rounded-3xl border border-[#E2E8F0] bg-white p-7 md:p-9 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                {/* Board header */}
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#E2E8F0]">
                  <p className="text-[12px] font-semibold text-[#0B1120]">Brand tear sheet</p>
                  <span className="text-[11px] font-mono text-[#94A3B8]">v01</span>
                </div>

                {/* Moodboard grid */}
                <div className="grid grid-cols-2 gap-3 mb-3">

                  {/* Logo mark tile */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 }}
                    className="rounded-xl border border-[#E2E8F0] bg-[#0B1120] aspect-square flex items-center justify-center"
                  >
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-sm bg-[#F59E0B] rotate-45" />
                    </div>
                  </motion.div>

                  {/* Social tile */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 }}
                    className="rounded-xl border border-[#E2E8F0] bg-gradient-to-br from-[#7C3AED]/[0.06] to-transparent aspect-square p-3.5 flex flex-col justify-between"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#7C3AED]/20" />
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-[#0B1120]/15 rounded" />
                      <div className="h-2 w-2/3 bg-[#0B1120]/15 rounded" />
                    </div>
                  </motion.div>

                  {/* Color palette strip */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.55 }}
                    className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] aspect-square p-3.5 flex flex-col justify-between"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#94A3B8]">
                      Palette
                    </p>
                    <div className="flex rounded-md overflow-hidden h-7 border border-[#E2E8F0]">
                      {palette.map((c) => (
                        <div key={c} className="flex-1" style={{ background: c }} />
                      ))}
                    </div>
                  </motion.div>

                  {/* Brochure fold tile */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.65 }}
                    className="rounded-xl border border-[#E2E8F0] bg-white aspect-square p-3.5 flex gap-1.5"
                  >
                    <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md p-2 flex flex-col gap-1.5">
                      <div className="h-1.5 w-full bg-[#7C3AED]/25 rounded" />
                      <div className="h-1 w-4/5 bg-[#E2E8F0] rounded" />
                      <div className="h-1 w-3/5 bg-[#E2E8F0] rounded" />
                    </div>
                    <div className="flex-1 bg-[#0B1120] rounded-md flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    </div>
                  </motion.div>
                </div>

                {/* Wide infographic strip */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.75 }}
                  className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 flex items-center gap-3"
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#94A3B8] shrink-0">
                    Reach
                  </p>
                  <div className="flex-1 flex items-end gap-1 h-8">
                    {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ height: `${h}%`, background: i === 5 ? '#7C3AED' : '#E2E8F0' }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Closing statement, anchored beneath the moodboard */}
                <p className="text-[#7C3AED] text-[14px] sm:text-[15px] font-medium leading-relaxed border-t border-[#E2E8F0] pt-6 mt-7">
                  Strong brands are remembered not only by what they say, but by how they look.
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