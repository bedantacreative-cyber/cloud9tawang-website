import { useEffect, useRef, useState } from "react";
import { Car, Hotel, FileText, Users, Utensils, Shield, Phone, MapPin } from "lucide-react";

export default function InclusionsSection() {
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

  const inclusions = [
    { icon: Car, title: "Guwahati & Itanagar Pickup & Drop", description: "Airport/Station pickup and drop from both cities" },
    { icon: Hotel, title: "Hotel / Homestay / Hostel / Resort", description: "Comfortable accommodation options for every budget" },
    { icon: FileText, title: "Inner Line Permit", description: "ILP arrangement included" },
    { icon: Users, title: "Dedicated Vehicle", description: "With experienced hill driver" },
    { icon: Utensils, title: "Breakfast & Meals", description: "Select packages include all meals" },
    { icon: Shield, title: "Bumla Pass Permit", description: "Army permit assistance" },
    { icon: Phone, title: "24/7 Support", description: "On-trip support available" },
    { icon: MapPin, title: "Curated Itinerary", description: "Local guidance included" },
  ];

  return (
    <section id="inclusions" ref={ref} className="relative py-20 md:py-32 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            What's Included
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Everything you need for a seamless and worry-free journey
          </p>
        </div>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-6 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <Icon className="text-accent mb-4" size={32} />
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
