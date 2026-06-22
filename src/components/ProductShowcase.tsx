"use client";

import { ArrowRight } from "lucide-react";
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
    { name: "John Doe (USA)", stage: "Visa Pending", bar: 85 },
    { name: "Sarah Smith (UK)", stage: "Applied", bar: 60 },
    { name: "Alex Wong (CA)", stage: "Qualified", bar: 45 },
  ];
  return (
    <div className="rounded-lg p-4" style={{ background: PAPER, border: `1px solid ${HAIRLINE}` }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs md:text-sm font-medium" style={{ color: INK }}>Lead pipeline</span>
        <span className="text-xs" style={{ color: STONE }}>8 active</span>
      </div>
      {leads.map((lead, i) => (
        <div key={lead.name} className="flex items-center gap-2.5 py-2" style={{ borderTop: i === 0 ? "none" : `1px solid ${HAIRLINE}` }}>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs md:text-sm font-medium truncate" style={{ color: INK }}>{lead.name}</span>
              <span className="text-xs shrink-0 ml-2" style={{ color: STONE }}>{lead.stage}</span>
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
  const steps = ["Course enrollment", "Watch lecture", "Submit assignment", "Generate certificate"];
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
      <div className="text-xs md:text-sm font-medium mb-3" style={{ color: INK }}>Course progress tracker</div>
      <div className="space-y-2.5">
        {steps.map((step, i) => {
          const lit = active && i < liveStep;
          return (
            <div key={step} className="flex items-center gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: lit ? MOSS : HAIRLINE, transition: "background 0.4s ease" }}
              />
              <span className="text-xs md:text-sm" style={{ color: lit ? INK : STONE, transition: "color 0.4s ease" }}>
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
        <span className="text-xs md:text-sm font-medium" style={{ color: INK }}>Sales & Bookings · Q2 2026</span>
        <span className="text-xs md:text-sm font-medium" style={{ color: MOSS }}>+18%</span>
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
          <span key={i} className="text-[11px] flex-1 text-center" style={{ color: STONE }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function PortalPreview({ active }: { active: boolean }) {
  const items = [
    { label: "University of Toronto App", status: "Applied", pct: 90 },
    { label: "IELTS Score Card", status: "Verified", pct: 100 },
    { label: "SOP Draft Review", status: "Feedback", pct: 50 },
  ];
  return (
    <div className="rounded-lg p-4" style={{ background: PAPER, border: `1px solid ${HAIRLINE}` }}>
      <div className="text-xs md:text-sm font-medium mb-3" style={{ color: INK }}>Student Portal · Edu-wire</div>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={item.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs md:text-sm" style={{ color: INK }}>{item.label}</span>
              <span className="text-xs" style={{ color: STONE }}>{item.status}</span>
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
    logo: "/Logo/Vyxel%20Logo.png",
    name: "Vyxel CRM",
    tag: "01",
    description:
      "An AI-powered Student Relationship Management (CRM) platform built for study abroad consultancies to manage leads, track applications, and automate enrollment workflows.",
    features: [
      "AI lead scoring & predictive modeling",
      "Unified WhatsApp, Email & SMS inbox",
      "Application pipeline & funnel tracking",
    ],
    Preview: CRMPreview,
    link: "https://vyxel.digi-wire.com/",
  },
  {
    logo: "/Logo/Eidu-wire.png",
    name: "Edu-wire LMS",
    tag: "02",
    description:
      "A comprehensive learning management system (LMS) designed for educational institutions to deliver courses, track student progress, and manage academic curricula.",
    features: [
      "Interactive course player & course progress tracking",
      "Assignments, grading portal & student analytics",
      "Course builder & content library management",
    ],
    Preview: AutomationPreview,
    link: "https://lms.edu-wire.com/",
  },
  {
    logo: "/Logo/DD%20MAIN%20LOGO.png",
    name: "DealDesk CRM",
    tag: "03",
    description:
      "A comprehensive Real Estate CRM and dashboard designed for developers and agencies to manage property inventory, track deal pipelines, and monitor sales performance.",
    features: [
      "Real-time property inventory tracking",
      "Visual deal pipeline & agent assignment",
      "Dynamic sales commissions & analytics",
    ],
    Preview: AnalyticsPreview,
    link: "https://dev.dealdesk.co.in/dashboard",
  },
  {
    logo: "/Logo/Eidu-wire.png",
    name: "Edu-wire CRM",
    tag: "04",
    description:
      "A dedicated student portal and CRM system designed to handle university applications, document verification, and direct counselor communications.",
    features: [
      "Student portal & document checklist",
      "Counselor assignment & direct chat",
      "Application status tracking & alerts",
    ],
    Preview: PortalPreview,
    link: "https://crm.digi-wire.com/login",
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
  const { logo, name, tag, description, features, Preview } = product;

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
          className="icon-box h-8 flex items-center justify-center"
        >
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-full w-auto object-contain max-w-[140px]"
          />
        </div>
        <span className="text-sm tabular-nums" style={{ color: STONE, fontFamily: "ui-monospace, monospace" }}>
          {tag}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-medium mb-2" style={{ color: INK, letterSpacing: "-0.01em" }}>
        {name}
      </h3>
      <p className="text-base leading-relaxed mb-5" style={{ color: STONE }}>
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-baseline gap-2.5 text-[15px]" style={{ color: "#4A4844" }}>
            <span className="w-1 h-1 rounded-full shrink-0 relative top-[-1px]" style={{ background: MOSS }} />
            {f}
          </li>
        ))}
      </ul>

      <div className="mb-6">
        <Preview active={inView} />
      </div>

      <Link
        href={product.link}
        target={product.link.startsWith("http") ? "_blank" : undefined}
        rel={product.link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="product-link inline-flex items-center gap-1.5 text-[15px] font-medium pb-0.5"
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
      className="relative py-20 md:py-28 lg:py-32"
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

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="mb-20 max-w-xl">
          <div className={`fade-up flex items-center gap-2 mb-5 ${headerInView ? "in-view" : ""}`}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: MOSS }} />
            <span className="text-sm tracking-[0.08em] uppercase" style={{ color: STONE }}>
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
            className={`fade-up mt-4 text-base md:text-lg leading-relaxed ${headerInView ? "in-view" : ""}`}
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