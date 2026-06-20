'use client'

import LineWaves from "@/app/ReactBits/Line-Waves";
import { ArrowRight, Sparkles, TrendingUp, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        @keyframes gridDrift {
          from { background-position: 0 0; }
          to { background-position: 56px 56px; }
        }
        .grid-bg-light {
          background-image:
            linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          animation: gridDrift 30s linear infinite;
        }
      `}</style>

      {/* Background visual layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft grid background */}
        <div className="grid-bg-light absolute inset-0 opacity-70" />

        {/* Ambient WebGL LineWaves background animation */}
        <div className="absolute inset-0 opacity-[0.32] h-full w-full overflow-hidden">
          <LineWaves
            speed={0.25}
            innerLineCount={28}
            outerLineCount={32}
            warpIntensity={0.8}
            rotation={-30}
            edgeFadeWidth={0.1}
            colorCycleSpeed={0.8}
            brightness={0.85}
            color1="#F97316" // Orange
            color2="#EC4899" // Pink
            color3="#06B6D4" // Cyan
            enableMouseInteraction={false}
          />
        </div>

        {/* Soft radial gradients for premium depth */}
        {/* Cyan glow top right */}
        <div
          className="absolute -top-40 right-[-10%] w-[65vw] h-[65vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)" }}
        />
        {/* Indigo glow center left */}
        <div
          className="absolute top-[20%] left-[-15%] w-[60vw] h-[60vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.09), transparent 70%)" }}
        />
        {/* Warm pink/orange glow bottom right */}
        <div
          className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06), transparent 70%)" }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
      

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-[#0F172A] text-[42px] sm:text-[60px] lg:text-[76px] xl:text-[88px] leading-[0.92] tracking-[-0.04em] font-extrabold"
          >
            Transforming Businesses
            <br />
            Through <span className="bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">Smart Digital Marketing</span>.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Grow your business with strategic marketing, creative branding, and premium web development. We build high-performing digital solutions that generate quality leads and drive measurable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-bold text-white bg-[#0F172A] hover:bg-[#06B6D4] shadow-[0_10px_25px_rgba(15,23,42,0.12)] hover:shadow-[0_10px_25px_rgba(6,182,212,0.22)] hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base flex items-center gap-2 group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#solutions"
              className="px-8 py-4 rounded-full font-bold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-slate-400 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base shadow-sm"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Subtle Trust Line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-[0.15em] uppercase pt-2 select-none"
          >
            SEO • Social Media • Websites • Branding • Performance Marketing
          </motion.div>
        </div>

        {/* Right Column: Visual Stage (Floating Cards) */}
        <div className="col-span-1 lg:col-span-5 relative w-full h-[460px] hidden lg:flex items-center justify-center">
          
          {/* Card 1: SEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [-8, 8, -8] 
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              scale: { duration: 0.6, delay: 0.4 },
              y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-[5%] left-[5%] w-60 bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-3.5 select-none hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">SEO Traffic</div>
              <div className="text-[15px] font-extrabold text-slate-900 mt-0.5">+148% YoY</div>
            </div>
          </motion.div>

          {/* Card 2: Social Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [8, -8, 8] 
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              scale: { duration: 0.6, delay: 0.5 },
              y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-[28%] right-[5%] w-60 bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-3.5 select-none hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-pink-600" />
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Social Media</div>
              <div className="text-[15px] font-extrabold text-slate-900 mt-0.5">8.4% Engagement</div>
            </div>
          </motion.div>

          {/* Card 3: Websites */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [-6, 6, -6] 
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 },
              scale: { duration: 0.6, delay: 0.6 },
              y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-[26%] left-[8%] w-60 bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-3.5 select-none hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Websites</div>
              <div className="text-[15px] font-extrabold text-slate-900 mt-0.5">99 PageSpeed</div>
            </div>
          </motion.div>

          {/* Card 4: Performance Ads */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [6, -6, 6] 
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.7 },
              scale: { duration: 0.6, delay: 0.7 },
              y: { duration: 6.8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-[6%] right-[8%] w-60 bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center gap-3.5 select-none hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Performance Ads</div>
              <div className="text-[15px] font-extrabold text-slate-900 mt-0.5">4.8x ROAS</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}