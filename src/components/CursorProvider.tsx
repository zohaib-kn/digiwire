'use client';

import TargetCursor from '@/app/ReactBits/Target-Cursor';

export default function CursorProvider() {
  return (
    <TargetCursor
      targetSelector="button, a, [role='button'], .cursor-target"
      spinDuration={2}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.2}
    />
  );
}
