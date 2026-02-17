import Container from "@/components/layout/Container";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="relative py-16 md:py-20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-3xl md:text-4xl font-extrabold tracking-[0.25em] text-white uppercase mb-4">
            {site.name}
          </p>
          <p className="text-sm text-accent tracking-[0.3em] uppercase mb-8">
            {site.footerTagline}
          </p>
          <p className="text-xs text-muted-dark tracking-wider">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
