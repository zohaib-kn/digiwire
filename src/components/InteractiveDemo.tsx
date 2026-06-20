"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Noise from "@/app/ReactBits/Noise";
import TextType from "@/app/ReactBits/TextType";
import StarBorder from "@/app/ReactBits/StarBorder";
import Link from "next/link";

/* ── Palette ──────────────────────────────────────────────────────────── */
const INK = "#1C1C1A";
const STONE = "#8B8783";
const MOSS = "#3D5A40";
const HAIRLINE = "#E8E6E0";
const PAPER = "#FAFAF8";

/* ── Preview: CRM ─────────────────────────────────────────────────────── */

function CRMDemo() {
  const columns = [
    { stage: "Qualified", count: 5, leads: [{ name: "Acme Corp", pct: 45 }, { name: "TechFlow", pct: 45 }, { name: "Nexus", pct: 45 }] },
    { stage: "Proposal", count: 4, leads: [{ name: "Quant Inc", pct: 70 }, { name: "Optima", pct: 70 }] },
    { stage: "Closed", count: 3, leads: [{ name: "Apex Ltd", pct: 100 }, { name: "Pulse Co", pct: 100 }] },
  ];
  const stats = [
    { label: "Total value", value: "$284K" },
    { label: "Avg close", value: "18 days" },
    { label: "Win rate", value: "64%" },
  ];

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium" style={{ color: INK }}>Pipeline overview</span>
        <span className="flex items-center gap-1.5 text-[11px]" style={{ color: MOSS }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: MOSS }} />
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
        {columns.map((col, ci) => (
          <div key={col.stage}>
            <div className="text-[10px] uppercase tracking-wide mb-2.5" style={{ color: STONE }}>
              {col.stage} ({col.count})
            </div>
            <div className="space-y-2">
              {col.leads.map((lead, li) => (
                <div key={lead.name} className="pb-2" style={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                  <div className="text-[11.5px] font-medium mb-1" style={{ color: INK }}>{lead.name}</div>
                  <div className="h-[2px] rounded-full overflow-hidden" style={{ background: HAIRLINE }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: MOSS }}
                      initial={{ width: 0 }}
                      animate={{ width: `${lead.pct}%` }}
                      transition={{ duration: 0.7, delay: 0.15 + ci * 0.1 + li * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 pt-3" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-[15px] font-medium" style={{ color: INK }}>{s.value}</div>
            <div className="text-[10.5px] mt-0.5" style={{ color: STONE }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Preview: Automation ─────────────────────────────────────────────── */

function AutomationDemo() {
  const steps = [
    { icon: "👤", label: "Lead form submitted", time: "09:14" },
    { icon: "🤖", label: "AI scores lead (87/100)", time: "09:14" },
    { icon: "✉", label: "Personalized email sent", time: "09:15" },
    { icon: "📋", label: "Task created in CRM", time: "09:15" },
    { icon: "🔔", label: "Slack notification sent", time: "—" },
  ];

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium" style={{ color: INK }}>Lead onboarding flow</span>
        <span className="text-[11px]" style={{ color: STONE }}>Last run: 2 min ago</span>
      </div>

      <div className="flex-1 space-y-3.5">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[13px] w-5 text-center shrink-0">{step.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-[12.5px] font-medium truncate" style={{ color: INK }}>{step.label}</div>
            </div>
            <span className="text-[10.5px] shrink-0" style={{ color: STONE, fontFamily: "ui-monospace, monospace" }}>
              {step.time}
            </span>
            <motion.span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: i < 3 ? MOSS : HAIRLINE }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.08 * i + 0.2, type: "spring", stiffness: 300, damping: 18 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Preview: Analytics ───────────────────────────────────────────────── */

function AnalyticsDemo() {
  const chartData = [42, 58, 52, 71, 80, 96, 88, 104, 118, 124, 132, 148];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const stats = [
    { label: "MoM growth", value: "+12%" },
    { label: "Avg deal size", value: "$3.1K" },
    { label: "Churn rate", value: "2.4%" },
  ];

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium" style={{ color: INK }}>Annual revenue</span>
        <div className="flex items-baseline gap-2">
          <span className="text-[17px] font-medium" style={{ color: INK }}>$148K</span>
          <span className="text-[11px]" style={{ color: MOSS }}>↑ 252%</span>
        </div>
      </div>

      <div className="flex items-end gap-1.5 h-24">
        {chartData.map((h, i) => (
          <div key={i} className="flex-1 h-full flex items-end">
            <motion.div
              className="w-full rounded-t-sm"
              style={{ background: i >= 9 ? MOSS : HAIRLINE }}
              initial={{ height: 0 }}
              animate={{ height: `${(h / 148) * 100}%` }}
              transition={{ duration: 0.6, delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between -mt-2">
        {months.map((m, i) => (
          <span key={i} className="text-[9px] flex-1 text-center" style={{ color: STONE }}>{m}</span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 pt-3" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-[15px] font-medium" style={{ color: INK }}>{s.value}</div>
            <div className="text-[10.5px] mt-0.5" style={{ color: STONE }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Preview: Client Portal ──────────────────────────────────────────── */

function PortalDemo() {
  const projects = [
    { name: "Website redesign", progress: 72, status: "In progress" },
    { name: "Mobile app v2", progress: 45, status: "In review" },
    { name: "Brand identity", progress: 100, status: "Completed" },
  ];

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[13px] font-medium" style={{ color: INK }}>Client · Apex Financial</span>
          <div className="text-[11px] mt-0.5" style={{ color: STONE }}>3 active projects</div>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {projects.map((p, i) => (
          <div key={p.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[12.5px] font-medium" style={{ color: INK }}>{p.name}</span>
              <span className="text-[10.5px]" style={{ color: STONE }}>{p.status}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-[3px] rounded-full overflow-hidden" style={{ background: HAIRLINE }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: MOSS }}
                  initial={{ width: 0 }}
                  animate={{ width: `${p.progress}%` }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="text-[11px] font-medium shrink-0" style={{ color: STONE }}>{p.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 pt-3" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
        <div>
          <div className="text-[15px] font-medium" style={{ color: INK }}>$18,400</div>
          <div className="text-[10.5px] mt-0.5" style={{ color: STONE }}>Invoiced · Q2</div>
        </div>
        <div>
          <div className="text-[15px] font-medium" style={{ color: MOSS }}>$16,200</div>
          <div className="text-[10.5px] mt-0.5" style={{ color: STONE }}>Paid · Q2</div>
        </div>
      </div>
    </div>
  );
}

/* ── Tab data ─────────────────────────────────────────────────────────── */

const tabs = [
  {
    id: "crm",
    label: "CRM",
    heading: "Close more deals with AI-driven CRM",
    description:
      "Our CRM platform automatically scores leads, suggests next actions, and keeps your pipeline moving — so your team spends more time selling and less time managing.",
    features: [
      "Smart lead scoring updates in real time",
      "AI drafts emails tailored to each prospect",
      "Deal forecasting with 90%+ accuracy",
    ],
    Preview: CRMDemo,
  },
  {
    id: "automation",
    label: "Automation",
    heading: "Automate repetitive work end-to-end",
    description:
      "Build powerful multi-step workflows with our visual builder. Trigger automations from any event — form fills, CRM updates, emails, or webhooks — with zero code.",
    features: [
      "Drag-and-drop visual workflow editor",
      "Conditional branching & parallel paths",
      "Full audit log with replay on failure",
    ],
    Preview: AutomationDemo,
  },
  {
    id: "analytics",
    label: "Analytics",
    heading: "Turn data into decisions instantly",
    description:
      "Real-time dashboards surface the KPIs that matter most to your business. Stop waiting on weekly exports — understand performance as it happens.",
    features: [
      "Custom dashboard builder with 50+ widgets",
      "Automated scheduled reports to stakeholders",
      "AI-powered anomaly detection & alerts",
    ],
    Preview: AnalyticsDemo,
  },
  {
    id: "portal",
    label: "Client Portal",
    heading: "Give clients a world-class experience",
    description:
      "A fully branded portal where your clients can track projects, approve deliverables, pay invoices, and communicate — all without needing to email back and forth.",
    features: [
      "Custom domain & full white-label branding",
      "Project timelines with milestone tracking",
      "One-click invoice approval & payment",
    ],
    Preview: PortalDemo,
  },
];

/* ── Animation variants ──────────────────────────────────────────────── */

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ── Main component ───────────────────────────────────────────────────── */

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];
  const Preview = tab.Preview;

  return (
    <section className="relative overflow-hidden py-28" style={{ background: PAPER, fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');`}</style>

      {/* Noise background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Noise
          patternSize={250}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
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
              Interactive demo
            </span>
          </div>
          <TextType
            as="h2"
            text="See DigiWire products in action"
            className="font-medium tracking-tight"
            style={{ color: INK, fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: STONE }}>
            Explore each product with a live preview — no sign-up needed.
          </p>
        </motion.div>

        {/* Tab bar — sliding indicator via layoutId */}
        <div className="flex mb-14 overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center gap-1 relative">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className="relative px-4 py-2 text-[13.5px] font-medium rounded-full shrink-0 transition-colors"
                style={{ color: activeTab === i ? PAPER : STONE }}
              >
                {activeTab === i && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: INK }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy, cross-fades with tab */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="font-medium tracking-tight"
                style={{ color: INK, fontSize: "1.7rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}
              >
                {tab.heading}
              </motion.h3>
              <motion.p variants={itemVariants} className="text-[15px] leading-relaxed" style={{ color: STONE }}>
                {tab.description}
              </motion.p>
              <motion.ul variants={itemVariants} className="space-y-3">
                {tab.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] mt-0.5 shrink-0" style={{ color: MOSS }} strokeWidth={1.8} />
                    <span className="text-[14px]" style={{ color: "#3A3835" }}>{f}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
                <StarBorder
                  as={Link}
                  href="/contact"
                  color="magenta"
                  speed="5s"
                >
                  Book a demo
                </StarBorder>
                <StarBorder
                  as={Link}
                  href="/contact"
                  color="magenta"
                  speed="5s"
                >
                  Learn more
                </StarBorder>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right: live preview pane */}
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${HAIRLINE}`, boxShadow: "0 24px 48px -24px rgba(28,28,26,0.08)" }}>
            <div className="flex items-center gap-1.5 px-4 h-10" style={{ borderBottom: `1px solid ${HAIRLINE}` }}>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: HAIRLINE }} />
                <div className="w-2 h-2 rounded-full" style={{ background: HAIRLINE }} />
                <div className="w-2 h-2 rounded-full" style={{ background: HAIRLINE }} />
              </div>
              <div className="mx-auto flex items-center gap-1.5 rounded-full px-3 h-5" style={{ background: PAPER, border: `1px solid ${HAIRLINE}` }}>
                <span className="w-1 h-1 rounded-full" style={{ background: MOSS }} />
                <span className="text-[9.5px]" style={{ color: STONE, fontFamily: "ui-monospace, monospace" }}>
                  app.digiwire.io/{tab.id}
                </span>
              </div>
            </div>
            <div className="p-6 min-h-[380px]" style={{ background: PAPER }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <Preview />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}