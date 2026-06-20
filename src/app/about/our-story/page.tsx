'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Target,
  Sparkles,
  BarChart3,
  RefreshCw,
  Search,
  Megaphone,
  Workflow,
  LayoutTemplate,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const capabilities = [
  { label: 'Conversion-focused websites', icon: LayoutTemplate },
  { label: 'Targeted advertising campaigns', icon: Megaphone },
  { label: 'SEO strategy & implementation', icon: Search },
  { label: 'Automated customer journeys', icon: Workflow },
];

const cycle = [
  { step: '01', title: 'Strategic Planning', description: 'Defining the roadmap around measurable business objectives.', icon: Target, color: '#059669' },
  { step: '02', title: 'Creative Execution', description: 'Bringing strategy to life across web, content, and campaigns.', icon: Sparkles, color: '#4F46E5' },
  { step: '03', title: 'Analytics', description: 'Tracking performance against the outcomes that matter.', icon: BarChart3, color: '#0EA5E9' },
  { step: '04', title: 'Continuous Optimization', description: 'Refining every campaign based on what the data shows.', icon: RefreshCw, color: '#D97706' },
];

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent */}
        <div
          className="absolute top-[-10%] left-[-6%] w-[560px] h-[560px] blur-[180px] rounded-full pointer-events-none opacity-[0.08] z-0"
          style={{ background: '#059669' }}
        />

        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-[100px] pb-24 flex flex-col">

          {/* Back Button */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0B1120] border border-[#E2E8F0] hover:border-[#059669]/30 bg-white hover:bg-[#F1F5F9] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 border border-[#059669]/20 bg-[#059669]/[0.05] text-[#059669] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" /> About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
              A strategic <span className="text-[#059669]">digital partner</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
              DigiWire Smart Solutions is a technology-driven digital marketing agency specializing in performance marketing, SEO, social media management, branding, website development, and marketing automation.
            </p>
          </motion.div>

          {/* What we help you do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-10 mb-20 items-start"
          >
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1120] mb-4 leading-snug">
                We help businesses turn data into growth
              </h2>
              <p className="text-[15px] sm:text-base text-[#475569] leading-relaxed">
                We help businesses leverage data, consumer insights, and digital technologies to improve online visibility, acquire high-quality leads, increase customer engagement, and maximize return on marketing investment.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { label: 'Online Visibility', detail: 'Search & social presence' },
                { label: 'Lead Quality', detail: 'High-intent prospects' },
                { label: 'Engagement', detail: 'Customer interaction' },
                { label: 'Marketing ROI', detail: 'Measurable return' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-5"
                >
                  <p className="text-base font-bold text-[#0B1120] mb-1">{item.label}</p>
                  <p className="text-[13px] text-[#94A3B8]">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How we work — strategy cycle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1120] mb-4 leading-snug max-w-2xl">
              Strategy, creativity, and data — working in a loop, not a line
            </h2>
            <p className="text-[15px] sm:text-base text-[#475569] leading-relaxed max-w-2xl mb-12">
              Our approach combines strategic planning, creative execution, analytics, and continuous optimization to ensure every campaign contributes to measurable business objectives. Optimization feeds straight back into strategy, so every cycle starts a little smarter than the last.
            </p>

            {/* Cycle diagram */}
            <div className="relative grid sm:grid-cols-4 gap-4 sm:gap-3">
              {/* Connecting line for desktop */}
              <div className="hidden sm:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-[#E2E8F0] z-0" />

              {cycle.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative z-10 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white shadow-sm"
                      style={{ background: `${step.color}15` }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <span
                      className="text-[11px] font-mono font-bold tracking-widest"
                      style={{ color: step.color }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0B1120] mb-1.5">{step.title}</h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed">{step.description}</p>
                </motion.div>
              ))}

              {/* Loop-back arrow, desktop only */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="hidden sm:flex items-center gap-1.5 absolute -bottom-9 right-0 text-[#94A3B8]"
              >
                <RefreshCw className="w-3 h-3" />
                <span className="text-[11px]">feeds back into strategy</span>
              </motion.div>
            </div>
          </motion.div>

          {/* What we build — capability strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-20 rounded-3xl border border-[#E2E8F0] bg-white p-8 md:p-10"
          >
            <p className="text-[15px] sm:text-base text-[#475569] leading-relaxed mb-8 max-w-3xl">
              From building conversion-focused websites and executing targeted advertising campaigns to implementing SEO strategies and automated customer journeys, we create digital ecosystems that support sustainable business growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {capabilities.map(({ label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#059669]/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#059669]" />
                  </div>
                  <p className="text-[14px] font-semibold text-[#0B1120] leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing statement — who we serve */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-[#059669] pl-6 max-w-2xl"
          >
            <p className="text-[#475569] text-lg sm:text-xl leading-relaxed">
              With experience across multiple industries and markets, DigiWire serves as a strategic digital partner for organizations seeking scalable, result-oriented marketing solutions in an increasingly competitive digital landscape.
            </p>
          </motion.div>
        </section>

        <footer className="relative z-10 border-t border-[#E2E8F0] py-6 text-center text-xs text-[#94A3B8] select-none">
          &copy; 2026 Digiwire Solutions Pvt. Ltd. All rights reserved.
        </footer>
      </div>
    </main>
  );
}