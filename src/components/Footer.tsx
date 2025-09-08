import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  Send,
  Bot
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gradient">AI Automatiza.ya</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformamos empresas con automatización inteligente, desarrollo de aplicaciones 
              y soluciones de IA personalizadas.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Automatización de Procesos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Apps Móviles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Inteligencia Artificial</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integración de Sistemas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoría Técnica</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Tecnologías</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">N8N & Make</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Watsonx.IA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">React & Next.js</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Python & FastAPI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Node.js</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TensorFlow & OpenAI</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:aisolutionsauto20@gmail.com" className="hover:text-primary transition-colors">
                  aisolutionsauto20@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+573012169668" className="hover:text-primary transition-colors">
                  +57 (301) 2169668
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bogotá, CO</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-2">Newsletter Tech</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="aisolutionsauto20@gmail.com" 
                  className="text-sm"
                />
                <Button size="sm" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row gap-4">
            <p>&copy; 2024 AI Solutions. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
          <p className="text-xs">
            Construido con React, TypeScript y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}