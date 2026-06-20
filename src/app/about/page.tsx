'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Target, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Users
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

const teamMembers = [
  {
    name: "Zohaib",
    role: "Front-end Developer",
    gradient: "from-cyan-400 via-sky-400 to-blue-500"
  },
  {
    name: "Creative Lead",
    role: "Design Strategy",
    gradient: "from-purple-400 via-pink-400 to-indigo-500"
  },
  {
    name: "Project Lead",
    role: "Product Delivery",
    gradient: "from-emerald-400 via-teal-400 to-cyan-500"
  },
  {
    name: "Automation Expert",
    role: "AI Workflows",
    gradient: "from-amber-400 via-orange-400 to-rose-500"
  },
  {
    name: "Marketing Lead",
    role: "Growth Strategy",
    gradient: "from-indigo-400 via-blue-400 to-purple-500"
  }
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

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const animY = shouldReduceMotion ? 0 : 20;

  const fadeUp = {
    hidden: { opacity: 0, y: animY },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Staggered Y offsets on desktop (index % 5)
  const getDesktopTranslate = (index: number) => {
    switch (index) {
      case 0: return "lg:translate-y-8";
      case 1: return "lg:-translate-y-4";
      case 2: return "lg:translate-y-12";
      case 3: return "lg:translate-y-0";
      case 4: return "lg:translate-y-16";
      default: return "";
    }
  };

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
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            About DigiWire
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={fadeUp} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08] mb-8"
          >
            We build digital systems <br className="hidden sm:inline" />
            that help <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">businesses grow</span>.
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={fadeUp} 
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
            variants={fadeUp}
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
                variants={fadeUp} 
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
                variants={fadeUp}
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

      {/* ── 4. Team / People Visual Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E2E8F0]">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
            The Minds Behind DigiWire
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl">
            Our multi-disciplinary team merges design strategy, growth analytics, and AI workflow integration.
          </p>
        </div>

        {/* Collage Container with Soft Blue/Gray Background */}
        <div className="bg-gradient-to-b from-[#EFF6FF]/60 to-[#F1F5F9]/60 border border-slate-200/80 rounded-[32px] p-6 sm:p-10 lg:p-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pb-10 lg:pb-16"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className={`relative w-full h-[320px] md:h-[380px] lg:h-[420px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/60 flex flex-col justify-end p-5 group ${getDesktopTranslate(i)}`}
              >
                {/* Visual support gradient placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Sleek mesh grid overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: "radial-gradient(circle, #000 1.2px, transparent 1.2px)", backgroundSize: "20px 20px" }}
                />

                {/* Ambient glow in center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${member.gradient} blur-xl`} />
                </div>

                {/* User avatar icon in absolute top-right */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 border border-slate-100/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Users className="w-4 h-4 text-slate-500" />
                </div>

                {/* Humaan-inspired floating custom capsule label */}
                <div className="relative z-10 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full p-1 shadow-md border border-slate-100/80 max-w-[95%]">
                  <div className="bg-[#0F172A] text-white font-bold text-[11px] sm:text-xs px-2.5 py-1 rounded-full truncate shrink-0">
                    {member.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#475569] pr-3 truncate">
                    {member.role}
                  </div>
                </div>
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
              variants={fadeUp}
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
              variants={fadeUp} 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
            >
              Let’s build something meaningful.
            </motion.h2>

            <motion.p 
              variants={fadeUp} 
              className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed"
            >
              Have a complex system to build or a workflow to automate? Let’s design a digital platform engineered around your growth goals.
            </motion.p>

            <motion.div 
              variants={fadeUp} 
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
