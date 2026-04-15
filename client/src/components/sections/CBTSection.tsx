import { useEffect, useRef, useState } from "react";

export default function CBTSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      icon: "🎭",
      title: "Authentic Cultural Experiences",
      description: "Immerse yourself in the rich traditions of the Monpa tribe",
    },
    {
      icon: "🏘️",
      title: "Village Life Experiences",
      description: "Live like a local — experience daily life in a Himalayan village",
    },
    {
      icon: "🍲",
      title: "Local Food & Cooking Sessions",
      description: "Learn to cook traditional Monpa dishes with local families",
    },
    {
      icon: "🎨",
      title: "Handicrafts & Cultural Workshops",
      description: "Create traditional art and crafts with skilled local artisans",
    },
    {
      icon: "💃",
      title: "Cultural Performances",
      description: "Witness traditional Monpa dances, music, and storytelling",
    },
    {
      icon: "🌿",
      title: "Nature Walks & Village Trails",
      description: "Explore hidden trails through pristine forests and valleys",
    },
    {
      icon: "🐄",
      title: "Farming & Animal Care Experience",
      description: "Get hands-on with yak herding, farming, and village agriculture",
    },
    {
      icon: "🔥",
      title: "Bonfire & Storytelling Nights",
      description: "Gather around the fire for local legends and mountain stories",
    },
  ];

  return (
    <section id="cbt" ref={ref} className="relative py-20 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(20 15% 8%) 50%, hsl(var(--background)) 100%)" }}>
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span
            className={`inline-block bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Expanding Horizons
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent mb-4 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Community-Based Tourism
            <br />
            <span className="text-foreground/90">with CloudNine Tawang</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p
            className={`text-foreground/50 italic text-lg md:text-xl font-serif mb-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            "Not just a trip… but a way of life."
          </p>
          <p
            className={`text-foreground/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Experience Tawang beyond sightseeing — live with locals, share their stories,
            taste authentic traditions, and become a part of the community.
          </p>
        </div>

        {/* Destination Badge */}
        <div
          className={`flex justify-center my-10 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/25 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-accent font-serif font-bold text-lg">Khamba / Grelling (CBT Village)</p>
              <p className="text-foreground/50 text-xs tracking-wide">Our Community-Based Tourism Village</p>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/40 hover:bg-card/70 transition-all duration-500 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at center, hsl(var(--accent) / 0.06), transparent 70%)" }}></div>

              <div className="relative z-10">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{activity.icon}</span>
                <h3 className="text-base font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "1300ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <span>Experience CBT with CloudNine</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <p className="text-foreground/40 text-sm mt-4 italic">Reach out to us and we'll plan your CBT experience</p>
        </div>
      </div>
    </section>
  );
}
