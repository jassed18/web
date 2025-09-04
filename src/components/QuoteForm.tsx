import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Calculator } from "lucide-react";

export function QuoteForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    features: [] as string[],
    urgency: ""
  });

  const services = [
    "Automatización de Procesos",
    "Desarrollo de Aplicación Web",
    "Desarrollo de App Móvil", 
    "Integración de IA",
    "Consultoría Técnica",
    "Integración de Sistemas"
  ];

  const budgetRanges = [
    "$5,000 - $15,000",
    "$15,000 - $30,000", 
    "$30,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const features = [
    "Dashboard en tiempo real",
    "APIs personalizadas", 
    "Integración con IA",
    "App móvil incluida",
    "Automatización de workflows",
    "Análisis y reportes",
    "Soporte 24/7",
    "Capacitación del equipo"
  ];

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.serviceType || !formData.projectDescription) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "¡Cotización enviada!",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
      variant: "default"
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceType: "",
      projectDescription: "",
      budget: "",
      timeline: "",
      features: [],
      urgency: ""
    });
  };

  return (
    <section id="quote-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Solicita tu</span> Cotización
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y recibe una propuesta personalizada en 24 horas
          </p>
        </div>

        <Card className="card-premium animate-scale-in">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl">Configurador de Proyecto</CardTitle>
            </div>
            <CardDescription className="text-base">
              Completa la información para recibir una cotización precisa y detallada
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="email@empresa.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Nombre de la empresa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="serviceType">Tipo de servicio *</Label>
                <Select value={formData.serviceType} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo de servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Descripción del proyecto *</Label>
                <Textarea
                  id="description"
                  value={formData.projectDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                  placeholder="Describe tu proyecto, objetivos, funcionalidades requeridas, usuarios objetivo, etc."
                  rows={4}
                  required
                />
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Presupuesto estimado</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Rango de presupuesto" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline deseado</Label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tiempo estimado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2 meses">1-2 meses</SelectItem>
                      <SelectItem value="3-4 meses">3-4 meses</SelectItem>
                      <SelectItem value="5-6 meses">5-6 meses</SelectItem>
                      <SelectItem value="6+ meses">6+ meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Features Selection */}
              <div className="space-y-4">
                <Label>Características adicionales</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                      />
                      <Label htmlFor={feature} className="text-sm font-normal cursor-pointer">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" className="w-full btn-hero text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Cotización
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>¿Prefieres hablar directamente? Contáctanos por WhatsApp: <span className="text-primary font-medium">+1 (555) 123-4567</span></p>
        </div>
      </div>
    </section>
  );
}