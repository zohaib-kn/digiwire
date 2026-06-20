'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
  Target,
  Sparkles,
  Cpu,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ── Content Arrays (Replaceable constants at the top) ───────────────────

const storyParagraphs = [
  "At DigiWire, we don't believe in boilerplate software or cookie-cutter solutions. We believe that digital platforms should be a force multiplier, custom-tuned to the unique choreography of your operations and growth objectives.",
  "Founded to merge deep engineering capability with refined product design, we act as a strategic partner to ambitious businesses. We sit at the intersection of workflow automation, elegant interface design, and intelligent data systems.",
  "Whether we are designing intuitive CRM portals, automating high-throughput AI tasks, or crafting conversion-optimized web experiences, our mission remains constant: to eliminate operational friction and build systems that scale with your ambitions."
];

const values = [
  {
    title: "Strategy First",
    description: "We align every system we build with your core business outcomes. If it doesn't drive efficiency, engagement, or growth, we question if it should exist.",
    Icon: Target,
    accent: "from-cyan-500/10 to-blue-500/10 text-cyan-600"
  },
  {
    title: "Design With Purpose",
    description: "Visual elegance is only half the battle. We build interfaces that minimize cognitive load, accelerate user onboarding, and make daily operations feel effortless.",
    Icon: Sparkles,
    accent: "from-indigo-500/10 to-purple-500/10 text-indigo-600"
  },
  {
    title: "Build For Scale",
    description: "Our architectures are built using modern, type-safe frameworks and cloud ecosystems designed to handle high transaction volumes with sub-second latency.",
    Icon: Cpu,
    accent: "from-emerald-500/10 to-teal-500/10 text-emerald-600"
  },
  {
    title: "Measure What Matters",
    description: "We focus on tangible metrics—reduced transaction times, increased conversion rates, and workflow acceleration—not just raw velocity of feature shipping.",
    Icon: TrendingUp,
    accent: "from-amber-500/10 to-orange-500/10 text-amber-600"
  }
];

const teamMembers: Array<{ name: string, role: string, image?: string }> = [
  { name: "Zohaib", role: "Front-end Developer", image: "/img/ZOHAIBc.png" },
  { name: "Fardeen", role: "Creative Lead", image: "/img/FARDEEN SIR2.png" },
  { name: "Muneer", role: "Project Lead", image: "/img/MUNEER SIRc.png" },
  { name: "Pranshu", role: "Backend Developer", image: "/img/PRANSHU SIR.png" },
  { name: "Prerna", role: "UX Designer", image: "/img/PRERNA.png" },
  { name: "Sumaiya", role: "Marketing Lead", image: "/img/.png" },
  { name: "Automation Expert", role: "AI Workflows" },
  { name: "Data Scientist", role: "Data Analytics" },
  { name: "DevOps Engineer", role: "Infrastructure" },
  { name: "Product Manager", role: "Product Strategy" },
  { name: "QA Lead", role: "Quality Assurance" },
  { name: "Copywriter", role: "Content Strategy" }
];

const processSteps = [
  {
    step: "01",
    name: "Discover",
    description: "We deep dive into your current workflows, friction points, and growth objectives to map out a clear technical roadmap."
  },
  {
    step: "02",
    name: "Design",
    description: "Wireframes, high-fidelity interactive prototypes, and custom UI design systems built around clarity and user delight."
  },
  {
    step: "03",
    name: "Build",
    description: "Clean, performant, type-safe development integrated with robust APIs and custom intelligence layers."
  },
  {
    step: "04",
    name: "Launch",
    description: "Rigorous testing, staging environment audits, and seamless production deployment with zero system downtime."
  },
  {
    step: "05",
    name: "Scale",
    description: "Ongoing optimization, proactive system monitoring, and iterative features based on real analytics and user feedback."
  }
];

// ── Team Card Component with proper image fallback ──────────────────────

interface TeamCardProps {
  member: typeof teamMembers[0];
  index: number;
}

function TeamCard({ member, index }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);

  // Generate initials for fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Consistent fixed aspect ratio (456/560 ≈ 0.814)
  const cardAspectRatio = "aspect-[456/560]";

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={`relative w-full ${cardAspectRatio} rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/60 group bg-white`}
    >
      {/* Image or Fallback */}
      {member.image && !imageError ? (
        <div className="relative w-full h-full overflow-hidden bg-slate-100">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-translate-y-2"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Gradient overlay at bottom for readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-80" />
        </div>
      ) : (
        // Gradient background with initials fallback
        <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50">
            <span className="text-2xl font-bold text-slate-700">
              {getInitials(member.name)}
            </span>
          </div>
        </div>
      )}

      {/* Floating pill label - positioned at bottom of card */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-start">
        <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full p-1.5 pr-4 shadow-lg border border-white/50 max-w-[92%] sm:max-w-none">
          <div className="bg-[#0F172A] text-white font-bold text-[11px] sm:text-xs px-2.5 py-1.5 rounded-full whitespace-nowrap shrink-0">
            {member.name}
          </div>
          <div className="text-[10px] sm:text-[11px] font-semibold text-[#475569] whitespace-nowrap shrink-0 pr-1">
            {member.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Animation variants ────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

// ── Main Page Component ──────────────────────────────────────────────────

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const animY = shouldReduceMotion ? 0 : 20;

  // Adjust fadeUp for reduced motion preference
  const accessibleFadeUp: Variants = {
    hidden: { opacity: 0, y: animY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Distribute team members into 4 columns (round-robin)
  const columns = teamMembers.reduce((acc, member, index) => {
    const colIndex = index % 4;
    if (!acc[colIndex]) acc[colIndex] = [];
    acc[colIndex].push(member);
    return acc;
  }, [] as typeof teamMembers[0][][]);

  // Column offset classes for staggered look (matches Humaan's pattern)
  const columnOffsetClasses = [
    "mt-0",      // Column 1: flush top
    "mt-16",     // Column 2: offset down
    "mt-0",      // Column 3: flush top  
    "mt-16"      // Column 4: offset down
  ];

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-blue-400/5 rounded-full blur-[160px] pointer-events-none" />

      <Navbar />

      {/* ── 1. Hero Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-28 md:pt-32 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={accessibleFadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            About DigiWire
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={accessibleFadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08] mb-8"
          >
            We build digital systems <br className="hidden sm:inline" />
            that help <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">businesses grow</span>.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={accessibleFadeUp}
            className="text-lg sm:text-xl md:text-2xl text-[#475569] leading-relaxed max-w-3xl font-normal"
          >
            DigiWire combines strategy, design, software, automation, and marketing to create meaningful digital experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 2. Story Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E2E8F0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Short title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={accessibleFadeUp}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
              Crafting premium digital platforms with absolute precision.
            </h2>
          </motion.div>

          {/* Right Column: Paragraph blocks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {storyParagraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={accessibleFadeUp}
                className="text-[16px] sm:text-lg text-[#475569] leading-relaxed font-normal"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Values / Principles Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E2E8F0]">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
            Our Core Principles
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl">
            The values that guide every layout, workflow, interface, and system we design for our clients.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((val, i) => {
            const Icon = val.Icon;
            return (
              <motion.div
                key={val.title}
                variants={accessibleFadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.accent} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{val.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#475569]">{val.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── 4. Team / People Visual Section (FIXED) ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E2E8F0]">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
            The Minds Behind DigiWire
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl">
            Our multi-disciplinary team merges design strategy, growth analytics, and AI workflow integration.
          </p>
        </div>

        {/* Team Grid - Matches Humaan's actual layout structure */}
        <div className="bg-gradient-to-b from-[#EFF6FF]/60 to-[#F1F5F9]/60 border border-slate-200/80 rounded-[32px] p-6 sm:p-10 lg:p-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {columns.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                variants={accessibleFadeUp}
                className={`flex flex-col gap-6 lg:gap-8 ${columnOffsetClasses[colIndex]}`}
              >
                {column.map((member, memberIndex) => (
                  <TeamCard
                    key={`${colIndex}-${memberIndex}`}
                    member={member}
                    index={colIndex * column.length + memberIndex}
                  />
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. Process Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E2E8F0]">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
            How We Build
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl">
            A cohesive design and development process built to ensure clarity and delivery excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Horizontal line for desktop connecting items */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={accessibleFadeUp}
              className="flex flex-col items-start"
            >
              {/* Number and dot */}
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3 mb-4">
                <div className="w-14 h-14 rounded-full border-2 border-cyan-500 bg-white flex items-center justify-center text-cyan-600 font-bold text-lg shadow-sm">
                  {step.step}
                </div>
                <div className="h-px bg-slate-200 flex-1 md:hidden" />
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{step.name}</h3>
              <p className="text-[14px] leading-relaxed text-[#475569]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. CTA Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 mb-20">
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
          {/* Accent light glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"
          >
            <motion.h2
              variants={accessibleFadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
            >
              Let’s build something meaningful.
            </motion.h2>

            <motion.p
              variants={accessibleFadeUp}
              className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed"
            >
              Have a complex system to build or a workflow to automate? Let’s design a digital platform engineered around your growth goals.
            </motion.p>

            <motion.div
              variants={accessibleFadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 hover:border-slate-500 text-white hover:bg-white/5 font-semibold px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}