import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Globe, Smartphone, Workflow, Brain, Code } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automatización de Procesos",
    description: "Optimiza tus flujos de trabajo con IA y automatización inteligente usando N8N, Make y herramientas avanzadas.",
    features: ["Workflows automatizados", "Integración de APIs", "Procesamiento inteligente", "Reducción de tareas manuales"]
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description: "Desarrollo de aplicaciones web modernas y escalables con React, Node.js y las mejores prácticas.",
    features: ["React & Next.js", "Backends robustos", "Bases de datos optimizadas", "Despliegue en la nube"]
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones móviles nativas e híbridas para iOS y Android con experiencias de usuario excepcionales.",
    features: ["Desarrollo nativo", "Apps híbridas", "UX/UI moderno", "Integración con APIs"]
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Implementación de soluciones de IA personalizadas con Watsonx.IA y modelos de machine learning.",
    features: ["Modelos personalizados", "Análisis predictivo", "Procesamiento de lenguaje", "Visión por computadora"]
  },
  {
    icon: Workflow,
    title: "Integración de Sistemas",
    description: "Conectamos tus herramientas existentes para crear un ecosistema tecnológico unificado.",
    features: ["APIs personalizadas", "Sincronización de datos", "Middleware inteligente", "Monitoreo en tiempo real"]
  },
  {
    icon: Code,
    title: "Consultoría Técnica",
    description: "Asesoramiento especializado para optimizar tu arquitectura tecnológica y procesos digitales.",
    features: ["Auditoría técnica", "Arquitectura de software", "Mejores prácticas", "Roadmap tecnológico"]
  }
];

export function Services() {
  return (
    <section className="py-20 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Servicios</span> Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para transformar tu negocio con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-premium group hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}