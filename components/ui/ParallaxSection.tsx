"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type ParallaxSectionProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function ParallaxSection({
  children,
  speed = 0.3,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewCenter = windowH / 2;
            const delta = (elementCenter - viewCenter) * speed;
            setOffset(delta);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
