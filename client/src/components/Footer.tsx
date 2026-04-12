import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Prayer Flag Bottom Border */}
      <div className="h-2 flex">
        <div className="flex-1 prayer-flag-red"></div>
        <div className="flex-1 prayer-flag-blue"></div>
        <div className="flex-1 prayer-flag-white"></div>
        <div className="flex-1 prayer-flag-green"></div>
        <div className="flex-1 prayer-flag-yellow"></div>
      </div>

      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-accent mb-2">CloudNine Tawang</h3>
            <p className="text-foreground/60 text-sm italic font-medium mb-1">"Vocal for Local"</p>
            <p className="text-foreground/60 text-sm">Travel. Experience. Remember.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#packages" className="hover:text-accent transition-colors">Packages</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground/70 text-sm mb-4">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+91 7576002914</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>cloud9tawang@gmail.com</span>
              </li>
            </ul>
            <p className="text-foreground/70 text-xs italic font-medium">Pickup available from Guwahati & Itanagar</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://www.instagram.com/cloudnine_tawang/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
              >
                <Instagram size={18} />
                <span>@cloudnine_tawang</span>
              </a>
              <a
                href="https://wa.me/917576002914?text=Hi!%20I'm%20interested%20in%20a%20Tawang%20tour%20package.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
              >
                <div className="w-[18px] h-[18px] flex items-center justify-center bg-green-500 rounded-full text-white">
                  <Phone size={12} fill="currentColor" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Copyright */}
          <div className="text-center text-foreground/60 text-sm">
            <p className="mt-2">© 2025 CloudNine Tawang. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
