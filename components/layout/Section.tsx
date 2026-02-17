import { ReactNode } from "react";
import Container from "@/components/layout/Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  withDivider?: boolean;
};

export default function Section({ id, children, className = "", withDivider = true }: SectionProps) {
  return (
    <section id={id} className={`relative ${withDivider ? "section-divider" : ""} ${className}`}>
      <Container className="py-28 md:py-40">{children}</Container>
    </section>
  );
}
