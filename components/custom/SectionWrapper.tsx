import React from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};
