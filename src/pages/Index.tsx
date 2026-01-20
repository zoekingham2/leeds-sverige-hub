import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingMatches from "@/components/UpcomingMatches";
import StandingsTable from "@/components/StandingsTable";
import ForumPreview from "@/components/ForumPreview";
import MembershipCTA from "@/components/MembershipCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <UpcomingMatches />
      <StandingsTable />
      <ForumPreview />
      <MembershipCTA />
      <Footer />
    </div>
  );
};

export default Index;
