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
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "500+ Travelers", value: "500" },
    { label: "4.9 Rating", value: "4.9" },
    { label: "100% Permits", value: "100%" },
    { label: "Guwahati & Itanagar Pickup", value: "Yes" },
  ];

  const teamMembers = [
    { name: "Koncho Tsering", role: "Founder", desc: "Journey Creator | 5+ Years Turning Travel Dreams into Reality | Travel & Tourism Management Graduate" },
    { name: "Lobsang Sharup", role: "Co-Founder", desc: "Designing Journeys, Crafting Memories | Destination Expert" },
    { name: "Thupten Tsering", role: "Social Media Curator", desc: "Turning Memories into Cinematic Stories | @thupscenamatic" },
    { name: "Tsering Chombey", role: "Transport Supervisor", desc: "Managing taxis with precision and care. Ensuring smooth, timely, and comfortable rides. Your go-to transport expert." },
  ];

  return (
    <section id="about" ref={ref} className="relative py-12 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
              CloudNine Tawang
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              CloudNine Tawang — a locally rooted travel company in Tawang, dedicated to creating unforgettable journeys in the heart of the Himalayas. Established on 13th October 2025, we specialize in hosting and guiding travelers with authentic local expertise, ensuring every guest experiences Tawang beyond just sightseeing — from hidden gems and cultural richness to breathtaking high-altitude landscapes.
            </p>
            <p className="text-foreground/70 text-base leading-relaxed mb-6">
              With us, it's not just a trip — it's a complete mountain experience filled with comfort, safety, and genuine hospitality. Travel with locals. Feel the culture. Explore the unseen. Discover Tawang the CloudNine way.
            </p>
            
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mt-8">
              <h3 className="font-serif font-bold text-xl text-accent mb-3">Our Vision & Mission</h3>
              <p className="text-foreground/80 text-sm mb-3"><strong className="text-foreground">Vision:</strong> "To be the premier gateway to Tawang, creating unforgettable travel experiences while preserving and promoting the region's rich culture and natural beauty."</p>
              <div className="text-foreground/80 text-sm">
                <strong className="text-foreground block mb-1">Mission:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Provide personalized, seamless, and immersive travel experiences in Tawang.</li>
                  <li>Support and collaborate with local communities through community-based tourism (CBT).</li>
                  <li>Promote sustainable tourism that respects Tawang's heritage, environment, and traditions.</li>
                  <li>Continuously innovate in services to cater to every traveler's needs and comfort.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/monastery-interior-monks-KXXGk2hbzmDJ7yo8c7SGV8.webp"
              alt="Monastery Interior"
              className="rounded-lg shadow-soft w-full h-auto min-h-[250px] max-h-[300px] md:min-h-96 md:max-h-none object-cover mb-4"
            />
            <div className="bg-card p-5 rounded-lg shadow-soft border border-border">
              <h3 className="text-xl font-bold font-serif text-accent mb-3">Our History</h3>
              <ul className="text-sm text-foreground/70 space-y-2">
                <li><strong className="text-foreground">Founded:</strong> 13th October 2025 — specializing in curated travel across Tawang, Arunachal Pradesh.</li>
                <li><strong className="text-foreground">Experience:</strong> Bringing Tawang to life — from iconic sights to hidden gems — with comfort, safety, and local expertise.</li>
                <li><strong className="text-foreground">Upcoming Trends:</strong> Community-Based Tourism (CBT) — connect, explore, and travel like a local.</li>
                <li><strong className="text-foreground">Progress:</strong> Continuously catering to guests with authentic, local experiences that connect you to culture, nature, and tradition.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`mt-20 pt-16 border-t border-border transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-accent mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg text-center shadow-soft border border-border/50 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold font-serif">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-foreground/60 text-xs leading-relaxed">{member.desc}</p>
              </div>
            ))}
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
