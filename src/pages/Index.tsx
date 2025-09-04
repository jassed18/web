import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <Projects />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
