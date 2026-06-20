"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import TextType from "@/app/ReactBits/TextType";
import StarBorder from "@/app/ReactBits/StarBorder";
import Link from "next/link";

/* ── Palette — consistent with WhyDigiWire dark variant ─────────────────── */
const VOID = "#0A0C0A";
const PAPER = "#F5F3EC";
const ASH = "#6B6F68";
const MOSS = "#5FBF6E";
const HAIRLINE = "rgba(245,243,236,0.1)";

const reassurance = ["No commitment required", "14-day free trial", "Respond within 24 hours"];

/* ── Animation variants ──────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 lg:py-36 overflow-hidden"
      style={{ background: VOID, fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes orbitPulse {
          0% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.35); opacity: 0.15; }
          100% { transform: scale(1); opacity: 0.55; }
        }
        .orbit-ring { animation: orbitPulse 3.2s ease-in-out infinite; }
        .orbit-ring-delay { animation: orbitPulse 3.2s ease-in-out infinite 1.1s; }
      `}</style>

      {/* Ambient breathing glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(95,191,110,0.14), transparent)" }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #F5F3EC 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <motion.div
        className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-9"
          style={{ background: "rgba(245,243,236,0.05)", border: `1px solid ${HAIRLINE}` }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: MOSS, opacity: 0.5 }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: MOSS }} />
          </span>
          <span className="text-sm md:text-base font-medium" style={{ color: ASH }}>
            Book a free 30-minute strategy call
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants}>
          <TextType
            as="h2"
            text={["Ready to build smarter?", "Let's talk."]}
            textColors={[PAPER, MOSS]}
            className="font-semibold tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-11"
          style={{ color: ASH }}
        >
          Tell us about your business. We'll map out a custom software
          strategy and show you exactly how DigiWire can solve your biggest
          operational challenge.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary — the focal point */}
          <StarBorder
            as={Link}
            href="/contact"
            color="magenta"
            speed="5s"
            className="group"
          >
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </StarBorder>
          <StarBorder
            as="a"
            href="#products"
            color="magenta"
            speed="5s"
          >
            Explore Products
          </StarBorder>
        </motion.div>

        {/* Reassurance */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {reassurance.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm md:text-base" style={{ color: ASH }}>
              <span className="w-1 h-1 rounded-full" style={{ background: ASH }} />
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}