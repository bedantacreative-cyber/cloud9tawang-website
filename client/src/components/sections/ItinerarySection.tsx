import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ItinerarySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedDay, setExpandedDay] = useState(0);
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

  const itinerary = [
    {
      day: 1,
      title: "Guwahati to Bhalukpong",
      distance: "250 km",
      time: "7 hrs",
      description: "Pickup from Guwahati Airport/Railway Station early morning. Drive through the golden fields of Assam, crossing into Arunachal Pradesh at Bhalukpong. Evening at leisure by the Kameng River. Overnight at Bhalukpong.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/nuranang-falls-XgKnoD6foKThe3uugW8T7u.webp",
    },
    {
      day: 2,
      title: "Bhalukpong to Dirang",
      distance: "140 km",
      time: "5 hrs",
      description: "Morning drive through lush forests and winding mountain roads. Stop at Tipi Orchidarium (5,000+ orchid species). Reach the beautiful valley town of Dirang by afternoon. Visit Dirang Dzong (ancient stone fortress) and hot water springs. Overnight at Dirang.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/prayer-flags-mountain-NvG3gv46HSN7kmsDBUSUD6.webp",
    },
    {
      day: 3,
      title: "Dirang to Tawang via Sela Pass",
      distance: "180 km",
      time: "8 hrs",
      description: "The most dramatic day. Cross the legendary Sela Pass at 13,700 ft with snow-covered peaks and the stunning Sela Lake. Stop at Jaswantgarh War Memorial. Visit the thundering Nuranang Falls. Arrive in Tawang by evening. Overnight at Tawang.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/sela-pass-landscape-RbSHYubqN5T3QCqqxwUCHc.webp",
    },
    {
      day: 4,
      title: "Tawang Local Sightseeing",
      distance: "Local",
      time: "Full Day",
      description: "Visit Tawang Monastery — the largest in India, second largest in the world. Explore the birthplace of the 6th Dalai Lama. Visit Tawang War Memorial with its evening Light & Sound show. Explore the local market for handicrafts and Monpa textiles. Overnight at Tawang.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/hero-tawang-monastery-RczbPNfmwVp4bBkHmqb2SY.webp",
    },
    {
      day: 5,
      title: "Bumla Pass & Lakes Excursion",
      distance: "Day Trip",
      time: "Full Day",
      description: "Drive to Bumla Pass (15,200 ft) — the India-China border crossing point. Visit PT Tso Lake and Sangetsar Lake (Madhuri Lake) at 12,000 ft. Sacred Buddhist prayer sites. Return to Tawang. Overnight at Tawang. Bumla Pass requires special army permits which we arrange.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/prayer-flags-mountain-NvG3gv46HSN7kmsDBUSUD6.webp",
    },
    {
      day: 6,
      title: "Tawang to Bomdila",
      distance: "180 km",
      time: "7 hrs",
      description: "Depart for Bomdila. Visit Bomdila Monastery (established 1965). Explore the Bomdila View Point for panoramic Himalayan views. Evening walk in the local market. Overnight at Bomdila.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/monastery-interior-monks-KXXGk2hbzmDJ7yo8c7SGV8.webp",
    },
    {
      day: 7,
      title: "Bomdila to Guwahati",
      distance: "300 km",
      time: "9 hrs",
      description: "Early morning departure. Drive back through the scenic hills to Guwahati. Drop at Guwahati Airport/Railway Station by evening. Tour ends with beautiful memories.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/nuranang-falls-XgKnoD6foKThe3uugW8T7u.webp",
    },
  ];

  return (
    <section id="itinerary" ref={ref} className="relative py-12 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            7-Day Detailed Itinerary
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            A day-by-day breakdown of your spiritual journey through Tawang
          </p>
        </div>

        {/* Itinerary Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className={`border border-border rounded-lg overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedDay(expandedDay === index ? -1 : index)}
                className="w-full p-6 bg-card hover:bg-card/80 transition-colors duration-300 flex items-center justify-between group"
              >
                <div className="text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-serif font-bold text-accent">Day {item.day}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-foreground">{item.title}</h3>
                      <p className="text-foreground/60 text-sm">{item.distance} • {item.time}</p>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`text-accent transition-transform duration-300 ${expandedDay === index ? "rotate-180" : ""}`}
                  size={24}
                />
              </button>

              {/* Expanded Content */}
              {expandedDay === index && (
                <div className="p-6 bg-background border-t border-border">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-foreground/80 leading-relaxed mb-4">{item.description}</p>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg h-48 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
