import Section from "@/components/layout/Section";
import { site } from "@/data/site";

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="section-fade text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] text-accent uppercase mb-6">Contact</p>
        <h2 className="font-display text-display-md font-extrabold text-white mb-8 tracking-tighter">
          Ready to Build Something
          <span className="gold-gradient-text"> Exceptional?</span>
        </h2>
        <p className="text-lg text-muted mb-12 leading-relaxed">
          Let's discuss how TASOP can help transform your operations with intelligent systems.
        </p>

        <div className="section-fade delay-1 grid gap-6 sm:grid-cols-2 mb-12">
          <div className="premium-surface rounded-xl p-6 text-left">
            <p className="text-xs tracking-wider text-accent uppercase mb-2">Email</p>
            <p className="text-white">{site.contact.email}</p>
          </div>
          <div className="premium-surface rounded-xl p-6 text-left">
            <p className="text-xs tracking-wider text-accent uppercase mb-2">Location</p>
            <p className="text-white">{site.contact.location}</p>
          </div>
        </div>

        <a
          href={`mailto:${site.contact.email}`}
          className="section-fade delay-2 inline-flex items-center px-10 py-4 bg-accent text-bg text-sm font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:shadow-glow"
        >
          Get in Touch
        </a>
      </div>
    </Section>
  );
}
