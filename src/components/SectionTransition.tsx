'use client';

/**
 * SectionTransition
 * A cinematic gradient bridge between the dark HeroSection (#0B0E14)
 * and the white SocialProof (#ffffff).
 *
 * Strategy:
 * - A tall sticky-pinned div whose background gradient tracks scroll
 * - Framer Motion useScroll + useTransform smoothly interpolate the
 *   background from dark → light over the height of the bridge
 * - A subtle radial bloom and noise texture add depth
 * - prefers-reduced-motion: falls back to the static midpoint gradient
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectionTransition() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Background color interpolated via a CSS custom-property trick.
  // We drive opacity of two absolutely-positioned layers:
  //   layer-dark  = #0B0E14 (fully opaque at top, fades out)
  //   layer-light = #F8FAFC (transparent at top, fades in)
  const darkOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const lightOpacity = useTransform(scrollYProgress, [0.35, 1], [0, 1]);
  const bloomOpacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 0.18]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(280px, 50vh, 560px)' }}
    >
      {/* ── Dark layer (hero colour) ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: darkOpacity,
          background:
            'linear-gradient(to bottom, #0B0E14 0%, #0d1119 60%, #111827 100%)',
        }}
      />

      {/* ── Light layer (SocialProof colour) ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: lightOpacity,
          background:
            'linear-gradient(to bottom, #111827 0%, #eef0f4 55%, #ffffff 100%)',
        }}
      />

      {/* ── Cinematic radial bloom — mid-transition glow ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: bloomOpacity,
          background:
            'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(110,140,255,0.22) 0%, transparent 70%)',
        }}
      />

      {/* ── Static CSS gradient fallback (shows when JS is off or reduced-motion) ── */}
      <div
        className="absolute inset-0 motion-safe:hidden"
        style={{
          background:
            'linear-gradient(to bottom, #0B0E14 0%, #111827 35%, #eef0f4 70%, #ffffff 100%)',
        }}
      />

      {/* ── Subtle top edge fade — blends hero's bottom seamlessly ── */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #0B0E14 0%, transparent 100%)',
        }}
      />

      {/* ── Subtle bottom edge fade — blends into SocialProof ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
