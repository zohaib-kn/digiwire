'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Briefcase, Rocket, Heart, Zap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const openRoles = [
  {
    title: 'Senior SEO Strategist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Lead technical SEO audits, architect content strategies, and mentor junior specialists. You have 4+ years of proven organic growth results and a data-first mindset.',
    color: '#4F46E5',
  },
  {
    title: 'Full-Stack Developer',
    department: 'Technology',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description:
      'Build client-facing web applications and internal automation tools. Proficiency in Next.js, Node.js, and REST/GraphQL APIs required. Experience with CRM integrations is a plus.',
    color: '#059669',
  },
  {
    title: 'Social Media Manager',
    department: 'Content',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Craft and execute multi-platform social strategies for 5–8 client accounts. You understand community nuance, can write compelling short-form copy, and are fluent in analytics.',
    color: '#D97706',
  },
  {
    title: 'UI / UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract / Full-time',
    description:
      'Design digital experiences from wireframe to polished prototype. You own the craft from discovery to handoff, with a portfolio that balances aesthetics and conversion.',
    color: '#E11D48',
  },
  {
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Hybrid — Mumbai / Delhi',
    type: 'Full-time',
    description:
      'Identify, pitch, and close new client partnerships. You are comfortable leading discovery calls, qualifying leads, and collaborating closely with the strategy team to scope engagements.',
    color: '#7C3AED',
  },
];

const perks = [
  { icon: Rocket, label: 'Remote-first culture' },
  { icon: Heart, label: 'Health & wellness allowance' },
  { icon: Zap, label: 'Learning & development budget' },
  { icon: Briefcase, label: 'Flexible working hours' },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent */}
        <div
          className="absolute top-[-10%] left-[-5%] w-[540px] h-[540px] blur-[170px] rounded-full pointer-events-none opacity-[0.08] z-0"
          style={{ background: '#0EA5E9' }}
        />

        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-[100px] pb-24 flex flex-col gap-14">

          {/* Back Button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0B1120] border border-[#E2E8F0] hover:border-[#0EA5E9]/30 bg-white hover:bg-[#F1F5F9] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 border border-[#0EA5E9]/20 bg-[#0EA5E9]/[0.05] text-[#0EA5E9] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" /> About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
              Careers at <span className="text-[#0EA5E9]">Digiwire</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
              Join a team that ships meaningful work, grows fast, and genuinely cares about the people doing the work. We&apos;re growing — and we&apos;d love to grow with you.
            </p>
          </motion.div>

          {/* Perks strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {perks.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-xl px-4 py-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/[0.08] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#0EA5E9]" />
                </div>
                <span className="text-[13px] font-medium text-[#0B1120] leading-snug">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Open Roles */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[11px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase mb-6"
            >
              Open Positions
            </motion.h2>

            <div className="flex flex-col gap-4">
              {openRoles.map(({ title, department, location, type, description, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
                  className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-[0_10px_28px_rgba(15,23,42,0.07)] hover:border-transparent transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Colour dot */}
                    <div
                      className="shrink-0 w-2 h-2 rounded-full mt-2 hidden sm:block"
                      style={{ background: color }}
                    />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1">
                        <h3 className="text-[17px] font-bold text-[#0B1120]">{title}</h3>
                        <span
                          className="text-[11px] font-bold tracking-widest uppercase"
                          style={{ color }}
                        >
                          {department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 text-[12px] text-[#64748B]">
                          <MapPin className="w-3 h-3" /> {location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[12px] text-[#64748B]">
                          <Clock className="w-3 h-3" /> {type}
                        </span>
                      </div>

                      <p className="text-[14px] text-[#475569] leading-relaxed max-w-2xl">{description}</p>
                    </div>

                    {/* Apply CTA */}
                    <Link
                      href={`mailto:careers@digiwire.io?subject=Application — ${encodeURIComponent(title)}`}
                      className="shrink-0 inline-flex items-center gap-1.5 border border-[#E2E8F0] group-hover:border-transparent text-[#475569] group-hover:text-white text-[13px] font-semibold px-4 py-2 rounded-full group-hover:bg-[#0B1120] transition-all duration-300"
                    >
                      Apply <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Generic apply CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="bg-[#0B1120] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Don&apos;t see your role?</h3>
              <p className="text-[14px] text-[#94A3B8]">
                Send us your portfolio and a short note. We&apos;re always on the lookout for exceptional people.
              </p>
            </div>
            <Link
              href="mailto:careers@digiwire.io"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300"
            >
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        <footer className="relative z-10 border-t border-[#E2E8F0] py-6 text-center text-xs text-[#94A3B8] select-none">
          &copy; 2026 Digiwire Solutions Pvt. Ltd. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
