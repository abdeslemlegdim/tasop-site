"use client";

import { useEffect } from "react";

export default function SectionAnimator() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".section-fade"));
    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const inInitialViewport = rect.top < window.innerHeight * 0.88;

      if (inInitialViewport) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
