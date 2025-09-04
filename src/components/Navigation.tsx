import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bot, Menu, Phone } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: "Servicios", href: "#services" },
    { label: "Tecnologías", href: "#technologies" },
    { label: "Proyectos", href: "#projects-section" },
    { label: "Cotización", href: "#quote-section" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Bot className="h-8 w-8 text-primary animate-pulse-glow" />
            <span className="text-xl font-bold text-gradient">AI Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="btn-ghost"
              onClick={() => window.open('tel:+15551234567', '_self')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Llamar
            </Button>
            <Button 
              className="btn-hero text-sm px-6 py-2"
              onClick={() => scrollToSection('quote-section')}
            >
              Cotizar Proyecto
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background border-border">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold text-gradient">AI Solutions</span>
                </div>
                
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex flex-col gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="btn-ghost justify-start"
                    onClick={() => window.open('tel:+15551234567', '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Llamar Ahora
                  </Button>
                  <Button 
                    className="btn-hero justify-start"
                    onClick={() => scrollToSection('quote-section')}
                  >
                    Cotizar Proyecto
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}