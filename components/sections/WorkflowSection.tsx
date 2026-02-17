import Section from "@/components/layout/Section";
import { site } from "@/data/site";

export default function WorkflowSection() {
  return (
    <Section id="workflow">
      <div className="section-fade mb-16 md:mb-24">
        <p className="text-xs tracking-[0.4em] text-accent uppercase mb-6">Process</p>
        <h2 className="font-display text-display-lg font-extrabold text-white max-w-4xl tracking-tighter">
          From Vision to Deployment
        </h2>
      </div>

      <div className="grid gap-0 md:grid-cols-4">
        {site.workflow.map((step, index) => (
          <article
            key={step.title}
            className={`section-fade relative group py-10 md:py-0 md:px-6 first:pl-0 last:pr-0 ${
              index === 0 ? "delay-1" : index === 1 ? "delay-2" : index === 2 ? "delay-3" : "delay-4"
            }`}
          >
            {/* Vertical divider on desktop */}
            {index > 0 && (
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
            )}
            {/* Horizontal divider on mobile */}
            {index > 0 && (
              <div className="md:hidden absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            )}

            <p className="step-number mb-4 transition-all duration-300 group-hover:[-webkit-text-stroke-color:rgba(201,166,107,0.6)]">
              {step.id}
            </p>
            <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight transition-colors duration-300 group-hover:text-accent-light">
              {step.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
