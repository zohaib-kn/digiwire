'use client';

import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Users,
  Workflow,
  Database,
  Settings2,
  Plug,
  BarChart3,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function CRMSolutionsPage() {
  const highlights = [
    { label: 'CRM setup & implementation', icon: LayoutGrid },
    { label: 'Lead management & tracking', icon: Users },
    { label: 'Sales pipeline automation', icon: Workflow },
    { label: 'Customer data management', icon: Database },
    { label: 'Workflow & process automation', icon: Settings2 },
    { label: 'Integration with websites & tools', icon: Plug },
    { label: 'Reporting & analytics dashboards', icon: BarChart3 },
    { label: 'CRM training & support', icon: GraduationCap },
  ];

  const pipeline = [
    {
      stage: 'New',
      leads: [{ name: 'R. Verma', value: '₹42K' }],
    },
    {
      stage: 'Contacted',
      leads: [{ name: 'A. Sharma', value: '₹68K' }, { name: 'K. Mehta', value: '₹31K' }],
    },
    {
      stage: 'Qualified',
      leads: [{ name: 'S. Iyer', value: '₹1.2L' }],
    },
    {
      stage: 'Won',
      leads: [{ name: 'P. Nair', value: '₹95K' }],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent — single restrained source */}
        <div
          className="absolute top-[-12%] right-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#D97706' }}
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
                <span className="inline-flex items-center gap-2 border border-[#D97706]/20 bg-[#D97706]/[0.05] text-[#D97706] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  CRM <span className="text-[#D97706]">Solutions</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  Customer relationships are the foundation of business &mdash; keep sales, data, and workflows in one place
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal mb-10">
                  <p>
                    Our CRM solutions help organizations manage leads, streamline sales processes, improve customer interactions, and make smarter business decisions through centralized data management.
                  </p>
                  <p>
                    At DigiWire, we implement and customize CRM systems that enable businesses to track customer journeys, automate routine tasks, manage enquiries efficiently, and improve team productivity. By bringing customer information, communication history, and sales activities into a single platform, we help businesses create a more organized and scalable workflow.
                  </p>
                  <p>
                    Whether you&apos;re managing hundreds of leads or thousands of customers, our CRM solutions provide the visibility and control needed to strengthen relationships and drive growth.
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
                  What we set up
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map(({ label, icon: Icon }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 hover:border-[#D97706]/30 transition-colors duration-300"
                    >
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-[#D97706]/[0.08] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#D97706]" />
                      </div>
                      <span className="text-[13.5px] font-medium text-[#0B1120] leading-snug">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Pipeline board signature element */}
            <div className="lg:col-span-6 w-full flex justify-center lg:pt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full max-w-xl rounded-3xl border border-[#E2E8F0] bg-white p-7 md:p-9 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                {/* Board header */}
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#E2E8F0]">
                  <p className="text-[12px] font-semibold text-[#0B1120]">Sales pipeline</p>
                  <span className="text-[11px] font-mono text-[#94A3B8]">4 leads &middot; ₹3.36L</span>
                </div>

                {/* Pipeline columns */}
                <div className="grid grid-cols-4 gap-2.5">
                  {pipeline.map((col, ci) => (
                    <motion.div
                      key={col.stage}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.35 + ci * 0.1 }}
                      className="flex flex-col"
                    >
                      <div className="flex items-center gap-1.5 mb-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background:
                              col.stage === 'Won' ? '#16A34A' : '#D97706',
                            opacity: col.stage === 'Won' ? 1 : 0.5 + ci * 0.15,
                          }}
                        />
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#64748B] truncate">
                          {col.stage}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 min-h-[120px]">
                        {col.leads.map((lead, li) => {
                          const isHero = col.stage === 'Won';
                          return (
                            <motion.div
                              key={lead.name}
                              initial={isHero ? { opacity: 0, x: -24, y: -8 } : { opacity: 0 }}
                              animate={{ opacity: 1, x: 0, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: isHero ? 1.05 : 0.5 + ci * 0.1 + li * 0.08,
                              }}
                              className={`rounded-lg border px-2.5 py-2.5 ${
                                isHero
                                  ? 'border-[#16A34A]/30 bg-[#16A34A]/[0.05]'
                                  : 'border-[#E2E8F0] bg-[#F8FAFC]'
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold mb-2 ${
                                  isHero
                                    ? 'bg-[#16A34A]/15 text-[#15803D]'
                                    : 'bg-[#D97706]/10 text-[#B45309]'
                                }`}
                              >
                                {lead.name.charAt(0)}
                              </div>
                              <p className="text-[10.5px] font-semibold text-[#0B1120] leading-tight truncate">
                                {lead.name}
                              </p>
                              <p className="text-[10px] font-mono text-[#94A3B8] mt-0.5">
                                {lead.value}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Closing statement, anchored beneath the board */}
                <p className="text-[#D97706] text-[14px] sm:text-[15px] font-medium leading-relaxed border-t border-[#E2E8F0] pt-6 mt-7">
                  Managing customer relationships shouldn&apos;t be complicated &mdash; it should be efficient, intelligent, and growth-focused.
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