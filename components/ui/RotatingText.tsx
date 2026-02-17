"use client";

import { useEffect, useState } from "react";

type RotatingTextProps = {
  words: string[];
  className?: string;
};

export default function RotatingText({ words, className = "" }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span
        className="flex flex-col transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {words.map((word, index) => (
          <span key={index} className="gold-gradient-text">
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
