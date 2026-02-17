import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        panel: "#0a0a0a",
        border: "#1a1a1a",
        accent: "#c9a66b",
        "accent-light": "#e8d5b5",
        text: "#ffffff",
        muted: "#888888",
        "muted-dark": "#555555",
      },
      fontFamily: {
        display: ["var(--font-space)", "var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xxl": ["clamp(3.5rem, 10vw, 7.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "900" }],
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "800" }],
        "display-lg": ["clamp(2.25rem, 6vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-md": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["clamp(1.25rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.035em",
        tight: "-0.025em",
        widest: "0.4em",
      },
      boxShadow: {
        glow: "0 0 80px rgba(201, 166, 107, 0.15)",
        "glow-sm": "0 0 40px rgba(201, 166, 107, 0.1)",
        soft: "0 25px 80px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "text-rotate": "textRotate 8s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marqueeReverse 40s linear infinite",
        "cursor-blink": "cursorBlink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        textRotate: {
          "0%, 20%": { transform: "translateY(0%)" },
          "25%, 45%": { transform: "translateY(-100%)" },
          "50%, 70%": { transform: "translateY(-200%)" },
          "75%, 95%": { transform: "translateY(-300%)" },
          "100%": { transform: "translateY(0%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-33.333%)" },
          "100%": { transform: "translateX(0)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
