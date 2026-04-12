import { useEffect, useRef, useState } from "react";
import { Cloud, Sun, CloudRain } from "lucide-react";

export default function BestTimeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const seasons = [
    {
      icon: Cloud,
      months: "Oct–Feb",
      title: "Winter",
      description: "Snow, cold, stunning views. Some roads may close. Magical but challenging.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Sun,
      months: "Mar–Jun",
      title: "Best Season",
      description: "Pleasant weather, clear skies, flowers blooming. Perfect for all travelers.",
      color: "from-yellow-500 to-orange-400",
      featured: true,
    },
    {
      icon: CloudRain,
      months: "Jul–Sep",
      title: "Monsoon",
      description: "Heavy rain, landslide risk. Not recommended for travel.",
      color: "from-gray-500 to-slate-400",
    },
  ];

  const packing = [
    "Warm layers and woolens",
    "Walking shoes and trekking boots",
    "Backpack and daypack",
    "Water bottle and thermos",
    "Rain gear and waterproof jacket",
    "Sun protection and sunscreen",
    "Camera and binoculars",
    "Personal medications",
  ];

  return (
    <section id="best-time" ref={ref} className="relative py-20 md:py-32 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Best Time to Visit
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Plan your journey during the perfect season
          </p>
        </div>

        {/* Seasons Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {seasons.map((season, index) => {
            const Icon = season.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-lg border-2 transition-all duration-1000 ${
                  season.featured
                    ? "border-accent bg-background shadow-glow"
                    : "border-border bg-background/50 hover:border-accent"
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="text-accent mb-4" size={40} />
                <p className="text-accent font-semibold text-sm mb-2">{season.months}</p>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{season.title}</h3>
                <p className="text-foreground/70">{season.description}</p>
              </div>
            );
          })}
        </div>

        {/* Packing Essentials */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-2xl font-serif font-bold text-accent mb-6">Packing Essentials</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {packing.map((item, index) => (
              <div key={index} className="p-4 bg-background rounded-lg border border-border text-center">
                <p className="text-foreground/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
