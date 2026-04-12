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
            <h3 className="text-2xl font-serif font-bold text-accent mb-2">Cloud9 Tawang</h3>
            <p className="text-foreground/60 text-sm">Where the mountains meet the divine</p>
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
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>info@cloud9tawang.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/cloudnine_tawang/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Copyright */}
          <div className="text-center text-foreground/60 text-sm">
            <p>Made with love in Arunachal Pradesh</p>
            <p className="mt-2">© {currentYear} Cloud9 Tawang. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
