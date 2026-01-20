import { Button } from "@/components/ui/button";
import { Check, CreditCard, Users, Ticket, Gift } from "lucide-react";

const benefits = [
  { icon: Users, text: "Tillgång till alla forumtrådar" },
  { icon: Ticket, text: "Rabatterade matchbiljetter" },
  { icon: Gift, text: "Exklusiva medlemsevent" },
  { icon: CreditCard, text: "Medlemskort & merchandise" },
];

const MembershipCTA = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Bli en del av familjen</span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mt-4 mb-6">
                Bli Medlem i LUSS
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Gå med i Sveriges största Leeds United-community och få tillgång till exklusiva förmåner, 
                event och en gemenskap av likasinnade fans.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <benefit.icon size={16} className="text-accent" />
                    </div>
                    <span className="text-primary-foreground/90">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Pricing Card */}
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="text-center mb-8">
                <span className="text-muted-foreground text-sm uppercase tracking-wider">Årsmedlemskap</span>
                <div className="mt-4">
                  <span className="font-display text-5xl text-foreground">299</span>
                  <span className="text-muted-foreground text-lg ml-1">kr/år</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {["Full forumåtkomst", "Nyhetsbrev & uppdateringar", "Rabatter på events", "Medlemskort"].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check size={18} className="text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="accent" size="lg" className="w-full btn-glow text-lg py-6">
                Bli Medlem Nu
              </Button>

              <p className="text-center text-muted-foreground text-sm mt-4">
                Säker betalning med Swish eller kort
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;
