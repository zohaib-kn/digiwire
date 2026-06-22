'use client';

import { motion } from 'framer-motion';
import {
  Play,
  Megaphone,
  Clapperboard,
  Sparkles,
  Presentation,
  FileEdit,
  Scissors,
  Wand2,
  Share2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function VideoCreationPage() {
  const highlights = [
    { label: 'Promotional & brand videos', icon: Megaphone },
    { label: 'Social media reels & shorts', icon: Clapperboard },
    { label: 'Explainer & animated videos', icon: Sparkles },
    { label: 'Corporate presentation videos', icon: Presentation },
    { label: 'Scriptwriting & storyboarding', icon: FileEdit },
    { label: 'Professional editing & post-production', icon: Scissors },
    { label: 'Motion graphics & visual effects', icon: Wand2 },
    { label: 'Video optimization for platforms', icon: Share2 },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent — single restrained source */}
        <div
          className="absolute top-[-12%] left-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#DC2626' }}
        />

        {/* Main Container */}
        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-24 md:pt-32 pb-24 flex flex-col">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">

            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Category Badge */}
                <span className="inline-flex items-center gap-2 border border-[#DC2626]/20 bg-[#DC2626]/[0.05] text-[#DC2626] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  Video <span className="text-[#DC2626]">Creation</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  A great video doesn&apos;t just capture attention &mdash; it communicates your value and inspires action
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal">
                  <p>
                    At DigiWire, we help businesses produce professional, engaging, and high-impact video content that tells their brand story, highlights key products, and increases conversion rates across social media and digital channels.
                  </p>
                  <p>
                    From concept and scriptwriting to filming, editing, and animation, we manage the entire video production process with a focus on delivering visually stunning content aligned with your marketing goals.
                  </p>
                  <p>
                    Whether you need engaging reels, corporate animations, promotional videos, or product walkthroughs, our video solutions are tailored to help your brand stand out and build a stronger emotional connection with your audience.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Player + timeline signature element */}
            <div className="lg:col-span-5 w-full flex flex-col items-center justify-center lg:pt-2 lg:sticky lg:top-[120px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full max-w-xl rounded-3xl border border-[#E2E8F0] bg-white p-7 md:p-9 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                {/* Player frame */}
                <div className="relative rounded-2xl bg-[#0B1120] aspect-video overflow-hidden flex items-center justify-center mb-5">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(220,38,38,0.25), transparent 60%)',
                    }}
                  />
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.4 }}
                    className="relative z-10 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center"
                    aria-label="Play preview"
                  >
                    <Play className="w-5 h-5 text-[#0B1120] fill-[#0B1120] ml-0.5" />
                  </motion.button>

                  {/* Timestamp */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="absolute bottom-3 right-4 text-[11px] font-mono text-white/80"
                  >
                    0:14 / 1:32
                  </motion.span>
                </div>

                {/* Scrubber */}
                <div className="relative h-1.5 rounded-full bg-[#E2E8F0] mb-7 overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '15%' }}
                    transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 bg-[#DC2626] rounded-full"
                  />
                  <motion.div
                    initial={{ left: '0%' }}
                    animate={{ left: '15%' }}
                    transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#DC2626] shadow-[0_0_0_3px_white]"
                  />
                </div>

                {/* Edit timeline strip */}
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#94A3B8] mb-3">
                  Edit timeline
                </p>
                <div className="grid grid-cols-6 gap-1.5 mb-7">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.85 + i * 0.07 }}
                      className={`aspect-square rounded-md border ${
                        i === 1
                          ? 'border-[#DC2626] bg-[#DC2626]/10'
                          : 'border-[#E2E8F0] bg-[#F8FAFC]'
                      } flex items-center justify-center`}
                    >
                      <div
                        className={`w-3 h-3 rounded-sm ${
                          i === 1 ? 'bg-[#DC2626]/40' : 'bg-[#E2E8F0]'
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Closing statement, anchored beneath the player */}
                <p className="text-[#DC2626] text-[14px] sm:text-[15px] font-medium leading-relaxed border-t border-[#E2E8F0] pt-6">
                  In a world of short attention spans, video is the most powerful way to make your message stick.
                </p>
              </motion.div>
            </div>

          </div>

          {/* Capability Grid Section — full width bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-14 md:mt-20 pt-10 md:pt-12 border-t border-[#E2E8F0]"
          >
            <h3 className="text-[11px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase mb-6 text-center sm:text-left">
              What we produce
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {highlights.map(({ label, icon: Icon }, i) => (
                <div
                  key={i}
                  className="h-full min-h-[92px] flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 hover:border-[#DC2626]/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#DC2626]/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <span className="text-[14px] sm:text-[15px] font-semibold text-[#0B1120] leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer copyright */}
        <footer className="relative z-10 border-t border-[#E2E8F0] py-6 text-center text-xs text-[#94A3B8] select-none">
          &copy; 2026 Digiwire Solutions Pvt. Ltd. All rights reserved.
        </footer>
      </div>
    </main>
  );
}