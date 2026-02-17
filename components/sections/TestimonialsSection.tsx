"use client";

import { site } from "@/data/site";
import StaggeredReveal from "@/components/ui/StaggeredReveal";
import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.scrollWidth / site.testimonials.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(idx);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="testimonials" className="relative section-divider">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-28 md:py-40">
        <div className="section-fade mb-16 md:mb-24">
          <p className="text-xs tracking-[0.4em] text-accent uppercase mb-6">
            Testimonials
          </p>
          <h2 className="font-display text-display-lg font-extrabold text-white max-w-4xl tracking-tighter">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Desktop: staggered grid */}
        <div className="hidden md:block">
          <StaggeredReveal
            stagger={150}
            className="grid grid-cols-2 gap-6"
          >
            {site.testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </StaggeredReveal>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-6 px-6"
          >
            {site.testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[85vw] snap-center"
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {site.testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === activeIndex ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof site.testimonials)[number];
}) {
  return (
    <article className="premium-surface rounded-2xl p-8 md:p-10 flex flex-col h-full">
      {/* Quote mark */}
      <span className="text-5xl leading-none text-accent/30 font-serif mb-4">
        &ldquo;
      </span>
      <p className="text-lg text-muted leading-relaxed flex-1 mb-8">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm text-white font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}
