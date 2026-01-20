import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Hem", href: "/" },
    { name: "Matcher", href: "/matches" },
    { name: "Tabell", href: "/standings" },
    { name: "Forum", href: "/forum" },
    { name: "Om Oss", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-accent-foreground text-lg">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl text-primary-foreground tracking-wide">LUSS</span>
              <span className="text-[10px] text-primary-foreground/70 -mt-1">Leeds United Supportrar i Sverige</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-primary-foreground/80 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              Logga in
            </Button>
            <Button variant="accent" className="btn-glow">
              Bli Medlem
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-primary-foreground/10">
                <Button variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 justify-start">
                  Logga in
                </Button>
                <Button variant="accent" className="btn-glow">
                  Bli Medlem
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
