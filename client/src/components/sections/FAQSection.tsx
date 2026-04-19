import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(0);
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

  const faqs = [
    {
      question: "Do I need a permit for Tawang?",
      answer: "Yes, Inner Line Permit (ILP) is required. We handle it for you completely, so you don't need to worry about paperwork.",
    },
    {
      question: "How far is Tawang from Guwahati?",
      answer: "Tawang is approximately 450 km from Guwahati, covered over 2-3 days with overnight stops in Bhalukpong and Dirang.",
    },
    {
      question: "Is it safe to travel to Tawang?",
      answer: "Yes, very safe. There is a strong Indian Army presence and the local people are extremely friendly and welcoming to tourists.",
    },
    {
      question: "Can I customize my itinerary?",
      answer: "Absolutely. We specialize in custom packages for families, solo travelers, photography groups, and corporate retreats. Contact us for details.",
    },
    {
      question: "What about phone and internet connectivity?",
      answer: "Connectivity is limited in some areas. BSNL works best. We recommend preparing for a digital detox and enjoying the offline experience.",
    },
    {
      question: "Is Tawang suitable for elderly travelers?",
      answer: "Yes, with the right itinerary and comfortable stays. We can design a slower-paced tour with rest days and easier routes.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="relative py-12 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Everything you need to know about traveling to Tawang
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border rounded-lg overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Question */}
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
                className="w-full p-6 bg-card hover:bg-card/80 transition-colors duration-300 flex items-center justify-between group"
              >
                <h3 className="text-lg font-serif font-bold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`text-accent transition-transform duration-300 flex-shrink-0 ml-4 ${expandedFaq === index ? "rotate-180" : ""}`}
                  size={24}
                />
              </button>

              {/* Answer */}
              {expandedFaq === index && (
                <div className="p-6 bg-background border-t border-border">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
