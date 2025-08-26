import React from "react";

interface CTA {
  label: string;
  href: string;
}

interface HeroSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  ctas?: CTA[];
  media?: React.ReactNode | { src: string; alt: string };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  title,
  subtitle,
  ctas = [],
  media,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {media && typeof media === "object" && "src" in media ? (
          <img
            src={media.src}
            alt={media.alt}
            className="w-full h-full object-cover"
          />
        ) : media ? (
          media
        ) : (
          <div
            className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(255,255,255,0.1)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><rect width="100%" height="100%" fill="url(%23a)"/></svg>')`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}

          {ctas.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctas.map((cta, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(cta.href)}
                  className={`px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                    index === 0
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl"
                      : "border-2 border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm"
                  }`}>
                  {cta.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
