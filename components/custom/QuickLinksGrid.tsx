import React from "react";
import { QuickLink } from "@/types";

interface QuickLinksGridProps {
  id?: string;
  links: QuickLink[];
}

export const QuickLinksGrid: React.FC<QuickLinksGridProps> = ({
  id,
  links,
}) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 bg-gray-50 dark:bg-slate-900 min-h-screen justify-center flex-col items-center flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            Explore Our Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Discover our comprehensive approach to energy solutions across the
            globe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className="group bg-white dark:bg-slate-800 dark:border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {link.icon && (
                <div className="mb-4 flex justify-center">
                  <div className="p-3 dark:bg-slate-700 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    {link.icon}
                  </div>
                </div>
              )}
              <h3 className="text-xl dark:text-white font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {link.label}
              </h3>
              {link.description && (
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {link.description}
                </p>
              )}
              <div className="mt-4 flex items-center justify-center text-blue-600 group-hover:text-blue-700 dark:text-blue-300">
                <span className="text-sm font-medium">Learn More</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
