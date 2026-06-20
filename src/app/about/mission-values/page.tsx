'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Target, Heart, Zap, Shield, Users, Globe2 } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const mission = {
  heading: 'Empower every business to grow fearlessly in the digital age.',
  body: 'We exist to level the playing field — giving ambitious founders, lean startups, and established enterprises the same calibre of digital execution that was once reserved for Fortune 500 budgets.',
};

const vision = {
  heading: 'A world where digital growth is earned, not gamed.',
  body: 'We envision an internet where lasting brands are built through genuine value, transparent strategies, and human-centred creativity — not shortcuts or vanity metrics.',
};

const values = [
  {
    icon: Target,
    title: 'Outcome-Obsessed',
    description:
      'We measure our success purely by the results we generate for clients. Impressions, clicks, and followers are only proxies — revenue and retention are the real scoreboard.',
    color: '#4F46E5',
  },
  {
    icon: Heart,
    title: 'Client-First Always',
    description:
      'Every decision, every recommendation, every strategy is filtered through one question: is this truly best for the client? Not for our margin. Not for our convenience.',
    color: '#E11D48',
  },
  {
    icon: Zap,
    title: 'Relentless Iteration',
    description:
      'Markets change fast. We treat every campaign as a hypothesis, test continuously, and adapt without ego. Speed of learning is our competitive advantage.',
    color: '#D97706',
  },
  {
    icon: Shield,
    title: 'Radical Transparency',
    description:
      'No smoke and mirrors. Clients see exactly what we do, why we do it, and what it costs. Honest reporting — even when the numbers aren\'t pretty — builds lasting trust.',
    color: '#059669',
  },
  {
    icon: Users,
    title: 'People Over Process',
    description:
      'Great work starts with great people. We invest heavily in our team\'s growth, wellbeing, and creative freedom because a thriving team creates thriving client results.',
    color: '#7C3AED',
  },
  {
    icon: Globe2,
    title: 'Global Perspective',
    description:
      'Our team spans continents, cultures, and time zones. This diversity isn\'t a talking point — it\'s the source of the fresh, nuanced strategies that set our work apart.',
    color: '#0EA5E9',
  },
];

export default function MissionValuesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F8FA] text-[#0B1120]">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        {/* Background accent */}
        <div
          className="absolute top-[-8%] right-[-5%] w-[500px] h-[500px] blur-[160px] rounded-full pointer-events-none opacity-[0.08] z-0"
          style={{ background: '#7C3AED' }}
        />

        <section className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-8 pt-[100px] pb-24 flex flex-col gap-16">

          {/* Back Button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0B1120] border border-[#E2E8F0] hover:border-[#7C3AED]/30 bg-white hover:bg-[#F1F5F9] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 border border-[#7C3AED]/20 bg-[#7C3AED]/[0.05] text-[#7C3AED] text-[11px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-7 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" /> About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#0B1120] mb-6">
              Mission &amp; <span className="text-[#7C3AED]">Values</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
              The principles we live by every day — guiding every strategy, every hire, and every conversation we have with a client.
            </p>
          </motion.div>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Our Mission', accent: '#7C3AED', ...mission },
              { label: 'Our Vision', accent: '#059669', ...vision },
            ].map(({ label, accent, heading, body }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-8 flex flex-col gap-4"
              >
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: accent }}
                >
                  {label}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1120] leading-snug">
                  {heading}
                </h2>
                <p className="text-[15px] text-[#475569] leading-relaxed">{body}</p>
                <div className="h-1 rounded-full mt-auto" style={{ background: `${accent}30` }}>
                  <div className="h-full w-3/5 rounded-full" style={{ background: accent }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values grid */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[11px] font-bold text-[#94A3B8] tracking-[0.2em] uppercase mb-6"
            >
              Our Core Values
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map(({ icon: Icon, title, description, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.4 + i * 0.1 }}
                  className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-[0_10px_28px_rgba(15,23,42,0.07)] hover:border-transparent transition-all duration-300 flex flex-col gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0B1120]">{title}</h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-[#E2E8F0] py-6 text-center text-xs text-[#94A3B8] select-none">
          &copy; 2026 Digiwire Solutions Pvt. Ltd. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
