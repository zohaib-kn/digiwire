"use client";

import { motion } from "framer-motion";
import TextType from "@/app/ReactBits/TextType";
import {
  Lightbulb,
  BrainCircuit,
  Layers,
  LayoutGrid,
  Target,
} from "lucide-react";

/* ── Palette ──────────────────────────────────────────────────────────── */
const INK = "#1C1C1A";
const STONE = "#8B8783";
const MOSS = "#3D5A40";
const HAIRLINE = "#E8E6E0";
const PAPER = "#FAFAF8";

const differentiators = [
  {
    Icon: Lightbulb,
    title: "Product thinking, not just development",
    description:
      "We design digital products around your actual business goals, user journeys, and growth model.",
  },
  {
    Icon: BrainCircuit,
    title: "AI-first workflows",
    description:
      "Every product has native AI capabilities baked in from day one — not bolted on later.",
  },
  {
    Icon: Layers,
    title: "Scalable architecture",
    description:
      "Built to grow. Our systems handle high volume with the same performance, security, and reliability.",
  },
  {
    Icon: LayoutGrid,
    title: "Clean, intuitive UI/UX",
    description:
      "We prioritize interface clarity, ensuring your team adopts and loves using the systems we build.",
  },
  {
    Icon: Target,
    title: "Business outcome focus",
    description:
      "We measure success by your actual business results — reduced costs, higher close rates, and fewer manual hours.",
  },
];

const platformLayers = [
  { label: "AI Layer", desc: "LLM · Scoring · Predictions · Automation" },
  { label: "Product Suite", desc: "CRM · Workflow · Analytics · Portal" },
  { label: "Integration Layer", desc: "REST APIs · Webhooks · SDKs · OAuth" },
  { label: "Data & Security", desc: "SOC 2 · Encryption · Role-based Access" },
];

const integrations = ["Salesforce", "HubSpot", "Slack", "Stripe", "Zapier", "Notion", "Gmail", "QuickBooks"];

const trustBadges = ["SOC 2 ready", "99.9% uptime", "GDPR compliant"];

/* ── Animation variants ──────────────────────────────────────────────── */

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ── Platform diagram ─────────────────────────────────────────────────── */

function PlatformDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl p-8"
      style={{ background: "#FFFFFF", border: `1px solid ${HAIRLINE}`, boxShadow: "0 32px 64px -32px rgba(28,28,26,0.12)" }}
    >
      {/* Header chip */}
      <div className="flex justify-center mb-9">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: INK, color: PAPER }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: MOSS, opacity: 0.5 }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#A8D5A8" }} />
          </span>
          DigiWire Platform
        </motion.div>
      </div>

      {/* Stacked layers — assemble top to bottom */}
      <div className="space-y-2.5">
        {platformLayers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: -16, scaleX: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl p-4"
            style={{
              background: PAPER,
              border: `1px solid ${HAIRLINE}`,
              marginLeft: `${i * 10}px`,
              marginRight: `${i * 10}px`,
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium" style={{ color: INK }}>{layer.label}</span>
              <span className="text-xs tabular-nums" style={{ color: STONE, fontFamily: "ui-monospace, monospace" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="text-[12.5px] md:text-[13.5px]" style={{ color: STONE }}>{layer.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Connector */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="mt-7 pt-6"
        style={{ borderTop: `1px solid ${HAIRLINE}` }}
      >
        <div className="text-xs md:text-sm tracking-[0.08em] uppercase text-center mb-4" style={{ color: STONE }}>
          Runs on top of your existing stack
        </div>
        <div className="grid grid-cols-4 gap-2">
          {integrations.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 + i * 0.04 }}
              className="text-center py-2 px-1 rounded-lg"
              style={{ border: `1px solid ${HAIRLINE}` }}
            >
              <span className="text-[11px] font-medium" style={{ color: "#4A4844" }}>{tool}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-6 flex items-center justify-center gap-6"
      >
        {trustBadges.map((label) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full" style={{ background: MOSS }} />
            <span className="text-xs md:text-sm" style={{ color: STONE }}>{label}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ── Main component ───────────────────────────────────────────────────── */

export default function WhyDigiWire() {
  return (
    <section className="py-20 md:py-28 lg:py-32" style={{ background: PAPER, fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping { animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: MOSS }} />
              <span className="text-sm tracking-[0.08em] uppercase" style={{ color: STONE }}>
                About
              </span>
            </motion.div>

            <TextType
              as="h2"
              text="About US"
              className="font-medium tracking-tight mb-5"
              style={{ color: INK, fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", lineHeight: 1.18, letterSpacing: "-0.02em" }}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg leading-relaxed mb-10"
              style={{ color: STONE }}
            >
              DigiWire Smart Solutions is a technology-driven digital marketing agency specializing in performance marketing, search engine optimization, branding, website development, and marketing automation. We help businesses leverage data and consumer insights to improve online visibility, capture high-quality leads, and maximize return on marketing investments. By combining strategic planning with creative execution and continuous optimization, we build digital ecosystems that support sustainable growth.
            </motion.p>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-7"
            >
              {differentiators.map((d) => (
                <motion.div key={d.title} variants={itemVariants} className="flex gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ border: `1px solid ${HAIRLINE}` }}
                  >
                    <d.Icon className="w-4 h-4" style={{ color: INK }} strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="text-base md:text-lg font-medium mb-1" style={{ color: INK }}>
                      {d.title}
                    </div>
                    <div className="text-base leading-relaxed" style={{ color: STONE }}>
                      {d.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: platform diagram */}
          <PlatformDiagram />
        </div>
      </div>
    </section>
  );
}