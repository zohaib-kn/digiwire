"use client";

import { Users, Zap, BarChart3, LayoutDashboard, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TextType from "@/app/ReactBits/TextType";
import Link from "next/link";

/* ── Scroll-reveal hook ───────────────────────────────────────────────── */

function useInView(threshold = 0.2): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── Palette ──────────────────────────────────────────────────────────── */
const INK = "#1C1C1A";
const STONE = "#8B8783";
const MOSS = "#3D5A40";
const HAIRLINE = "#E8E6E0";
const PAPER = "#FAFAF8";

/* ── Mini product UI previews — quiet, single animated detail each ─────── */

function CRMPreview({ active }: { active: boolean }) {
  const leads = [
    { name: "Acme Corp", stage: "Proposal", bar: 80 },
    { name: "TechFlow", stage: "Qualified", bar: 55 },
    { name: "Nexus Inc", stage: "Meeting", bar: 40 },
  ];
  return (
    <div className="rounded-lg p-4" style={{ background: PAPER, border: `1px solid ${HAIRLINE}` }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium" style={{ color: INK }}>Lead pipeline</span>
        <span className="text-[10px]" style={{ color: STONE }}>8 active</span>
      </div>
      {leads.map((lead, i) => (
        <div key={lead.name} className="flex items-center gap-2.5 py-2" style={{ borderTop: i === 0 ? "none" : `1px solid ${HAIRLINE}` }}>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-medium truncate" style={{ color: INK }}>{lead.name}</span>
              <span className="text-[10px] shrink-0 ml-2" style={{ color: STONE }}>{lead.stage}</span>
            </div>
            <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ background: HAIRLINE }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: active ? `${lead.bar}%` : "0%",
                  background: MOSS,
                  transition: `width 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.12}s`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AutomationPreview({ active }: { active: boolean }) {
  const steps = ["New lead", "AI score", "Send email", "Notify CRM"];
  const [liveStep, setLiveStep] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setLiveStep((s) => (s < steps.length ? s + 1 : s));
    }, 550);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="rounded-lg p-4" style={{ background: PAPER, border: `1px solid ${HAIRLINE}` }}>
      <div className="text-[11px] font-medium mb-3" style={{ color: INK }}>Lead onboarding flow</div>
      <div className="space-y-2.5">
        {steps.map((step, i) => {
          const lit = active && i < liveStep;
          return (
            <div key={step} className="flex items-center gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: lit ? MOSS : HAIRLINE, transition: "background 0.4s ease" }}
              />
              <span className="text-[11px]" style={{ color: lit ? INK : STONE, transition: "color 0.4s ease" }}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnalyticsPreview({ active }: { active: boolean }) {
  const bars = [40, 55, 48, 70, 78, 95];
  return (
    <div className="rounded-lg p-4" style={{ background: PAPER, border: `1px solid ${HAIRLINE}` }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium" style={{ color: INK }}>Revenue · Q2 2026</span>
        <span className="text-[10px] font-medium" style={{ color: MOSS }}>+18%</span>
      </div>
      <div className="flex items-end gap-1.5 h-12 mb-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: active ? `${h}%` : "0%",
              background: i === bars.length - 1 ? MOSS : HAIRLINE,
              transition: `height 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.07}s`,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between">
        {["J", "F", "M", "A", "M", "J"].map((m, i) => (
          <span key={i} className="text-[9px] flex-1 text-center" style={{ color: STONE }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function PortalPreview({ active }: { active: boolean }) {
  const items = [
    { label: "Website redesign", status: "In progress", pct: 72 },
    { label: "Invoice #103", status: "Paid", pct: 100 },
    { label: "Brand kit", status: "Review", pct: 50 },
  ];
  return (
    <div className="rounded-lg p-4" style={{ background: PAPER, border: `1px solid ${HAIRLINE}` }}>
      <div className="text-[11px] font-medium mb-3" style={{ color: INK }}>Client · Apex Ltd</div>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={item.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px]" style={{ color: INK }}>{item.label}</span>
              <span className="text-[10px]" style={{ color: STONE }}>{item.status}</span>
            </div>
            <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ background: HAIRLINE }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: active ? `${item.pct}%` : "0%",
                  background: MOSS,
                  transition: `width 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.12}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Product data ─────────────────────────────────────────────────────── */

const products = [
  {
    Icon: Users,
    name: "AI CRM Platform",
    tag: "01",
    description:
      "A fully AI-driven CRM that helps sales teams manage leads, track deals, and close faster with intelligent automation and real-time pipeline visibility.",
    features: [
      "Automated lead scoring & routing",
      "AI email drafting & follow-ups",
      "Pipeline analytics & forecasting",
    ],
    Preview: CRMPreview,
  },
  {
    Icon: Zap,
    name: "Workflow Automation Suite",
    tag: "02",
    description:
      "Connect any app, build multi-step automations, and eliminate repetitive manual tasks from your operations without writing a single line of code.",
    features: [
      "No-code visual workflow builder",
      "100+ app integrations",
      "Real-time trigger monitoring",
    ],
    Preview: AutomationPreview,
  },
  {
    Icon: BarChart3,
    name: "Business Analytics Dashboard",
    tag: "03",
    description:
      "Transform raw business data into clear, actionable dashboards with real-time reporting and AI-powered insights to inform every decision.",
    features: [
      "Live data visualization",
      "Custom KPI dashboards",
      "Automated weekly reports",
    ],
    Preview: AnalyticsPreview,
  },
  {
    Icon: LayoutDashboard,
    name: "Client Portal System",
    tag: "04",
    description:
      "Give your clients a branded self-service portal for project status, files, invoices, and direct communication — all in one place.",
    features: [
      "White-label branding",
      "File & document management",
      "Integrated invoicing & billing",
    ],
    Preview: PortalPreview,
  },
];

/* ── Product card ─────────────────────────────────────────────────────── */

function ProductCard({
  product,
  index,
}: {
  product: typeof products[number];
  index: number;
}) {
  const [ref, inView] = useInView(0.15);
  const { Icon, name, tag, description, features, Preview } = product;

  return (
    <div
      ref={ref}
      className="product-card group relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
      }}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="icon-box w-10 h-10 rounded-full flex items-center justify-center"
          style={{ border: `1px solid ${HAIRLINE}` }}
        >
          <Icon className="w-[18px] h-[18px]" style={{ color: INK }} strokeWidth={1.6} />
        </div>
        <span className="text-[12px] tabular-nums" style={{ color: STONE, fontFamily: "ui-monospace, monospace" }}>
          {tag}
        </span>
      </div>

      <h3 className="text-[1.15rem] font-medium mb-2" style={{ color: INK, letterSpacing: "-0.01em" }}>
        {name}
      </h3>
      <p className="text-[14px] leading-relaxed mb-5" style={{ color: STONE }}>
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-baseline gap-2.5 text-[13.5px]" style={{ color: "#4A4844" }}>
            <span className="w-1 h-1 rounded-full shrink-0 relative top-[-1px]" style={{ background: MOSS }} />
            {f}
          </li>
        ))}
      </ul>

      <div className="mb-6">
        <Preview active={inView} />
      </div>

      <Link
        href="/contact"
        className="product-link inline-flex items-center gap-1.5 text-[13.5px] font-medium pb-0.5"
        style={{ color: INK, borderBottom: "1px solid transparent" }}
      >
        View product
        <ArrowRight className="w-3.5 h-3.5 link-arrow" />
      </Link>
    </div>
  );
}

/* ── Component ────────────────────────────────────────────────────────── */

export default function ProductShowcase() {
  const [headerRef, headerInView] = useInView(0.3);

  return (
    <section
      id="products"
      className="relative py-28"
      style={{ background: PAPER, fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

        .fade-up {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-up.in-view { opacity: 1; transform: translateY(0); }

        .icon-box { transition: border-color 0.25s ease, transform 0.25s ease; }
        .product-card:hover .icon-box {
          border-color: ${MOSS};
          transform: translateY(-1px);
        }
        .product-link { transition: border-color 0.25s ease, gap 0.25s ease; }
        .product-card:hover .product-link { border-color: ${INK}; }
        .link-arrow { transition: transform 0.25s ease; }
        .product-card:hover .link-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .product-card, .icon-box, .link-arrow {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="mb-20 max-w-xl">
          <div className={`fade-up flex items-center gap-2 mb-5 ${headerInView ? "in-view" : ""}`}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: MOSS }} />
            <span className="text-[12px] tracking-[0.08em] uppercase" style={{ color: STONE }}>
              The suite
            </span>
          </div>
          <TextType
            as="h2"
            text="Four systems, wired together."
            className={`fade-up font-medium tracking-tight ${headerInView ? "in-view" : ""}`}
            style={{
              color: INK,
              fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              transitionDelay: "0.08s",
            }}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
          <p
            className={`fade-up mt-4 text-[15px] leading-relaxed ${headerInView ? "in-view" : ""}`}
            style={{ color: STONE, transitionDelay: "0.14s" }}
          >
            Every product in the DigiWire suite solves a real operational
            problem — and every one runs on the same live data underneath.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}