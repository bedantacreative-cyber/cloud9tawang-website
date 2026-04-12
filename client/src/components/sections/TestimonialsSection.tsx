import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: "Priya Sharma",
      city: "Delhi",
      rating: 5,
      quote: "Cloud9 Tawang made our spiritual journey unforgettable. Every detail was perfect, from the permits to the homestays. We felt truly cared for.",
    },
    {
      name: "Rajesh Kumar",
      city: "Bangalore",
      rating: 5,
      quote: "The Bumla Pass trek was the highlight of our lives. The team's expertise and warmth made us feel safe and welcomed in this sacred land.",
    },
    {
      name: "Anjali Patel",
      city: "Mumbai",
      rating: 5,
      quote: "I came alone and left with a family. Cloud9 Tawang's local guides shared stories and wisdom that changed my perspective on life.",
    },
    {
      name: "Marco Rossi",
      city: "Italy",
      rating: 5,
      quote: "As a photographer, I was blown away by the locations and the team's patience. Every sunrise and sunset was pure magic.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="relative py-20 md:py-32 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Traveler Stories
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Hear from those who have experienced the magic of Tawang with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-background rounded-lg p-8 md:p-12 shadow-soft border border-border">
            {/* Quote Marks */}
            <div className="text-5xl text-accent/30 mb-4 font-serif">"</div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6 font-serif italic">
              {testimonials[currentIndex].quote}
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Author */}
            <div className="mb-6">
              <p className="font-serif font-bold text-foreground text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-foreground/60">{testimonials[currentIndex].city}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors duration-300 text-accent"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-accent w-8" : "bg-accent/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors duration-300 text-accent"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
