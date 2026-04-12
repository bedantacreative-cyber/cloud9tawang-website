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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      name: "Tawang Express",
      duration: "5 Days / 4 Nights",
      price: "₹12,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/sela-pass-landscape-RbSHYubqN5T3QCqqxwUCHc.webp",
      highlights: ["Sela Pass", "Tawang Monastery", "War Memorial", "Nuranang Falls"],
      route: "Guwahati → Bhalukpong → Dirang → Tawang → Bomdila → Guwahati",
    },
    {
      name: "Tawang Complete",
      duration: "7 Days / 6 Nights",
      price: "₹18,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/prayer-flags-mountain-NvG3gv46HSN7kmsDBUSUD6.webp",
      highlights: ["Everything in Express", "Bumla Pass", "PT Tso Lake", "Madhuri Lake"],
      route: "Guwahati → Bhalukpong → Dirang → Tawang (2 nights) → Bumla Pass → Bomdila → Guwahati",
    },
    {
      name: "Tawang & Beyond",
      duration: "9 Days / 8 Nights",
      price: "₹24,000",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/nuranang-falls-XgKnoD6foKThe3uugW8T7u.webp",
      highlights: ["Kaziranga Safari", "Full Tawang Circuit", "Bumla Pass", "All Lakes"],
      route: "Guwahati → Kaziranga → Bhalukpong → Dirang → Tawang → Bumla → Bomdila → Guwahati",
    },
  ];

  return (
    <section id="packages" ref={ref} className="relative py-20 md:py-32 bg-card/50">
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
        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-accent mb-2">{pkg.name}</h3>
                    <p className="text-foreground/60 text-sm">{pkg.duration}</p>
                  </div>
                  <div className="text-2xl font-serif font-bold text-accent">{pkg.price}</div>
                </div>

                {/* Route */}
                <div className="flex gap-2 mb-4 text-foreground/70 text-sm">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                  <p>{pkg.route}</p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-foreground/60 text-xs font-semibold mb-2">HIGHLIGHTS</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <a
                  href="#contact"
                  className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center block"
                >
                  View Itinerary
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className={`mt-16 p-8 bg-background rounded-lg border border-accent/20 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-2xl font-serif font-bold text-accent mb-3">Custom / Group Tours</h3>
          <p className="text-foreground/70 mb-6">Design your own Tawang experience. We customize itineraries for families, solo travelers, photography groups, and corporate retreats.</p>
          <a
            href="#contact"
            className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
