import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "500+ Travelers", value: "500" },
    { label: "4.9 Rating", value: "4.9" },
    { label: "100% Permits", value: "100%" },
    { label: "Guwahati Pickup", value: "Yes" },
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
              Your Gateway to Tawang
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Cloud9 Tawang is a locally-rooted travel agency specializing in curated Tawang tour experiences. From Guwahati pickup to your last sunset in Tawang, we handle everything — permits, stays, transport, and unforgettable memories.
            </p>
            <p className="text-foreground/70 text-base leading-relaxed">
              Born from a deep love for the land of the Monpa people, we bring you closer to the monasteries, mountains, and magic of Arunachal Pradesh.
            </p>
          </div>

          {/* Right: Image */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/monastery-interior-monks-KXXGk2hbzmDJ7yo8c7SGV8.webp"
              alt="Monastery Interior"
              className="rounded-lg shadow-soft w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">
                {stat.value}
              </div>
              <p className="text-foreground/60 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
