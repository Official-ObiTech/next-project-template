import React from "react";
import { MetricItem } from "@/types";

interface MetricsStripProps {
  id?: string;
  items: MetricItem[];
}

export const MetricsStrip: React.FC<MetricsStripProps> = ({ id, items }) => {
  return (
    <section
      id={id}
      className="scroll-mt-24 md:scroll-mt-28 py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-300 mb-2">
                {item.value}
              </div>
              <div className="text-lg text-blue-100 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
