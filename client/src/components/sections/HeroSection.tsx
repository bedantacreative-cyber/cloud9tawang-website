import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const prayerFlagColors = ["#C0392B", "#2980B9", "#27AE60", "#F4D03F", "#F5F5F0"];

  return (
    <section id="home" className="relative w-full min-h-[100svh] overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Ken Burns Zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/hero-tawang-monastery-RczbPNfmwVp4bBkHmqb2SY.webp')",
        }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated Prayer Flags */}
      <div className="absolute top-20 md:top-32 left-0 right-0 z-10 h-16">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Prayer flags strung across */}
          {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x, i) => (
            <g key={i}>
              {/* Flag pole */}
              <line x1={x} y1="0" x2={x} y2="50" stroke="#A89968" strokeWidth="1" />
              {/* Flag */}
              <rect
                x={x - 15}
                y="5"
                width="30"
                height="25"
                fill={prayerFlagColors[i % 5]}
                opacity="0.9"
              />
            </g>
          ))}
          {/* Connecting line */}
          <line x1="0" y1="5" x2="1200" y2="5" stroke="#A89968" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pb-16" style={{ minHeight: "calc(100svh - 4rem)" }}>
        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-7xl font-serif font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Where the Mountains Meet the Divine
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-2xl text-white/90 mb-8 max-w-2xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Travel. Experience. Remember.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col md:flex-row gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#packages"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Explore Packages
          </a>
          <Link
            href="/gallery"
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-block text-center"
          >
            View Gallery
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
}
