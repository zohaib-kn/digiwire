"use client";

import { motion } from "framer-motion";
import TextType from "@/app/ReactBits/TextType";
import {
  TrendingUp,
  Users,
  Target,
  Settings2,
  BarChart2,
  Bot,
} from "lucide-react";

/* ── Palette ──────────────────────────────────────────────────────────── */
const INK = "#1C1C1A";
const STONE = "#8B8783";
const MOSS = "#3D5A40";
const HAIRLINE = "#E8E6E0";
const PAPER = "#FAFAF8";

const solutions = [
  {
    Icon: TrendingUp,
    name: "Sales Automation",
    description:
      "Automate your entire sales cycle — from lead capture to follow-up to closed deal — so your team focuses on conversations, not admin.",
  },
  {
    Icon: Users,
    name: "Customer Management",
    description:
      "A single source of truth for every customer interaction, contact record, and relationship history across your entire organization.",
  },
  {
    Icon: Target,
    name: "Lead Tracking",
    description:
      "Never lose a lead again. Track every prospect through your funnel with real-time scoring, status updates, and AI-suggested actions.",
  },
  {
    Icon: Settings2,
    name: "Internal Operations",
    description:
      "Streamline internal workflows, approvals, onboarding, and task management with automated processes that scale as your team grows.",
  },
  {
    Icon: BarChart2,
    name: "Reporting & Analytics",
    description:
      "Build beautiful real-time reports for any business metric. Share dashboards with your team or clients with one click.",
  },
  {
    Icon: Bot,
    name: "AI Assistants",
    description:
      "Embed intelligent AI assistants into your CRM, portal, or internal tools — for drafting, summarizing, routing, and decision support.",
  },
];

/* ── Animation variants ──────────────────────────────────────────────── */

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

function SolutionRow({ s, index }: { s: typeof solutions[number]; index: number }) {
  const { Icon, name, description } = s;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={rowVariants}
      whileHover="hover"
      className="group relative grid grid-cols-[auto_1fr] sm:grid-cols-[2.5rem_auto_1fr] items-start gap-x-4 sm:gap-x-5 py-8 md:py-10 cursor-default"
      style={{ borderTop: `1px solid ${HAIRLINE}` }}
    >
      {/* Index number */}
      <motion.span
        className="hidden sm:block text-sm md:text-base tabular-nums pt-0.5"
        style={{ color: STONE, fontFamily: "ui-monospace, monospace" }}
        variants={{ hover: { color: MOSS } }}
        transition={{ duration: 0.25 }}
      >
        {num}
      </motion.span>

      {/* Icon */}
      <motion.div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ border: `1px solid ${HAIRLINE}` }}
        variants={{ hover: { borderColor: MOSS, x: 2 } }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <Icon className="w-[18px] h-[18px]" style={{ color: INK }} strokeWidth={1.6} />
      </motion.div>

      {/* Text */}
      <div className="relative pl-4 sm:pl-5">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: MOSS, originY: 0 }}
          variants={{ hidden: { scaleY: 0 }, hover: { scaleY: 1 } }}
          initial="hidden"
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
        <h3 className="text-lg md:text-xl font-medium mb-1.5" style={{ color: INK, letterSpacing: "-0.01em" }}>
          {name}
        </h3>
        <p className="text-base leading-relaxed max-w-lg" style={{ color: STONE }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="pt-20 md:pt-28 lg:pt-32 pb-10 md:pb-14 lg:pb-16"
      style={{ background: PAPER, fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: MOSS }} />
            <span className="text-sm tracking-[0.08em] uppercase" style={{ color: STONE }}>
              Solutions
            </span>
          </div>
          <TextType
            as="h2"
            text="Built for teams that want to move faster"
            className="font-medium tracking-tight"
            style={{
              color: INK,
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
          <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: STONE }}>
            Whether you're running a sales team or managing internal
            operations, DigiWire has a solution designed around your workflow.
          </p>
        </motion.div>

        {/* List */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ borderBottom: `1px solid ${HAIRLINE}` }}
        >
          {solutions.map((s, i) => (
            <SolutionRow key={s.name} s={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}