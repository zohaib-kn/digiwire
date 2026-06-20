'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import LogoLoop from '@/app/ReactBits/Logo-Loop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiVercel,
  SiGraphql,
} from 'react-icons/si';

const metrics = [
  { value: 42, suffix: '+', label: 'Projects Delivered' },
  { value: 20, suffix: '+', label: 'Workflows Automated' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Years Combined Experience' },
];

const techLogos = [
  { node: <SiReact />,       title: 'React',          href: 'https://react.dev' },
  { node: <SiNextdotjs />,   title: 'Next.js',         href: 'https://nextjs.org' },
  { node: <SiTypescript />,  title: 'TypeScript',      href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS',    href: 'https://tailwindcss.com' },
  { node: <SiNodedotjs />,   title: 'Node.js',         href: 'https://nodejs.org' },
  { node: <SiFigma />,       title: 'Figma',           href: 'https://figma.com' },
  { node: <SiVercel />,      title: 'Vercel',          href: 'https://vercel.com' },
  { node: <SiGraphql />,     title: 'GraphQL',         href: 'https://graphql.org' },
];

function CountUpValue({
  value,
  suffix,
  inView,
  delay = 0,
}: {
  value: number;
  suffix: string;
  inView: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const duration = 1400;
    const startDelay = delay;
    let startTime: number | null = null;
    let frame: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime - startDelay;

      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, delay]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="bg-white border-b border-slate-200/60"
    >
      {/* Metrics row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x md:divide-slate-100">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-6 group"
            >
              <div className="text-4xl sm:text-[2.75rem] font-bold text-slate-900 tabular-nums tracking-tight leading-none">
                <CountUpValue
                  value={m.value}
                  suffix={m.suffix}
                  inView={inView}
                  delay={i * 100}
                />
              </div>
              <motion.span
                initial={{ width: 0 }}
                animate={inView ? { width: 28 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="h-[2.5px] bg-indigo-500/70 rounded-full mt-3 mb-2.5"
              />
              <div className="text-sm text-slate-600">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logo wall – animated marquee */}
      <div className="border-t border-slate-100 bg-slate-50/60">
        <div className="py-8">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-7">
            Technologies we work with
          </p>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={42}
              gap={56}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#f8fafc"
              ariaLabel="Technologies we work with"
            />
          </div>
        </div>
      </div>
    </section>
  );
}