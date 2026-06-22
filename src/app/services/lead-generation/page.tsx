'use client';

import { motion } from 'framer-motion';
import {
  Megaphone,
  Search,
  LayoutTemplate,
  Target,
  Filter,
  Link2,
  LineChart,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function LeadGenerationPage() {
  const highlights = [
    { label: 'Meta lead campaigns', icon: Megaphone },
    { label: 'Google search & display ads', icon: Search },
    { label: 'Landing page optimization', icon: LayoutTemplate },
    { label: 'Audience targeting & retargeting', icon: Target },
    { label: 'Lead funnel development', icon: Filter },
    { label: 'CRM integration & automation', icon: Link2 },
    { label: 'Campaign analytics & tracking', icon: LineChart },
  ];

  const funnel = [
    { label: 'Impressions', value: '184,200', width: 100 },
    { label: 'Clicks', value: '9,640', width: 74, rate: '5.2%' },
    { label: 'Leads', value: '1,180', width: 46, rate: '12.2%' },
    { label: 'Qualified', value: '312', width: 24, rate: '26.4%' },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent — single restrained source */}
        <div
          className="absolute top-[-12%] right-[-8%] w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none opacity-[0.10] z-0"
          style={{ background: '#EA580C' }}
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
                <span className="inline-flex items-center gap-2 border border-[#EA580C]/20 bg-[#EA580C]/[0.05] text-[#EA580C] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                  Our Services
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
                  Lead <span className="text-[#EA580C]">Generation</span>
                </h1>

                {/* Strong Subheading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0B1120] leading-snug mb-8">
                  Growth begins with the right opportunities &mdash; we connect your business with high-intent prospects
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-6 text-[15px] sm:text-[16px] text-[#475569] leading-relaxed font-normal">
                  <p>
                    At DigiWire, we combine targeted advertising, landing page optimization, audience research, and conversion-focused campaigns to attract high-intent prospects and turn interest into enquiries.
                  </p>
                  <p>
                    Rather than focusing on volume alone, we prioritize lead quality &mdash; helping businesses engage with potential customers who are more likely to convert into long-term clients.
                  </p>
                  <p>
                    From local businesses to growing enterprises, our lead generation solutions are built to create a predictable pipeline of opportunities that support sustainable business growth.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Funnel signature element */}
            <div className="lg:col-span-5 w-full flex flex-col items-center justify-center lg:pt-2 lg:sticky lg:top-[120px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full max-w-xl rounded-3xl border border-[#E2E8F0] bg-white p-7 md:p-9 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                {/* Board header */}
                <div className="flex items-center justify-between mb-7 pb-5 border-b border-[#E2E8F0]">
                  <p className="text-[12px] font-semibold text-[#0B1120]">Campaign funnel</p>
                  <span className="text-[11px] font-mono text-[#94A3B8]">last 30 days</span>
                </div>

                {/* Funnel stages */}
                <div className="flex flex-col gap-1.5">
                  {funnel.map((stage, i) => {
                    const isFinal = i === funnel.length - 1;
                    return (
                      <div key={stage.label}>
                        {i > 0 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.22 }}
                            className="flex items-center gap-2 py-1.5 pl-1"
                          >
                            <span className="text-[10.5px] font-mono font-semibold text-[#EA580C]">
                              {stage.rate}
                            </span>
                            <span className="text-[10.5px] text-[#94A3B8]">
                              conversion to {stage.label.toLowerCase()}
                            </span>
                          </motion.div>
                        )}
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.22, ease: 'easeOut' }}
                          style={{ width: `${stage.width}%`, transformOrigin: 'left' }}
                          className={`rounded-lg px-4 py-3 flex items-center justify-between border ${
                            isFinal
                              ? 'bg-[#EA580C] border-[#EA580C]'
                              : 'bg-[#EA580C]/[0.07] border-[#EA580C]/15'
                          }`}
                        >
                          <span
                            className={`text-[12px] font-semibold whitespace-nowrap ${
                              isFinal ? 'text-white' : 'text-[#0B1120]'
                            }`}
                          >
                            {stage.label}
                          </span>
                          <span
                            className={`text-[12px] font-mono font-semibold whitespace-nowrap ml-3 ${
                              isFinal ? 'text-white' : 'text-[#475569]'
                            }`}
                          >
                            {stage.value}
                          </span>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

                {/* Closing statement, anchored beneath the funnel */}
                <p className="text-[#EA580C] text-[14px] sm:text-[15px] font-medium leading-relaxed border-t border-[#E2E8F0] pt-6 mt-7">
                  Successful marketing is measured not by impressions, but by the opportunities it creates.
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
              How we generate leads
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {highlights.map(({ label, icon: Icon }, i) => (
                <div
                  key={i}
                  className={`h-full min-h-[92px] flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 hover:border-[#EA580C]/30 hover:shadow-sm transition-all duration-300 ${
                    i === 6 ? 'sm:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#EA580C]/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#EA580C]" />
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