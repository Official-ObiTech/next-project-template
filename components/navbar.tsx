import React, { useState, useEffect } from "react";
import { Search, Menu, Twitter, Sun, Moon, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./custom/Logo";

// Mock the HeroUI components since we don't have access to them
const siteConfig = {
  navItems: [
    { href: "#home", label: "Home" },
    { href: "#investors", label: "Investors" },
    { href: "#careers", label: "Careers" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#about", label: "About" },
  ],
  navMenuItems: [
    { href: "#home", label: "Home" },
    { href: "#investors", label: "Investors" },
    { href: "#careers", label: "Careers" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#about", label: "About" },
    { href: "/logout", label: "Logout" },
  ],
  links: {
    mail: "mailto:info@acme.com",
  },
};

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
      aria-label="Toggle theme">
      {mounted ? (
        isDark ? (
          <Sun className="w-5 h-5 text-white/70 group-hover:text-yellow-400 transition-colors" />
        ) : (
          <Moon className="w-5 h-5 text-black/70 group-hover:text-blue-400 transition-colors" />
        )
      ) : (
        <Moon className="w-5 h-5 text-black/70" />
      )}
    </button>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic styling based on scroll and parent context
  const getNavbarStyles = () => {
    const scrollOpacity = Math.min(0.95, 0.3 + scrollY / 300);
    const isScrolled = scrollY > 50;

    // Theme-aware surfaces
    const background = (() => {
      if (isScrolled) {
        return isDark
          ? `rgba(0, 0, 0, ${scrollOpacity})`
          : `rgba(255, 255, 255, ${scrollOpacity})`;
      }
      return isDark
        ? `linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15))`
        : `linear-gradient(135deg, rgba(255,255,255,0.65), rgba(255,255,255,0.35))`;
    })();

    const borderBottom = isDark
      ? `1px solid rgba(255,255,255,${isScrolled ? 0.18 : 0.12})`
      : `1px solid rgba(0,0,0,${isScrolled ? 0.1 : 0.06})`;

    const boxShadow = isDark
      ? isScrolled
        ? "0 8px 32px rgba(0, 0, 0, 0.45)"
        : "0 4px 16px rgba(0, 0, 0, 0.25)"
      : isScrolled
        ? "0 8px 32px rgba(0, 0, 0, 0.12)"
        : "0 4px 16px rgba(0, 0, 0, 0.08)";

    return {
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)", // Safari support
      background,
      borderBottom,
      boxShadow,
    } as const;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
        style={getNavbarStyles()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center justify-between flex-1">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center gap-3 group">
                  <Logo />
                </a>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center ml-10 space-x-6 text-base">
                {siteConfig.navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative ${isDark ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black"} font-medium transition-all duration-300 group py-2`}>
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span
                      className={`absolute inset-0 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 ${isDark ? "bg-white/5" : "bg-black/5"}`}></span>
                  </a>
                ))}
              </div>

              {/* Desktop Right Side */}
              <div className="hidden sm:flex items-center space-x-4">
                {/* Social Links */}
                <div className="flex items-center space-x-2">
                  <a
                    href={siteConfig.links.mail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 group ${isDark ? "hover:bg-white/10" : "hover:bg-black/10"}`}
                    aria-label="Mail">
                    <Mail
                      className={`w-5 h-5 ${isDark ? "text-white/70" : "text-black/60"} group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300`}
                    />
                  </a>

                  <ThemeSwitch />
                </div>
              </div>
            </div>

            {/* Mobile Right Side */}
            <div className="sm:hidden flex items-center space-x-2">
              <ThemeSwitch />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-all duration-300 group ${isDark ? "hover:bg-white/10" : "hover:bg-black/10"}`}
                aria-label="Toggle menu">
                <Menu
                  className={`w-5 h-5 ${isDark ? "text-white" : "text-black"} transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="px-4 py-6 space-y-4 bg-black/30 backdrop-blur-sm border-t border-white/10">
            {/* Mobile Navigation */}
            <div className="space-y-2">
              {siteConfig.navMenuItems.map((item, index) => (
                <a
                  key={`${item.href}-${index}`}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:translate-x-2 ${
                    index === siteConfig.navMenuItems.length - 1
                      ? "text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      : index === 2
                        ? "text-violet-600 hover:text-violet-700 hover:bg-violet-500/10"
                        : isDark
                          ? "text-white hover:text-violet-300 hover:bg-white/10"
                          : "text-black hover:text-violet-700 hover:bg-black/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-white/10">
              <a
                href={siteConfig.links.mail}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-500/20 transition-all duration-300 group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" aria-hidden="true"></div>
    </>
  );
};
