import Container from "@/components/layout/Container";
import RotatingText from "@/components/ui/RotatingText";
import TypingText from "@/components/ui/TypingText";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { site } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(201,166,107,0.08),transparent_70%)]" />
      </div>

      <Container className="pt-6 md:pt-8">
        <header className="section-fade flex items-center justify-between py-4">
          <a href="#" className="text-sm font-semibold tracking-[0.3em] text-white uppercase">
            {site.name}
          </a>
          <nav className="hidden items-center gap-10 text-xs font-medium tracking-[0.2em] text-muted uppercase md:flex">
            <a href="#about" className="transition-colors duration-300 hover:text-white">
              About
            </a>
            <a href="#services" className="transition-colors duration-300 hover:text-white">
              Services
            </a>
            <a href="#workflow" className="transition-colors duration-300 hover:text-white">
              Process
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 border border-accent/40 rounded-full text-accent transition-all duration-300 hover:bg-accent/10 hover:border-accent/60"
            >
              Contact
            </a>
          </nav>
        </header>
      </Container>

      <div className="flex-1 flex items-center">
        <Container className="py-20 md:py-32">
          <ParallaxSection speed={0.15}>
            <div className="section-fade max-w-6xl">
              <p className="text-xs tracking-[0.4em] text-accent uppercase mb-8 md:mb-12">
                <TypingText text={site.meaning} speed={40} />
              </p>

              <h1 className="font-display text-display-xxl font-black text-white leading-none tracking-tightest">
                Engineering
                <br />
                <RotatingText
                  words={site.hero.rotatingWords}
                  className="h-[1.1em]"
                />
                <br />
                <span className="text-muted-dark">Systems</span>
              </h1>

              <p className="section-fade delay-1 mt-10 md:mt-14 max-w-xl text-lg md:text-xl font-body text-muted leading-relaxed tracking-tight">
                {site.hero.subheadline}
              </p>

              <div className="section-fade delay-2 mt-12 md:mt-16 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center px-8 py-4 bg-accent text-bg text-sm font-semibold tracking-[0.15em] uppercase rounded-full overflow-hidden transition-all duration-400 hover:shadow-glow"
                >
                  <span className="relative z-10">Contact Us</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-8 py-4 border border-border text-white text-sm font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:border-accent/50 hover:text-accent"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </ParallaxSection>
        </Container>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
