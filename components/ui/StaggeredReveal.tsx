"use client";

import { useEffect, useRef, useState, ReactNode, Children } from "react";

type StaggeredRevealProps = {
  children: ReactNode;
  stagger?: number;
  className?: string;
};

export default function StaggeredReveal({
  children,
  stagger = 120,
  className = "",
}: StaggeredRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: visible ? `${i * stagger}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
