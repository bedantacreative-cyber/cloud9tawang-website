import { useEffect, useRef, useState } from "react";
import { Compass, Lock, Heart, Zap } from "lucide-react";

export default function WhyChooseSection() {
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

  const reasons = [
    {
      icon: Compass,
      title: "Local Expertise",
      description: "We are from Arunachal Pradesh. We know every road, every shortcut, and every hidden gem that makes Tawang truly magical.",
    },
    {
      icon: Lock,
      title: "Hassle-Free Permits",
      description: "ILP and Bumla Pass permits are handled entirely by us. Travel with peace of mind, not paperwork stress.",
    },
    {
      icon: Heart,
      title: "Comfort & Safety",
      description: "Experienced hill drivers, quality stays, and 24/7 support ensure your journey is safe, comfortable, and memorable.",
    },
    {
      icon: Zap,
      title: "Authentic Experiences",
      description: "Monastery visits, Monpa homestays, local food, and real cultural connections — not tourist traps.",
    },
  ];

  return (
    <section id="why-choose" ref={ref} className="relative py-12 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Why Choose Cloud9 Tawang
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Four reasons to trust us with your Himalayan journey
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-500 hover-lift ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
