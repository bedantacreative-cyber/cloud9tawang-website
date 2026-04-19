import { useEffect, useRef, useState } from "react";
import { MapPin, Users, DollarSign } from "lucide-react";

export default function PackagesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      name: "4N/5D Standard Tour",
      duration: "5 Days / 4 Nights",
      price: "From ₹12,500/- pp",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/sela-pass-landscape-RbSHYubqN5T3QCqqxwUCHc.webp",
      highlights: ["Itinerary + bookings", "Guided tours", "24/7 travel support"],
      route: "Pickup: Guwahati or Itanagar",
    },
    {
      name: "4N/5D Premium Tour",
      duration: "5 Days / 4 Nights",
      price: "From ₹14,500/- pp",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/prayer-flags-mountain-NvG3gv46HSN7kmsDBUSUD6.webp",
      highlights: ["Everything in Standard", "Exclusive accommodations"],
      route: "Pickup: Guwahati or Itanagar",
    },
    {
      name: "Group Travel Planning",
      duration: "Min 10 Pax",
      price: "From ₹12,000/- pp",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/nuranang-falls-XgKnoD6foKThe3uugW8T7u.webp",
      highlights: ["Customized package", "Team building entertainment"],
      route: "Pickup: Guwahati or Itanagar",
    },
    {
      name: "Custom Itinerary Planning",
      duration: "Flexible",
      price: "Price on Request",
      desc: "Personalized day-by-day plans tailored to your preferences — Shergaon, Bomdila, Bhalupong, Dirang, Tawang & more. Tell us your dream trip and we'll design it for you.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/monastery-interior-monks-KXXGk2hbzmDJ7yo8c7SGV8.webp",
      highlights: ["Day-by-day plans", "Shergaon, Bomdila, Bhalupong, Dirang", "Tawang"],
      route: "Pickup: Flexible",
    },
  ];

  return (
    <section id="packages" ref={ref} className="relative py-12 md:py-32 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Curated Journeys
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Choose from our thoughtfully designed tour packages, each crafted to reveal the spiritual and natural beauty of Tawang
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group hover-lift bg-background rounded-lg overflow-hidden shadow-soft transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-serif font-bold text-accent mb-1">{pkg.name}</h3>
                  <p className="text-foreground/60 text-sm mb-2">{pkg.duration}</p>
                  <div className="text-lg font-bold text-foreground mt-1">{pkg.price}</div>
                </div>

                {pkg.desc && (
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{pkg.desc}</p>
                )}

                {/* Route */}
                <div className="flex gap-2 mb-4 text-foreground/70 text-xs">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5 text-accent" />
                  <p>{pkg.route}</p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-foreground/60 text-xs font-semibold mb-2">HIGHLIGHTS</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center block text-sm"
                >
                  Book Package
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
