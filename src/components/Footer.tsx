import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-lg">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wide">LUSS</span>
                <span className="text-[10px] text-primary-foreground/60 -mt-1">Est. 2005</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Sveriges officiella Leeds United supporterklubb. Marching On Together sedan 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              {["Om Oss", "Matcher", "Tabell", "Forum", "Bli Medlem"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail size={16} />
                <a href="mailto:info@luss.se" className="hover:text-accent transition-colors">
                  info@luss.se
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={16} />
                <span>Stockholm, Sverige</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-4">Följ Oss</h4>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 LUSS - Leeds United Supportrar i Sverige. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">Integritetspolicy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">Villkor</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
