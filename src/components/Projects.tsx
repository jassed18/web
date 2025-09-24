import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, GitBranch, Zap, TrendingUp, Calendar, Users, Clock, Award } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión Empresarial",
    description: "Automatización completa de procesos de ventas, inventario y facturación para empresa retail.",
    image: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
    tags: ["N8N", "React", "PostgreSQL", "Python"],
    metrics: ["80% reducción en tiempo de procesamiento", "95% precisión en inventarios"],
    icon: TrendingUp,
    category: "Automatización",
    details: {
      client: "RetailCorp S.A.",
      duration: "4 meses",
      teamSize: "5 desarrolladores",
      fullDescription: "Desarrollamos un sistema integral que conecta todos los procesos comerciales de la empresa. La solución incluye automatización de workflows de ventas, gestión inteligente de inventarios con predicciones de demanda, y un sistema de facturación automatizado que se integra con múltiples plataformas de pago.",
      challenges: [
        "Integración con sistemas legacy existentes",
        "Migración de datos sin interrumpir operaciones",
        "Capacitación del personal en nuevos procesos"
      ],
      solutions: [
        "API Gateway personalizado para conectar sistemas antiguos",
        "Migración gradual por módulos con rollback automático",
        "Portal de entrenamiento interactivo con simulaciones"
      ],
      results: [
        "Reducción del 80% en tiempo de procesamiento de órdenes",
        "Precisión del 95% en control de inventarios",
        "ROI del 340% en el primer año",
        "Eliminación de errores manuales en un 98%"
      ]
    }
  },
  {
    id: 2,
    title: "Chatbot IA para Soporte",
    description: "Bot inteligente con procesamiento de lenguaje natural para atención al cliente 24/7.",
    image: "bg-gradient-to-br from-green-600/20 to-teal-600/20",
    tags: ["Watsonx.IA", "Node.js", "React", "WebSocket"],
    metrics: ["90% resolución automática", "50% reducción en tickets"],
    icon: Zap,
    category: "Inteligencia Artificial",
    details: {
      client: "TechSupport Plus",
      duration: "3 meses",
      teamSize: "4 especialistas",
      fullDescription: "Implementamos un asistente virtual avanzado que utiliza IBM Watsonx.IA para comprender y resolver consultas de clientes en tiempo real. El sistema aprende continuamente de las interacciones para mejorar sus respuestas y puede escallar casos complejos al equipo humano de soporte.",
      challenges: [
        "Entrenamiento del modelo con terminología específica de la empresa",
        "Integración con múltiples canales de comunicación",
        "Mantenimiento de contexto en conversaciones largas"
      ],
      solutions: [
        "Dataset personalizado con 10,000+ interacciones reales",
        "Conectores universales para WhatsApp, Telegram, web y email",
        "Sistema de memoria conversacional con Redis"
      ],
      results: [
        "90% de resolución automática de consultas",
        "Reducción del 50% en tickets de soporte humano",
        "Tiempo de respuesta promedio de 2 segundos",
        "Satisfacción del cliente del 4.7/5"
      ]
    }
  },
  {
    id: 3,
    title: "App Móvil de Delivery",
    description: "Aplicación completa para gestión de pedidos, seguimiento en tiempo real y pagos integrados.",
    image: "bg-gradient-to-br from-orange-600/20 to-red-600/20",
    tags: ["React Native", "FastAPI", "Stripe", "Google Maps"],
    metrics: ["1000+ usuarios activos", "4.8★ rating en stores"],
    icon: GitBranch,
    category: "Desarrollo Móvil",
    details: {
      client: "QuickDelivery",
      duration: "6 meses",
      teamSize: "6 desarrolladores",
      fullDescription: "Creamos una aplicación móvil completa que revoluciona la experiencia de delivery. Incluye geolocalización en tiempo real, sistema de pagos seguro, notificaciones push inteligentes, y un panel administrativo para gestionar repartidores y restaurantes afiliados.",
      challenges: [
        "Optimización de rutas en tiempo real",
        "Gestión de múltiples tipos de usuarios",
        "Escalabilidad para picos de demanda"
      ],
      solutions: [
        "Algoritmo de routing optimizado con machine learning",
        "Arquitectura multi-tenant con roles dinámicos",
        "Infraestructura auto-escalable en AWS"
      ],
      results: [
        "1000+ usuarios activos diarios",
        "Rating promedio de 4.8/5 en app stores",
        "Tiempo promedio de entrega reducido en 25%",
        "Aumento del 60% en pedidos recurrentes"
      ]
    }
  },
  {
    id: 4,
    title: "Dashboard Analytics IA",
    description: "Panel de control con análisis predictivo y visualización de datos en tiempo real.",
    image: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    metrics: ["Predicciones 85% precisas", "Tiempo real < 100ms"],
    icon: TrendingUp,
    category: "Analytics",
    details: {
      client: "DataCorp Analytics",
      duration: "5 meses",
      teamSize: "7 especialistas",
      fullDescription: "Desarrollamos una plataforma de analytics avanzada que combina visualización de datos en tiempo real con modelos predictivos de machine learning. La solución procesa millones de registros y genera insights accionables para la toma de decisiones estratégicas.",
      challenges: [
        "Procesamiento de big data en tiempo real",
        "Modelos predictivos con alta precisión",
        "Visualizaciones interactivas complejas"
      ],
      solutions: [
        "Pipeline de datos con Apache Kafka y Spark",
        "Ensemble de modelos ML con validación cruzada",
        "Componentes de visualización optimizados con WebGL"
      ],
      results: [
        "Predicciones con 85% de precisión",
        "Procesamiento en tiempo real < 100ms",
        "Reducción de 40% en costos operativos",
        "Identificación temprana de oportunidades de negocio"
      ]
    }
  },
  {
    id: 5,
    title: "Integración Multi-Plataforma",
    description: "Sincronización automática entre CRM, ERP y plataformas de e-commerce.",
    image: "bg-gradient-to-br from-indigo-600/20 to-blue-600/20",
    tags: ["Make", "Shopify", "Salesforce", "SAP"],
    metrics: ["99.9% uptime", "Sincronización instantánea"],
    icon: Zap,
    category: "Integración",
    details: {
      client: "OmniCommerce Ltd",
      duration: "4 meses",
      teamSize: "5 integradores",
      fullDescription: "Implementamos una solución de integración robusta que conecta sistemas empresariales críticos. La plataforma sincroniza datos de clientes, productos, inventario y pedidos entre Salesforce, SAP, Shopify y sistemas internos, eliminando silos de información y duplicación de datos.",
      challenges: [
        "Formatos de datos incompatibles entre sistemas",
        "Manejo de grandes volúmenes de sincronización",
        "Garantizar consistencia de datos en tiempo real"
      ],
      solutions: [
        "Transformadores de datos personalizados con Make",
        "Cola de mensajes con retry automático",
        "Sistema de versionado y rollback de datos"
      ],
      results: [
        "99.9% de uptime garantizado",
        "Sincronización instantánea entre plataformas",
        "Reducción de 70% en errores de datos",
        "Ahorro de 30 horas/semana en tareas manuales"
      ]
    }
  },
  {
    id: 6,
    title: "Plataforma E-learning IA",
    description: "Sistema de aprendizaje adaptativo con recomendaciones personalizadas por IA.",
    image: "bg-gradient-to-br from-teal-600/20 to-green-600/20",
    tags: ["Next.js", "AI/ML", "Video Streaming", "MongoDB"],
    metrics: ["75% mejor retención", "Personalización 100%"],
    icon: GitBranch,
    category: "Educación",
    details: {
      client: "EduTech Academy",
      duration: "7 meses",
      teamSize: "8 desarrolladores",
      fullDescription: "Creamos una plataforma educativa inteligente que se adapta al ritmo y estilo de aprendizaje de cada estudiante. Utiliza algoritmos de IA para recomendar contenido personalizado, evaluar progreso automáticamente y optimizar rutas de aprendizaje para maximizar la retención de conocimiento.",
      challenges: [
        "Personalización efectiva para diferentes estilos de aprendizaje",
        "Streaming de video de alta calidad con baja latencia",
        "Gamificación que motive el aprendizaje continuo"
      ],
      solutions: [
        "Algoritmos de recomendación basados en patrones de aprendizaje",
        "CDN global con transcodificación adaptiva",
        "Sistema de logros y recompensas con IA"
      ],
      results: [
        "75% de mejora en retención de estudiantes",
        "Personalización del 100% del contenido",
        "Reducción de 40% en tiempo para completar cursos",
        "NPS de 85 entre estudiantes y educadores"
      ]
    }
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRequestSimilarProject = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };
  return (
    <section id="projects-section" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Proyectos</span> Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos de éxito que demuestran nuestro expertise en automatización, 
            IA y desarrollo de aplicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-premium group hover:scale-105 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Visual */}
              <div className={`h-40 ${project.image} relative flex items-center justify-center`}>
                <project.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform" />
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-black/20 text-white border-white/20"
                >
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs bg-card-hover border-card-border hover:border-primary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Resultados:</h4>
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mr-3" />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full btn-ghost group/btn"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsDialogOpen(true);
                      }}
                    >
                      Ver Detalles
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto sm:w-full">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${project.image}`}>
                          <project.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                          <DialogDescription className="text-lg">
                            {project.details.fullDescription}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                        <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-card-hover">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Cliente</p>
                          <p className="font-semibold">{project.details.client}</p>
                        </div>
                      </div>
                        <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-card-hover">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duración</p>
                          <p className="font-semibold">{project.details.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-card-hover">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Equipo</p>
                          <p className="font-semibold">{project.details.teamSize}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {/* Desafíos */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Desafíos Principales</h4>
                        <div className="space-y-3">
                          {project.details.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-destructive rounded-full mt-2 shrink-0" />
                              <p className="text-sm text-muted-foreground">{challenge}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Soluciones */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Soluciones Implementadas</h4>
                        <div className="space-y-3">
                          {project.details.solutions.map((solution, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0" />
                              <p className="text-sm text-muted-foreground">{solution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tecnologías */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3 text-primary">Tecnologías Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            className="bg-card-hover border-card-border"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Resultados */}
                    <div className="mt-4 sm:mt-6">
                      <h4 className="text-base sm:text-lg font-semibold mb-3 text-primary">Resultados Obtenidos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                        {project.details.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
                            <div className="w-2 h-2 bg-success rounded-full shrink-0" />
                            <p className="text-sm font-medium">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <Button 
                        className="w-full btn-hero"
                        onClick={handleRequestSimilarProject}
                      >
                        Solicitar Proyecto Similar
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-premium max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-muted-foreground mb-6">
                Convierte tu idea en realidad con nuestro equipo de expertos en automatización y desarrollo.
              </p>
              <Button 
                size="lg"
                className="btn-hero"
                onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Iniciar Proyecto
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}