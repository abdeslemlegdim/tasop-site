import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SectionAnimator from "@/components/SectionAnimator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TASOP | Engineering Intelligent Systems",
  description:
    "TASOP designs intelligent systems, computer vision models, and scalable automation for modern enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-bg text-text antialiased selection:bg-accent/30`}>
        <SectionAnimator />
        {children}
      </body>
    </html>
  );
}
