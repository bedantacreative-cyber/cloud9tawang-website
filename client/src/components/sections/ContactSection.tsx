import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const ref = useRef<HTMLFormElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    
    // Trigger native HTML5 validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const travelDate = formData.get("travel_date") as string;
    const travelers = formData.get("travelers") as string;
    const packageInterest = formData.get("package") as string;
    const pickupCity = formData.get("pickupCity") as string;
    const message = formData.get("message") as string;

    setSubmitStatus("submitting");

    // @ts-ignore
    emailjs.send("service_hj09dp7", "template_8f8ub89", {
      from_name: name,
      phone: phone,
      email: email,
      travel_date: travelDate,
      travelers: travelers,
      package_interest: packageInterest,
      pickup_city: pickupCity,
      message: message
    }).then(
      () => {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 6000);
      },
      (error: any) => {
        console.error("FAILED...", error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 6000);
      }
    );
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" ref={sectionRef} className="relative py-12 md:py-32 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Begin Your Journey
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Get in touch with us to plan your perfect Tawang experience
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground/70">+91 7576002914</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">cloud9tawang@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/70">Tawang, Arunachal Pradesh, India</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917576002914?text=Hi!%20I'm%20interested%20in%20a%20Tawang%20tour%20package.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cloudnine_tawang/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent hover:text-accent/80 transition-colors duration-300 font-semibold"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className={`space-y-4 shadow-sm p-6 bg-background/50 rounded-xl border border-border/50 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Name */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="+91 7576002914"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Email Address <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Travel Date */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Preferred Travel Date <span className="text-red-500">*</span></label>
              <input 
                type="date" 
                name="travel_date" 
                required 
                min={today}
                style={{ colorScheme: 'dark' }}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Number of Travelers */}
              <div>
                <label className="block text-foreground font-semibold mb-2">Travelers <span className="text-red-500">*</span></label>
                <select
                  name="travelers"
                  defaultValue=""
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                >
                  <option value="" disabled>Select</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                  <option value="10+">10+</option>
                </select>
              </div>

              {/* Pickup City */}
              <div>
                <label className="block text-foreground font-semibold mb-2">Pickup City <span className="text-red-500">*</span></label>
                <select
                  name="pickupCity"
                  defaultValue=""
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                >
                  <option value="" disabled>Select City</option>
                  <option value="Guwahati">Guwahati</option>
                  <option value="Itanagar">Itanagar</option>
                </select>
              </div>
            </div>

            {/* Package */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Package Interest <span className="text-red-500">*</span></label>
              <select
                name="package"
                defaultValue=""
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
              >
                <option value="" disabled>Select a package</option>
                <option value="4N/5D Standard Tour (₹12,500)">4N/5D Standard Tour (₹12,500)</option>
                <option value="4N/5D Premium Tour (₹14,500)">4N/5D Premium Tour (₹14,500)</option>
                <option value="Group Tour - 10+ Pax (₹12,000/person)">Group Tour - 10+ Pax (₹12,000/person)</option>
                <option value="Custom Itinerary (Price on Request)">Custom Itinerary (Price on Request)</option>
                <option value="Not sure — need guidance">Not sure — need guidance</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Message <span className="text-foreground/50 font-normal">(Optional)</span></label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="Tell us about your travel preferences..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitStatus !== "idle"}
              className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                submitStatus === "success" 
                  ? "bg-green-600 text-white hover:bg-green-700" 
                  : submitStatus === "error"
                  ? "bg-red-600 text-white"
                  : "bg-accent text-accent-foreground hover:shadow-lg hover:-translate-y-1"
              } disabled:opacity-80 disabled:cursor-not-allowed`}
            >
              {submitStatus === "idle" && "Send Enquiry"}
              {submitStatus === "submitting" && "Sending..."}
              {submitStatus === "success" && "Enquiry Sent!"}
              {submitStatus === "error" && "Error Sending"}
            </button>
            {submitStatus === "success" && (
              <p className="text-green-500 font-medium text-center mt-4">
                Thank you! Your enquiry has been sent successfully. Our team will contact you within 24 hours.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 font-medium text-center mt-4">
                Something went wrong. Please call us at +91 7576002914 or message us on WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917576002914?text=Hi!%20I'm%20interested%20in%20a%20Tawang%20tour%20package."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 animate-[pulse_2s_ease-in-out_infinite]"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}
