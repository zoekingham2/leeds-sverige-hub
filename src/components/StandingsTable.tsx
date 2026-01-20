import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const standings = [
  { position: 1, team: "Leeds United", played: 28, won: 18, drawn: 6, lost: 4, gf: 52, ga: 22, gd: 30, points: 60 },
  { position: 2, team: "Burnley", played: 28, won: 17, drawn: 7, lost: 4, gf: 48, ga: 20, gd: 28, points: 58 },
  { position: 3, team: "Sheffield United", played: 28, won: 16, drawn: 6, lost: 6, gf: 45, ga: 25, gd: 20, points: 54 },
  { position: 4, team: "Sunderland", played: 28, won: 15, drawn: 7, lost: 6, gf: 42, ga: 28, gd: 14, points: 52 },
  { position: 5, team: "Middlesbrough", played: 28, won: 14, drawn: 8, lost: 6, gf: 40, ga: 26, gd: 14, points: 50 },
  { position: 6, team: "West Bromwich", played: 28, won: 13, drawn: 9, lost: 6, gf: 38, ga: 24, gd: 14, points: 48 },
];

const StandingsTable = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Championship</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Tabellen</h2>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl overflow-hidden card-elevated max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground font-display w-16">#</TableHead>
                <TableHead className="text-primary-foreground font-display">Lag</TableHead>
                <TableHead className="text-primary-foreground font-display text-center">S</TableHead>
                <TableHead className="text-primary-foreground font-display text-center hidden sm:table-cell">V</TableHead>
                <TableHead className="text-primary-foreground font-display text-center hidden sm:table-cell">O</TableHead>
                <TableHead className="text-primary-foreground font-display text-center hidden sm:table-cell">F</TableHead>
                <TableHead className="text-primary-foreground font-display text-center hidden md:table-cell">MS</TableHead>
                <TableHead className="text-primary-foreground font-display text-center">P</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {standings.map((team) => (
                <TableRow 
                  key={team.position}
                  className={team.team === "Leeds United" ? "bg-accent/10 hover:bg-accent/20" : "hover:bg-muted/50"}
                >
                  <TableCell className="font-display text-lg">
                    <span className={`${team.position <= 2 ? "text-accent" : team.position <= 6 ? "text-primary" : "text-muted-foreground"}`}>
                      {team.position}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${team.team === "Leeds United" ? "text-primary font-display" : ""}`}>
                      {team.team}
                    </span>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">{team.played}</TableCell>
                  <TableCell className="text-center text-muted-foreground hidden sm:table-cell">{team.won}</TableCell>
                  <TableCell className="text-center text-muted-foreground hidden sm:table-cell">{team.drawn}</TableCell>
                  <TableCell className="text-center text-muted-foreground hidden sm:table-cell">{team.lost}</TableCell>
                  <TableCell className="text-center text-muted-foreground hidden md:table-cell">
                    <span className={team.gd > 0 ? "text-green-600" : team.gd < 0 ? "text-destructive" : ""}>
                      {team.gd > 0 ? `+${team.gd}` : team.gd}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-display text-lg text-foreground">{team.points}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default StandingsTable;
