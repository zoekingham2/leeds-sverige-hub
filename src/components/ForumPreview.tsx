import { MessageCircle, Users, Clock, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const forumTopics = [
  {
    title: "Tankar om säsongen hittills?",
    author: "Erik_LUFC",
    replies: 47,
    views: 234,
    lastActivity: "2 tim sedan",
    isHot: true,
  },
  {
    title: "Bästa stället att se matcher i Stockholm?",
    author: "Petra92",
    replies: 23,
    views: 156,
    lastActivity: "5 tim sedan",
    isHot: false,
  },
  {
    title: "Reseinfo: Sheffield borta 25 jan",
    author: "MOT_Admin",
    replies: 18,
    views: 89,
    lastActivity: "1 dag sedan",
    isHot: false,
  },
  {
    title: "Gnaget vann derbyt - men vi är bättre!",
    author: "WhitesForever",
    replies: 62,
    views: 445,
    lastActivity: "3 tim sedan",
    isHot: true,
  },
];

const ForumPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Gemenskap</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Forum</h2>
          </div>
          <Button variant="ghost" className="text-primary hover:text-accent">
            Gå till Forum <ChevronRight size={18} className="ml-1" />
          </Button>
        </div>

        {/* Forum Topics */}
        <div className="bg-card rounded-xl overflow-hidden card-elevated">
          <div className="divide-y divide-border">
            {forumTopics.map((topic, index) => (
              <div 
                key={index}
                className="p-6 hover:bg-muted/30 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {topic.isHot && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          <TrendingUp size={12} />
                          Populär
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors truncate">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {topic.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {topic.lastActivity}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="text-center hidden sm:block">
                      <div className="font-display text-lg text-foreground">{topic.replies}</div>
                      <div className="text-xs">svar</div>
                    </div>
                    <div className="text-center hidden md:block">
                      <div className="font-display text-lg text-foreground">{topic.views}</div>
                      <div className="text-xs">visningar</div>
                    </div>
                    <MessageCircle size={20} className="text-primary sm:hidden" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Forum CTA */}
          <div className="p-6 bg-muted/30 border-t border-border">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                Delta i diskussionen med andra fans
              </p>
              <Button variant="accent" className="btn-glow">
                Skapa Konto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumPreview;
