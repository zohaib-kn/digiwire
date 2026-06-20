'use client';

/**
 * ThemeTransitionWrapper — simplified to just a semantic main wrapper.
 * The dark→light transition is handled by:
 *   1. HeroSection having its own dark background
 *   2. A CSS gradient bridge in page.tsx between Hero and SocialProof
 *   3. SocialProof and all other sections having opaque white backgrounds
 */

import { ReactNode } from 'react';

export default function ThemeTransitionWrapper({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}
