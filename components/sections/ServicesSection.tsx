import Section from "@/components/layout/Section";
import { site } from "@/data/site";

export default function ServicesSection() {
  return (
    <Section id="services">
      <div className="section-fade mb-16 md:mb-24">
        <p className="text-xs tracking-[0.4em] text-accent uppercase mb-6">Services</p>
        <h2 className="font-display text-display-lg font-extrabold text-white max-w-4xl tracking-tighter">
          Capabilities That Define Tomorrow
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {site.services.map((service, index) => (
          <article
            key={service.title}
            className={`section-fade premium-surface shine-card rounded-2xl p-8 md:p-10 group ${
              index === 0 ? "delay-1" : index === 1 ? "delay-2" : index === 2 ? "delay-3" : "delay-4"
            }`}
          >
            <p className="step-number mb-6 transition-all duration-300 group-hover:[-webkit-text-stroke-color:rgba(201,166,107,0.6)]">
              {service.id}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight transition-colors duration-300 group-hover:text-accent-light">
              {service.title}
            </h3>
            <p className="text-base text-muted leading-relaxed">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
