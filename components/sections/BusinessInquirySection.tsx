"use client";

import { useState, FormEvent } from "react";
import Section from "@/components/layout/Section";

export default function BusinessInquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, wire this to an API route or service
    setSubmitted(true);
  };

  return (
    <Section id="business">
      <div className="section-fade mb-16 md:mb-24">
        <p className="text-xs tracking-[0.4em] text-accent uppercase mb-6">
          Business Inquiries
        </p>
        <h2 className="font-display text-display-lg font-extrabold text-white max-w-5xl tracking-tighter">
          Let&apos;s Work Together
        </h2>
      </div>

      <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-20">
        {/* Left — context */}
        <div className="section-fade delay-1">
          <p className="text-xl md:text-2xl font-body text-muted leading-relaxed tracking-tight mb-10">
            Have a project in mind or want to explore how AI can improve your
            operations? Send us a message and our business team will get back to
            you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-accent text-sm">
                ✉
              </span>
              <div>
                <p className="text-sm text-white font-medium mb-0.5">Email</p>
                <p className="text-sm text-muted">contact@tasop.tech</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-accent text-sm">
                ⏱
              </span>
              <div>
                <p className="text-sm text-white font-medium mb-0.5">
                  Response Time
                </p>
                <p className="text-sm text-muted">
                  Within 1 business day
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="section-fade delay-2">
          {submitted ? (
            <div className="premium-surface rounded-2xl p-10 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                <span className="text-2xl text-accent">✓</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight">
                Message Sent
              </h3>
              <p className="text-sm text-muted">
                Thank you for reaching out. Our business team will be in touch
                shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="premium-surface rounded-2xl p-8 md:p-10 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="biz-name"
                    className="block text-xs text-muted uppercase tracking-wider mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="biz-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-white placeholder:text-muted-dark outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="biz-email"
                    className="block text-xs text-muted uppercase tracking-wider mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    id="biz-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-white placeholder:text-muted-dark outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="biz-company"
                  className="block text-xs text-muted uppercase tracking-wider mb-2"
                >
                  Company
                </label>
                <input
                  id="biz-company"
                  name="company"
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-white placeholder:text-muted-dark outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="biz-message"
                  className="block text-xs text-muted uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="biz-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full resize-none rounded-lg border border-border bg-bg/50 px-4 py-3 text-sm text-white placeholder:text-muted-dark outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-accent text-bg text-sm font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:shadow-glow"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
