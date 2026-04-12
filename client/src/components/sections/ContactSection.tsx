import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travelers: "",
    package: "tawang-express",
    message: "",
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    const message = `New booking inquiry from ${formData.name}. Phone: ${formData.phone}, Email: ${formData.email}`;
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      travelDate: "",
      travelers: "",
      package: "tawang-express",
      message: "",
    });
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-card/50">
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
                  <p className="text-foreground/70">+91 XXXXX XXXXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">info@cloud9tawang.com</p>
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
                href="https://wa.me/919876543210?text=Hi%20Cloud9%20Tawang%2C%20I%27m%20interested%20in%20booking%20a%20tour"
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
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Name */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Travel Date */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Preferred Travel Date</label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Number of Travelers */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                min="1"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="1"
              />
            </div>

            {/* Package */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Package Interest</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
              >
                <option value="tawang-express">Tawang Express (5D/4N)</option>
                <option value="tawang-complete">Tawang Complete (7D/6N)</option>
                <option value="tawang-beyond">Tawang & Beyond (9D/8N)</option>
                <option value="custom">Custom Tour</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-foreground font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors duration-300"
                placeholder="Tell us about your travel preferences..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Cloud9%20Tawang%2C%20I%27m%20interested%20in%20booking%20a%20tour"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-lg transition-all duration-300 hover:scale-110 z-40"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}
