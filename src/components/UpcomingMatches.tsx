import MatchCard from "./MatchCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const upcomingMatches = [
  {
    homeTeam: "Leeds United",
    awayTeam: "Sheffield United",
    date: "25 Jan",
    time: "15:00",
    venue: "Elland Road",
    competition: "Championship",
    isHome: true,
  },
  {
    homeTeam: "Burnley",
    awayTeam: "Leeds United",
    date: "1 Feb",
    time: "12:30",
    venue: "Turf Moor",
    competition: "Championship",
    isHome: false,
  },
  {
    homeTeam: "Leeds United",
    awayTeam: "Sunderland",
    date: "8 Feb",
    time: "15:00",
    venue: "Elland Road",
    competition: "Championship",
    isHome: true,
  },
];

const UpcomingMatches = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Kommande</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Matcher</h2>
          </div>
          <Button variant="ghost" className="text-primary hover:text-accent">
            Visa Alla <ChevronRight size={18} className="ml-1" />
          </Button>
        </div>

        {/* Match Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
