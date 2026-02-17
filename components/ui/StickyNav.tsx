"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="backdrop-blur-xl bg-bg/70 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-14">
          <a
            href="#"
            className="text-xs font-semibold tracking-[0.3em] text-white uppercase"
          >
            {site.name}
          </a>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] text-muted uppercase">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#workflow" className="transition-colors hover:text-white">Process</a>
            <a
              href="#contact"
              className="px-5 py-2 border border-accent/40 rounded-full text-accent transition-all hover:bg-accent/10 hover:border-accent/60"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
