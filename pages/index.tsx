// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
// import DefaultLayout from "@/layouts/default";
// import { Hero } from "@/components/landing/Hero";

// export default function IndexPage() {
//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         {/* <Hero /> */}
//       </section>
//     </DefaultLayout>
//   );
// }

import { GeoFootprint } from "@/components/custom/GeoFootprint";
import { MetricsStrip } from "@/components/custom/MetricsStrip";
import { QuickLinksGrid } from "@/components/custom/QuickLinksGrid";
import { SectionWrapper } from "@/components/custom/SectionWrapper";
import { Footer } from "@/components/Footer";
import { AboutOverview } from "@/components/landing/AboutOverview";
import { Hero } from "@/components/landing/Hero";
import { LeadershipGrid } from "@/components/landing/LeadershipGrid";
import { Investors } from "@/components/landing/Investors";

import React from "react";
import Partners from "@/components/landing/Partners";

// Sample data

const quickLinks = [
  // {
  //   label: "Projects",
  //   description:
  //     "Explore our global energy projects and infrastructure developments",
  //   href: "#projects",
  //   icon: (
  //     <svg
  //       className="w-8 h-8 text-blue-600"
  //       fill="none"
  //       stroke="currentColor"
  //       viewBox="0 0 24 24">
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  //       />
  //     </svg>
  //   ),
  // },
  {
    label: "Investors",
    description:
      "Financial reports, investor relations, and market performance",
    href: "#investors",
    icon: (
      <svg
        className="w-8 h-8 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    label: "Careers",
    description: "Join our team and build the future of energy together",
    href: "#careers",
    icon: (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
        />
      </svg>
    ),
  },
  {
    label: "Sustainability",
    description:
      "Our commitment to environmental responsibility and clean energy",
    href: "#sustainability",
    icon: (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const metrics = [
  { label: "Years of Experience", value: "50+" },
  { label: "Countries", value: "25" },
  { label: "Daily Production", value: "2.5M" },
  { label: "Safety Rating", value: "99.9%" },
];

const leadership = [
  {
    name: "Amina Bello",
    role: "Chief Executive Officer",
    bio: "20+ years of experience in upstream operations and strategic development across West Africa.",
    linkedin: "#",
  },
  {
    name: "David Okon",
    role: "Chief Operating Officer",
    bio: "Leads offshore platform strategy and operational excellence initiatives.",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Pioneer in digital transformation and sustainable energy technologies.",
    linkedin: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Financial Officer",
    bio: "Expert in energy finance and capital markets with global experience.",
    linkedin: "#",
  },
];

const regions = [
  { name: "North America", count: 12 },
  { name: "West Africa", count: 18 },
  { name: "Middle East", count: 8 },
  { name: "Southeast Asia", count: 15 },
  { name: "South America", count: 6 },
];

const footerColumns = [
  {
    title: "Company",
    links: [
      { href: "#about", label: "About Us" },
      { href: "#careers", label: "Careers" },
      { href: "#news", label: "News" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Operations",
    links: [
      // { href: "#projects", label: "Projects" },
      { href: "#sustainability", label: "Sustainability" },
      { href: "#safety", label: "Safety" },
      { href: "#technology", label: "Technology" },
    ],
  },
  {
    title: "Investors",
    links: [
      { href: "#investors", label: "Investor Relations" },
      { href: "#reports", label: "Financial Reports" },
      { href: "#governance", label: "Governance" },
      { href: "#dividends", label: "Dividends" },
    ],
  },
];

// Placeholder sections for future implementation
const PlaceholderSection: React.FC<{ id: string; title: string }> = ({
  id,
  title,
}) => (
  <SectionWrapper id={id} className="bg-gray-50 dark:bg-slate-900">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 dark:text-gray-400">
        This section is coming soon. Stay tuned for updates!
      </p>
      <div className="w-32 h-32 mx-auto bg-gray-200 rounded-2xl flex items-center justify-center">
        <svg
          className="w-16 h-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      </div>
    </div>
  </SectionWrapper>
);

export default function OilGasLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Global CSS for smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      <Partners />

      {/* Quick Links */}
      <QuickLinksGrid id="explore" links={quickLinks} />

      {/* Metrics */}
      <MetricsStrip items={metrics} />

      {/* Placeholder Sections */}
      {/* <PlaceholderSection id="projects" title="Our Projects" /> */}
      {/* <PlaceholderSection id="investors" title="Investor Relations" /> */}
      <Investors id="investors" />
      <PlaceholderSection id="careers" title="Careers" />
      <PlaceholderSection id="sustainability" title="Sustainability" />

      {/* About Section */}
      <AboutOverview
        id="about"
        mission="To deliver reliable, efficient, and sustainable energy solutions that power economic growth and improve lives worldwide while maintaining the highest standards of safety and environmental stewardship."
        vision="To be the global leader in responsible energy development, driving innovation and sustainability in the transition to a cleaner energy future."
        values={[
          "Safety First",
          "Environmental Stewardship",
          "Operational Excellence",
          "Innovation & Technology",
          "Community Partnership",
          "Integrity & Transparency",
        ]}
        history="Founded in 1974, PetroTech has grown from a regional operator to a global energy company with operations spanning five continents. Our journey began with a single offshore platform and has evolved into a comprehensive energy portfolio including upstream, midstream, and renewable energy projects."
      />

      {/* Leadership */}
      <LeadershipGrid people={leadership} />

      {/* Geographic Footprint */}
      <GeoFootprint regions={regions} />

      {/* Footer */}
      <Footer columns={footerColumns} />
    </div>
  );
}
