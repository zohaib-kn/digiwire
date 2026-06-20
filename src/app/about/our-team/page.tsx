'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Serial entrepreneur with 10+ years in growth marketing. Arjun has helped scale 20+ brands from zero to meaningful revenue across South Asia and the Middle East.',
    initials: 'AM',
    color: '#4F46E5',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & CMO',
    bio: 'Ex-Google strategist turned growth architect. Priya leads creative strategy and has a track record of engineering campaigns that convert at 3× industry benchmarks.',
    initials: 'PS',
    color: '#059669',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Rahul Verma',
    role: 'Head of Technology',
    bio: 'Full-stack engineer and automation specialist. Rahul builds the technical backbone of every digital operation — from CRM integrations to custom analytics dashboards.',
    initials: 'RV',
    color: '#0EA5E9',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Ananya Nair',
    role: 'Lead Designer',
    bio: 'UI/UX designer with a background in brand identity. Ananya ensures every pixel earns its place — crafting visual experiences that balance beauty with function.',
    initials: 'AN',
    color: '#D97706',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Kabir Singh',
    role: 'SEO & Content Lead',
    bio: 'Organic search evangelist. Kabir has driven 5M+ in organic impressions for clients through a mix of technical SEO, content architecture, and link authority.',
    initials: 'KS',
    color: '#E11D48',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Meera Pillai',
    role: 'Client Success Manager',
    bio: 'The face clients love to work with. Meera ensures every engagement is smooth, transparent, and delivers beyond expectations — her NPS scores speak for themselves.',
    initials: 'MP',
    color: '#7C3AED',
    linkedin: '#',
    twitter: '#',
  },
];

export default function OurTeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent */}
        <div
          className="absolute top-[-8%] right-[-6%] w-[520px] h-[520px] blur-[160px] rounded-full pointer-events-none opacity-[0.09] z-0"
          style={{ background: '#4F46E5' }}
        />

        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-[100px] pb-24 flex flex-col">

          {/* Back Button */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0B1120] border border-[#E2E8F0] hover:border-[#4F46E5]/30 bg-white hover:bg-[#F1F5F9] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 border border-[#4F46E5]/20 bg-[#4F46E5]/[0.05] text-[#4F46E5] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" /> About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
              Our <span className="text-[#4F46E5]">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
              We&apos;re a tight-knit crew of strategists, builders, and creatives who believe that
              the best work happens when curiosity meets accountability.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(({ name, role, bio, initials, color, linkedin, twitter }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="group flex flex-col gap-4 bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-transparent transition-all duration-300"
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ background: color }}
                >
                  {initials}
                </div>

                <div className="flex-1">
                  <h2 className="text-[17px] font-bold text-[#0B1120] mb-0.5">{name}</h2>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color }}>
                    {role}
                  </p>
                  <p className="text-[14px] text-[#475569] leading-relaxed">{bio}</p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-2 border-t border-[#F1F5F9]">
                  <Link
                    href={linkedin}
                    aria-label={`${name} LinkedIn`}
                    className="text-[#94A3B8] hover:text-[#0A66C2] transition-colors duration-200"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href={twitter}
                    aria-label={`${name} Twitter`}
                    className="text-[#94A3B8] hover:text-[#1DA1F2] transition-colors duration-200"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join the team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#0B1120] mb-1">Want to join the team?</h3>
              <p className="text-[14px] text-[#475569]">
                We&apos;re always looking for driven people who love what they do.
              </p>
            </div>
            <Link
              href="/about/careers"
              className="shrink-0 inline-flex items-center gap-2 bg-[#4F46E5] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#4338CA] transition-colors duration-300"
            >
              View Open Roles
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
