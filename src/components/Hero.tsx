import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

export function Hero() {
  const scrollToQuote = () => {
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Automation Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <Sparkles className="h-8 w-8 text-primary opacity-60" />
      </div>
      <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="h-6 w-6 text-secondary opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient glow-text">Automatización</span>
            <br />
            <span className="text-foreground">con Inteligencia</span>
            <br />
            <span className="text-gradient glow-text">Artificial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos tu negocio con automatización de procesos inteligentes, 
            aplicaciones web y móviles de última generación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToQuote}
              className="btn-hero group"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="btn-ghost text-foreground border-border hover:border-primary/50"
              onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <p className="text-sm text-muted-foreground mb-4">Tecnologías que dominamos:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              {['N8N', 'Watsonx.IA', 'Make', 'React', 'Python', 'Node.js'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-full bg-card border border-card-border text-card-foreground hover:border-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}