import { Calendar, MapPin } from "lucide-react";

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
  isHome: boolean;
}

const MatchCard = ({ homeTeam, awayTeam, date, time, venue, competition, isHome }: MatchCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 card-elevated hover:scale-[1.02] transition-all duration-300 border border-border/50">
      {/* Competition Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {competition}
        </span>
        {isHome ? (
          <span className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            Hemma
          </span>
        ) : (
          <span className="text-xs font-medium uppercase tracking-wider text-accent-foreground bg-accent/20 px-3 py-1 rounded-full">
            Borta
          </span>
        )}
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary flex items-center justify-center">
            <span className="font-display text-primary-foreground text-lg">{homeTeam.charAt(0)}</span>
          </div>
          <span className={`font-display text-lg ${homeTeam === "Leeds United" ? "text-primary" : "text-foreground"}`}>
            {homeTeam}
          </span>
        </div>
        
        <div className="px-4">
          <span className="font-display text-2xl text-muted-foreground">vs</span>
        </div>
        
        <div className="flex-1 text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
            <span className="font-display text-secondary-foreground text-lg">{awayTeam.charAt(0)}</span>
          </div>
          <span className={`font-display text-lg ${awayTeam === "Leeds United" ? "text-primary" : "text-foreground"}`}>
            {awayTeam}
          </span>
        </div>
      </div>

      {/* Match Info */}
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>{date} • {time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>{venue}</span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
