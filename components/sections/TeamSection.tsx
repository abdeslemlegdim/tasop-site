"use client";

import { site } from "@/data/site";
import StaggeredReveal from "@/components/ui/StaggeredReveal";
import Container from "@/components/layout/Container";

export default function TeamSection() {
  return (
    <section id="team" className="relative section-divider">
      <Container className="py-28 md:py-40">
        <div className="section-fade mb-16 md:mb-24">
          <p className="text-xs tracking-[0.4em] text-accent uppercase mb-6">
            Team
          </p>
          <h2 className="font-display text-display-lg font-extrabold text-white max-w-4xl tracking-tighter">
            The People Behind TASOP
          </h2>
        </div>

        <StaggeredReveal
          stagger={100}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {site.team.map((member) => (
            <article
              key={member.name}
              className="premium-surface shine-card rounded-2xl p-8 group"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-glow-sm">
                <span className="text-lg font-bold text-accent">
                  {member.initials}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-1 tracking-tight transition-colors duration-300 group-hover:text-accent-light">
                {member.name}
              </h3>
              <p className="text-sm text-accent mb-4 tracking-wider uppercase">
                {member.role}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {member.bio}
              </p>
            </article>
          ))}
        </StaggeredReveal>
      </Container>
    </section>
  );
}
