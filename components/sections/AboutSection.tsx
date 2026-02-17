import Section from "@/components/layout/Section";
import { site } from "@/data/site";

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="section-fade mb-16 md:mb-24">
        <p className="text-xs tracking-[0.4em] text-accent uppercase mb-6">About</p>
        <h2 className="font-display text-display-lg font-extrabold text-white max-w-5xl tracking-tighter">
          {site.about.title}
        </h2>
      </div>

      <div className="grid gap-16 md:grid-cols-[1fr_auto] md:gap-20">
        {/* Sticky sidebar on the left (sticky on desktop) */}
        <div className="section-fade delay-1">
          <div className="md:sticky md:top-32">
            <p className="text-xl md:text-2xl font-body text-muted leading-relaxed tracking-tight mb-10">
              {site.about.description}
            </p>
            <div className="flex gap-6">
              <div className="w-px bg-gradient-to-b from-accent/50 to-transparent" />
              <p className="text-sm text-muted/70 italic leading-relaxed max-w-sm">
                We believe intelligent systems should be practical, transparent, and built to last.
              </p>
            </div>
          </div>
        </div>

        {/* Stats column */}
        <div className="section-fade delay-2 flex flex-col gap-12 md:w-64">
          {site.about.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-5xl md:text-6xl font-bold gold-gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
