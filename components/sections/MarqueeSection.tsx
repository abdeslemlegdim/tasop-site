import MarqueeTicker from "@/components/ui/MarqueeTicker";
import { site } from "@/data/site";

export default function MarqueeSection() {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden border-y border-border/30">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-bg to-transparent" />

      <MarqueeTicker
        items={site.marqueeWords}
        className="text-2xl md:text-3xl font-bold text-white/[0.07] uppercase tracking-[0.15em]"
        speed={35}
      />
      <MarqueeTicker
        items={[...site.marqueeWords].reverse()}
        reverse
        className="mt-4 text-lg md:text-xl font-medium text-accent/[0.08] uppercase tracking-[0.2em]"
        speed={45}
      />
    </section>
  );
}
