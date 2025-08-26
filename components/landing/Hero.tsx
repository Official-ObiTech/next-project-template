import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, Circle } from "lucide-react";
import { RocketIcon } from "@/components/icons";
import { Navbar } from "../navbar";
import oilHouse from "@/assets/images/oil-house.jpeg";
import oilLine from "@/assets/images/oil-line.jpeg";

type ImageSlide = {
  type: "image";
  src: StaticImageData;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  overlay: string;
};

type VideoSlide = {
  type: "video";
  src: string; // video URL
  poster: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  overlay: string;
};

type CarouselItem = ImageSlide | VideoSlide;

// Mock the components and config since we don't have access to them
const title = (props = {}) =>
  `text-4xl md:text-6xl font-bold ${props.color === "violet" ? "text-violet-500" : "text-white"}`;
const subtitle = (props = {}) =>
  `text-lg md:text-xl text-gray-200 ${props.class || ""}`;
const buttonStyles = (props = {}) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-32 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105";
  if (props.color === "primary")
    return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl`;
  return `${baseClasses} border-2 border-white/20 hover:border-white/40 text-white backdrop-blur-sm hover:bg-white/10`;
};

const siteConfig = {
  links: {
    explore: "#explore",
    learnMore: "#about",
  },
};

const Code = ({ children, color }) => (
  <code
    className={`px-2 py-1 rounded text-sm ${color === "primary" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}>
    {children}
  </code>
);

const Snippet = ({ children, hideCopyButton, hideSymbol, variant }) => (
  <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-4">
    {children}
  </div>
);

const Link = ({ children, href, className, isExternal }) => (
  <a
    href={href}
    className={className}
    // target={isExternal ? "_blank" : undefined}
    // rel={isExternal ? "noopener noreferrer" : undefined}
  >
    {children}
  </a>
);

const carouselItems: CarouselItem[] = [
  {
    type: "image",
    src: oilHouse,
    title: "Driving energy security",
    highlight: "through responsible oil and gas exploration",
    subtitle:
      "delivering sustainable value to communities and investors worldwide.",
    description:
      "We are committed to ensuring energy stability while creating long-term benefits for stakeholders and local communities.",
    overlay:
      "bg-gradient-to-r from-purple-900/50 via-blue-900/40 to-transparent",
  },
  {
    type: "image",
    src: oilLine,
    title: "Innovating in production",
    highlight: "offshore and onshore",
    subtitle: "with advanced technologies that ensure safety and efficiency.",
    description:
      "We leverage cutting-edge solutions to achieve sustainable operations while safeguarding the environment for future generations.",
    overlay:
      "bg-gradient-to-r from-purple-900/50 via-blue-900/40 to-transparent",
  },
  {
    type: "video",
    src: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
    poster:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80",
    title: "Empowering economies",
    highlight: "by responsibly harnessing natural resources",
    subtitle:
      "while prioritizing people, partnerships, and sustainable development.",
    description:
      "Our mission is to drive economic growth through responsible resource management, ensuring lasting prosperity for generations to come.",
    overlay:
      "bg-gradient-to-r from-emerald-900/50 via-teal-900/40 to-transparent",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    if (isPlaying && !isVideoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, isVideoPlaying]);

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  // Reset video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleVideoPlay = () => {
    if (carouselItems[currentSlide].type === "video") {
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const currentItem = carouselItems[currentSlide];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Background Slides */}
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}>
            {item.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <video
                  ref={index === currentSlide ? videoRef : null}
                  className="w-full h-full object-cover"
                  poster={item.poster}
                  muted
                  loop
                  playsInline>
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
            )}
            <div className={`absolute inset-0 ${item.overlay}`} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Title */}
          <div className="space-y-2 animate-fadeInUp">
            <div className="inline-block">
              <span className={title()}>{currentItem.title}&nbsp;</span>
              <span className={title({ color: "violet" })}>
                {currentItem.highlight}&nbsp;
              </span>
            </div>
            <div className={title()}>{currentItem.subtitle}</div>
            <div className={subtitle({ class: "mt-6 max-w-2xl mx-auto" })}>
              {currentItem.description}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex px-44 flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href={siteConfig.links.explore}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}>
              <RocketIcon size={20} />
              Explore
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide">
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Play/Pause Controls */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-3">
        {/* Auto-play toggle */}
        <button
          onClick={toggleAutoPlay}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}>
          {isPlaying ? (
            <Pause className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Video play/pause (only shown for video slides) */}
        {currentItem.type === "video" && (
          <button
            onClick={toggleVideoPlay}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
            aria-label={isVideoPlaying ? "Pause video" : "Play video"}>
            {isVideoPlaying ? (
              <Pause className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            )}
          </button>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`p-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}>
            <Circle className="w-3 h-3" />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div
          className={`h-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-300 ${
            isPlaying && !isVideoPlaying ? "animate-pulse" : ""
          }`}
          style={{
            width: `${((currentSlide + 1) / carouselItems.length) * 100}%`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @media (max-width: 640px) {
          .min-h-screen {
            min-height: 100vh;
            min-height: 100svh;
          }
        }
      `}</style>
    </div>
  );
};
