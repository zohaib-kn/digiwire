'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Apple,
  Layers,
  Palette,
  ShoppingCart,
  Building2,
  Plug,
  LifeBuoy,
  Wifi,
  Battery,
  Signal,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function AppDevelopmentPage() {
  const highlights = [
    { label: 'Android app development', icon: Smartphone },
    { label: 'iOS app development', icon: Apple },
    { label: 'Cross-platform mobile applications', icon: Layers },
    { label: 'UI/UX design', icon: Palette },
    { label: 'E-commerce applications', icon: ShoppingCart },
    { label: 'Business & enterprise apps', icon: Building2 },
    { label: 'API & third-party integrations', icon: Plug },
    { label: 'App maintenance & support', icon: LifeBuoy },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent — single restrained source */}
        <div
          className="absolute top-[-12%] left-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#0D9488' }}
        />

        {/* Main Container */}
        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-[80px] pb-24 flex flex-col">

          

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Heading, Content & Capability Grid */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Category Badge */}
                <span className="inline-flex items-center gap-2 border border-[#0D9488]/20 bg-[#0D9488]/[0.04] text-[#0D9488] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  App <span className="text-[#0D9488]">Development</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  Custom Android and iOS apps built for scale, speed, and seamless experiences
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal mb-10">
                  <p>
                    In today&apos;s mobile-first world, customers expect businesses to be accessible anytime, anywhere. Our app development solutions help businesses deliver seamless digital experiences through powerful, user-friendly, and scalable mobile applications.
                  </p>
                  <p>
                    At DigiWire, we develop custom Android and iOS applications tailored to your business objectives. Whether you need a customer-facing app, e-commerce platform, booking system, educational application, or enterprise solution, we create applications designed for performance, security, and growth.
                  </p>
                  <p>
                    From concept and UI/UX design to development, testing, and deployment, we ensure every app delivers a smooth user experience while supporting your long-term business goals.
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
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {highlights.map(({ label, icon: Icon }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 hover:border-[#0D9488]/30 transition-colors duration-300"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#0D9488]/[0.07] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#0D9488]" />
                      </div>
                      <span className="text-[13.5px] font-medium text-[#0B1120] leading-snug">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Phone mockup signature element */}
            <div className="lg:col-span-5 w-full flex justify-center lg:pt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                {/* Phone frame */}
                <div className="relative w-[260px] sm:w-[280px] rounded-[2.25rem] border-[6px] border-[#0B1120] bg-[#0B1120] shadow-[0_20px_50px_rgba(15,23,42,0.18)] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0B1120] rounded-b-2xl z-20" />

                  {/* Screen */}
                  <div className="relative bg-[#F8FAFC] aspect-[9/19.5] overflow-hidden">
                    {/* Status bar */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex items-center justify-between px-6 pt-3 pb-2 text-[10px] font-semibold text-[#0B1120]"
                    >
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>

                    {/* App nav */}
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.55 }}
                      className="flex items-center justify-between px-5 py-3"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#0D9488]" />
                      <p className="text-[13px] font-semibold text-[#0B1120]">DigiWire App</p>
                      <div className="w-7 h-7 rounded-full bg-[#E2E8F0]" />
                    </motion.div>

                    {/* Content cards */}
                    <div className="px-5 space-y-3 pb-6">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
                          className="rounded-2xl bg-white border border-[#E2E8F0] p-3.5"
                        >
                          <div className="h-2.5 w-3/5 bg-[#0D9488]/25 rounded mb-2.5" />
                          <div className="h-2 w-full bg-[#E2E8F0] rounded mb-1.5" />
                          <div className="h-2 w-4/5 bg-[#E2E8F0] rounded" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Tab bar */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.1 }}
                      className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-4 border-t border-[#E2E8F0] bg-white"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                    </motion.div>
                  </div>
                </div>

                {/* Closing statement, anchored beneath the device */}
                <p className="mt-7 max-w-[280px] text-[#0D9488] text-[14px] sm:text-[15px] font-medium leading-relaxed text-center mx-auto">
                  Today&apos;s customers don&apos;t just visit websites &mdash; they expect your business at their fingertips.
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