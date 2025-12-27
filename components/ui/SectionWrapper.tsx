import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export const SectionWrapper = ({
  children,
  id,
  className = "",
  fullWidth = false,
}: SectionWrapperProps) => {
  const maxWidth = fullWidth ? "" : "max-w-6xl mx-auto";

  return (
    <section
      id={id}
      className={`py-section-sm md:py-section px-4 md:px-8 relative ${maxWidth} ${className}`}
    >
      {children}
    </section>
  );
};
