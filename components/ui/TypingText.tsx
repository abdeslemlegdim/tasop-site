"use client";

import { useEffect, useState, useRef } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
};

export default function TypingText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  cursor = true,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && (
        <span
          className={`inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle ${
            done ? "animate-cursor-blink" : ""
          }`}
        />
      )}
    </span>
  );
}
