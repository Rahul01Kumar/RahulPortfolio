'use client';

import MouseMoveEffect from "@/components/mouse-move-effect";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MouseMoveEffect />
      {children}
    </>
  );
}