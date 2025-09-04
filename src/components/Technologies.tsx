import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    category: "Automatización",
    tools: [
      {
        name: "N8N",
        description: "Automatización de workflows visuales y escalables",
        color: "bg-red-500/20 text-red-400 border-red-500/30"
      },
      {
        name: "Make (Integromat)",
        description: "Integración avanzada de aplicaciones y servicios",
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
      },
      {
        name: "Zapier",
        description: "Automatización simple y efectiva entre apps",
        color: "bg-orange-500/20 text-orange-400 border-orange-500/30"
      }
    ]
  },
  {
    category: "Inteligencia Artificial",
    tools: [
      {
        name: "Watsonx.IA",
        description: "Plataforma empresarial de IA de IBM",
        color: "bg-blue-600/20 text-blue-300 border-blue-600/30"
      },
      {
        name: "OpenAI GPT",
        description: "Modelos de lenguaje avanzados para procesamiento de texto",
        color: "bg-green-500/20 text-green-400 border-green-500/30"
      },
      {
        name: "TensorFlow",
        description: "Framework de machine learning para modelos personalizados",
        color: "bg-orange-600/20 text-orange-300 border-orange-600/30"
      }
    ]
  },
  {
    category: "Desarrollo Web",
    tools: [
      {
        name: "React",
        description: "Interfaces de usuario dinámicas y componentes reutilizables",
        color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      },
      {
        name: "Node.js",
        description: "Backend escalable y APIs REST/GraphQL",
        color: "bg-green-600/20 text-green-300 border-green-600/30"
      },
      {
        name: "Next.js",
        description: "Framework full-stack para aplicaciones web modernas",
        color: "bg-gray-500/20 text-gray-300 border-gray-500/30"
      }
    ]
  },
  {
    category: "Backend & APIs",
    tools: [
      {
        name: "Python",
        description: "Desarrollo backend, APIs y scripts de automatización",
        color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      },
      {
        name: "FastAPI",
        description: "APIs modernas y documentación automática",
        color: "bg-teal-500/20 text-teal-400 border-teal-500/30"
      },
      {
        name: "PostgreSQL",
        description: "Base de datos robusta para aplicaciones empresariales",
        color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
      }
    ]
  }
];

export function Technologies() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tecnologías</span> que Dominamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos las herramientas más avanzadas y confiables del mercado para garantizar 
            soluciones robustas y escalables
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technologies.map((category, categoryIndex) => (
            <Card 
              key={category.category} 
              className="card-premium animate-slide-in-right"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">
                  {category.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {category.tools.map((tool, toolIndex) => (
                  <div 
                    key={tool.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (toolIndex * 0.1)}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <Badge 
                        variant="outline" 
                        className={`${tool.color} font-semibold px-3 py-1 shrink-0`}
                      >
                        {tool.name}
                      </Badge>
                      <div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Proyectos Completados" },
            { number: "98%", label: "Satisfacción del Cliente" },
            { number: "24/7", label: "Soporte Técnico" },
            { number: "3 años", label: "Experiencia Promedio" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}