"use client";

import { motion } from "framer-motion";
import TextType from "@/app/ReactBits/TextType";
import {
  Activity,
  GraduationCap,
  Landmark,
  Building2,
  ShoppingBag,
  Truck,
} from "lucide-react";

/* ── Palette ──────────────────────────────────────────────────────────── */
const INK = "#1C1C1A";
const STONE = "#8B8783";
const MOSS = "#3D5A40";
const HAIRLINE = "#E8E6E0";
const PAPER = "#FAFAF8";

const industries = [
  {
    Icon: Activity,
    name: "Healthcare",
    description:
      "Patient management, appointment automation, and secure data dashboards for clinics, hospitals, and health-tech companies.",
  },
  {
    Icon: GraduationCap,
    name: "Education",
    description:
      "Student CRM, learning portals, enrollment automation, and analytics for EdTech platforms and institutions.",
  },
  {
    Icon: Landmark,
    name: "Finance",
    description:
      "Client onboarding workflows, KYC automation, deal pipelines, and compliance-ready reporting for financial services.",
  },
  {
    Icon: Building2,
    name: "Real Estate",
    description:
      "Lead tracking, property pipelines, document portals, and commission dashboards for agencies and brokerages.",
  },
  {
    Icon: ShoppingBag,
    name: "E-commerce",
    description:
      "Order management, customer segmentation, returns automation, and revenue analytics for online retailers.",
  },
  {
    Icon: Truck,
    name: "Logistics",
    description:
      "Shipment tracking dashboards, driver portals, route automation, and operational KPIs for logistics companies.",
  },
];

/* ── Animation variants ──────────────────────────────────────────────── */

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

function IndustryCard({ ind }: { ind: typeof industries[number] }) {
  const { Icon, name, description } = ind;
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group relative p-7 cursor-default"
      style={{ borderTop: `1px solid ${HAIRLINE}` }}
    >
      <motion.div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
        style={{ border: `1px solid ${HAIRLINE}` }}
        variants={{ hover: { borderColor: MOSS, y: -2 } }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <Icon className="w-[18px] h-[18px]" style={{ color: INK }} strokeWidth={1.6} />
      </motion.div>

      <h3 className="text-[1.05rem] font-medium mb-1.5" style={{ color: INK, letterSpacing: "-0.01em" }}>
        {name}
      </h3>

      <motion.div
        className="h-px mb-3"
        style={{ background: MOSS, originX: 0 }}
        variants={{ hidden: { scaleX: 0 }, hover: { scaleX: 1 } }}
        initial="hidden"
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      <p className="text-[13.5px] leading-relaxed" style={{ color: STONE }}>
        {description}
      </p>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-28"
      style={{ background: PAPER, fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: MOSS }} />
            <span className="text-[12px] tracking-[0.08em] uppercase" style={{ color: STONE }}>
              Industries
            </span>
          </div>
          <TextType
            as="h2"
            text="Built for modern industries"
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
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: STONE }}>
            DigiWire products are adapted for the specific workflows,
            compliance needs, and data models of each industry.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ borderLeft: `1px solid ${HAIRLINE}` }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {industries.map((ind) => (
            <div key={ind.name} style={{ borderRight: `1px solid ${HAIRLINE}`, borderBottom: `1px solid ${HAIRLINE}` }}>
              <IndustryCard ind={ind} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}