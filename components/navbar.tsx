import React, { useState, useEffect } from "react";
import { Search, Menu, Twitter, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

// Mock the HeroUI components since we don't have access to them
const siteConfig = {
  navItems: [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ],
  navMenuItems: [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "/logout", label: "Logout" },
  ],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    docs: "#",
  },
};

const Logo = () => (
  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">A</span>
  </div>
);

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
          <Moon className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors" />
        )
      ) : (
        <Moon className="w-5 h-5 text-white/70" />
      )}
    </button>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic styling based on scroll and parent context
  const getNavbarStyles = () => {
    const scrollOpacity = Math.min(0.95, 0.3 + scrollY / 300);
    const isScrolled = scrollY > 50;

    return {
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)", // Safari support
      background: isScrolled
        ? `rgba(0, 0, 0, ${scrollOpacity})`
        : `linear-gradient(135deg, rgba(0,0,0,0.1), rgba(255,255,255,0.05))`,
      borderBottom: `1px solid rgba(255,255,255,${isScrolled ? 0.2 : 0.1})`,
      boxShadow: isScrolled
        ? "0 8px 32px rgba(0, 0, 0, 0.3)"
        : "0 4px 16px rgba(0, 0, 0, 0.1)",
    };
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
                  <span className="font-bold text-white text-xl group-hover:text-violet-300 transition-all duration-300 transform group-hover:scale-105">
                    ACME
                  </span>
                </a>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center ml-10 space-x-8">
                {siteConfig.navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="relative text-white/90 hover:text-white font-medium transition-all duration-300 group py-2">
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="absolute inset-0 bg-white/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                  </a>
                ))}
              </div>

              {/* Desktop Right Side */}
              <div className="hidden sm:flex items-center space-x-4">
                {/* Search Bar */}
                <div className="hidden lg:flex relative">
                  <div
                    className={`relative transition-all duration-300 ${isSearchFocused ? "transform scale-105" : ""}`}>
                    <input
                      type="search"
                      placeholder="Search..."
                      className="w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5 pl-10 pr-16 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400/50 focus:bg-white/15 transition-all duration-300"
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                    <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-0.5 text-xs bg-white/20 rounded border border-white/30 text-white/80 font-mono">
                      ⌘K
                    </kbd>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-2">
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
                    aria-label="Twitter">
                    <Twitter className="w-5 h-5 text-white/70 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
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
                className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
                aria-label="Toggle menu">
                <Menu
                  className={`w-5 h-5 text-white transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
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
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 pl-10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            </div>

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
                        ? "text-violet-400 hover:text-violet-300 hover:bg-violet-500/10"
                        : "text-white hover:text-violet-300 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-white/10">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-500/20 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
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
