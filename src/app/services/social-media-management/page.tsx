'use client';

import { motion } from 'framer-motion';
import {
  CalendarCheck,
  Clapperboard,
  Palette,
  MessageCircle,
  UserCog,
  BarChart3,
  Share2,
  Heart,
  MessageSquare,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function SocialMediaManagementPage() {
  const highlights = [
    { label: 'Content strategy & planning', icon: CalendarCheck },
    { label: 'Creative posts & reels', icon: Clapperboard },
    { label: 'Social media branding', icon: Palette },
    { label: 'Community engagement', icon: MessageCircle },
    { label: 'Profile optimization', icon: UserCog },
    { label: 'Performance tracking & reporting', icon: BarChart3 },
    { label: 'Instagram, Facebook, LinkedIn & more', icon: Share2 },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent — single restrained source */}
        <div
          className="absolute top-[-12%] right-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#DB2777' }}
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
                <span className="inline-flex items-center gap-2 border border-[#DB2777]/20 bg-[#DB2777]/[0.05] text-[#DB2777] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DB2777]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  Social Media <span className="text-[#DB2777]">Management</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  Your audience spends hours on social media every day &mdash; the real challenge isn&apos;t being present, it&apos;s being remembered
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal">
                  <p>
                    At DigiWire, we help businesses build a consistent and engaging social media presence that strengthens brand credibility, increases customer engagement, and keeps your business visible where conversations happen.
                  </p>
                  <p>
                    From content planning and creative design to audience engagement and performance analysis, we manage your social media platforms with a clear strategy focused on brand growth and business objectives.
                  </p>
                  <p>
                    We create content that informs, inspires, and influences &mdash; helping your brand stay relevant, build trust, and establish meaningful connections with your audience.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Feed card stack signature element */}
            <div className="lg:col-span-5 w-full flex flex-col items-center justify-center lg:pt-2 lg:sticky lg:top-[120px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full max-w-[340px]"
              >
                {/* Back card peeking out */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-3 left-3 right-3 h-16 rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                />

                {/* Front feed card */}
                <div className="relative rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)] overflow-hidden">
                  {/* Post header */}
                  <div className="flex items-center gap-2.5 px-4 pt-4 pb-3">
                    <div className="w-9 h-9 rounded-full bg-[#DB2777]/15 flex items-center justify-center text-[12px] font-bold text-[#9D174D] shrink-0">
                      DW
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#0B1120] truncate">digiwire.solutions</p>
                      <p className="text-[11px] text-[#94A3B8]">Sponsored &middot; Instagram</p>
                    </div>
                  </div>

                  {/* Post media */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="mx-4 aspect-square rounded-xl bg-gradient-to-br from-[#DB2777]/15 via-[#DB2777]/5 to-transparent border border-[#E2E8F0] flex items-center justify-center"
                  >
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-lg bg-[#DB2777]/25" />
                      <div className="w-10 h-10 rounded-full bg-[#0B1120]/10 self-end" />
                    </div>
                  </motion.div>

                  {/* Engagement bar */}
                  <div className="flex items-center gap-4 px-4 pt-3.5 text-[#0B1120]">
                    <Heart className="w-[18px] h-[18px]" />
                    <MessageSquare className="w-[18px] h-[18px]" />
                    <Send className="w-[18px] h-[18px]" />
                  </div>

                  {/* Engagement counts — tick up after load */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.85 }}
                    className="px-4 pt-2 text-[12.5px] font-semibold text-[#0B1120]"
                  >
                    <motion.span
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                    >
                      2,847 likes
                    </motion.span>
                  </motion.p>
                  <p className="px-4 pt-1 pb-4 text-[12.5px] text-[#475569] leading-snug">
                    <span className="font-semibold text-[#0B1120]">digiwire.solutions</span> consistency turns followers into customers.
                  </p>
                </div>

                {/* Closing statement, anchored beneath the feed card */}
                <p className="mt-9 text-[#DB2777] text-[14px] sm:text-[15px] font-medium leading-relaxed text-center max-w-[300px] mx-auto">
                  Social media is no longer just a marketing channel &mdash; it&apos;s where customers discover, evaluate, and connect with brands.
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
              What we manage
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {highlights.map(({ label, icon: Icon }, i) => (
                <div
                  key={i}
                  className={`h-full min-h-[92px] flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 hover:border-[#DB2777]/30 hover:shadow-sm transition-all duration-300 ${
                    i === 6 ? 'sm:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#DB2777]/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#DB2777]" />
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