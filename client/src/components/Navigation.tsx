import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Packages", href: "/#packages" },
    { label: "Itinerary", href: "/#itinerary" },
    { label: "Gallery", href: "/gallery", isRoute: true },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string, isRoute?: boolean) => {
    setIsMobileMenuOpen(false);
    if (!isRoute && href.startsWith("/#")) {
      const hash = href.replace("/", "");
      const isHomePage = window.location.pathname === "/";
      
      if (isHomePage) {
        e.preventDefault();
        window.history.pushState(null, "", href);
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-serif font-bold text-accent">
                CloudNine Tawang
              </div>
            </div>
            <span className="text-xs text-accent/80 font-medium italic tracking-wide ml-1 -mt-1">
              "Vocal for Local"
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Book Your Journey
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-accent"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                    className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2 animate-fade-in-up cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a
                href="#contact"
                className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Your Journey
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Prayer Flag Top Accent */}
      <div className="fixed top-20 left-0 right-0 h-1 z-40 flex">
        <div className="flex-1 prayer-flag-red"></div>
        <div className="flex-1 prayer-flag-blue"></div>
        <div className="flex-1 prayer-flag-white"></div>
        <div className="flex-1 prayer-flag-green"></div>
        <div className="flex-1 prayer-flag-yellow"></div>
      </div>
    </>
  );
}
