"use client";

type MarqueeTickerProps = {
  items: string[];
  separator?: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export default function MarqueeTicker({
  items,
  separator = "—",
  speed = 40,
  reverse = false,
  className = "",
}: MarqueeTickerProps) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span className="whitespace-nowrap">{item}</span>
      <span className="text-accent/40">{separator}</span>
    </span>
  ));

  const duration = `${speed}s`;

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex gap-8 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: duration }}
      >
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
