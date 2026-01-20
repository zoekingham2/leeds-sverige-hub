import { Button } from "@/components/ui/button";
import { ChevronRight, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-hero-gradient flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Accent Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Users size={16} className="text-accent" />
            <span className="text-primary-foreground/90 text-sm">Över 500 medlemmar i Sverige</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-slide-up">
            MARCHING ON
            <span className="block text-gradient-gold">TOGETHER</span>
          </h1>

          {/* Subtitle */}
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Välkommen till Sveriges officiella Leeds United supporterklubb. 
            Tillsammans följer vi The Whites genom alla matcher, hemma och borta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="accent" size="lg" className="btn-glow text-lg px-8 py-6">
              Bli Medlem Idag
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              Läs Mer Om Oss
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="font-display text-4xl md:text-5xl text-accent mb-2">1919</div>
              <div className="text-primary-foreground/60 text-sm uppercase tracking-wide">Grundat</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-accent mb-2">500+</div>
              <div className="text-primary-foreground/60 text-sm uppercase tracking-wide">Medlemmar</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-accent mb-2">3x</div>
              <div className="text-primary-foreground/60 text-sm uppercase tracking-wide">Ligamästare</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(220, 20%, 97%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
