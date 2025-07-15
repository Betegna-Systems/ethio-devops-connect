import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "DevOps Staff Augmentation",
      description: "Dedicated remote DevOps engineers integrated into your team",
      features: [
        "Full-time (40+ hrs/week) - Best for long-term projects",
        "Part-time (20 hrs/week) - Ideal for startups",
        "Junior DevOps: $2,500-$3,500/month",
        "Mid-Level DevOps: $4,000-$6,000/month",
        "Senior DevOps/SRE: $7,000-$9,000/month"
      ],
      icon: "👥"
    },
    {
      title: "Project-Based Solutions",
      description: "End-to-end automation and cloud modernization",
      features: [
        "CI/CD Pipeline Setup: $5,000-$20,000",
        "Cloud Migration (AWS/GCP/Azure): $10,000-$50,000",
        "Kubernetes Cluster Deployment: $8,000-$30,000",
        "Infrastructure as Code implementation",
        "Security & compliance hardening"
      ],
      icon: "🚀"
    },
    {
      title: "Managed DevOps",
      description: "Ongoing support and optimization",
      features: [
        "Proactive monitoring & optimization",
        "24/7 incident response",
        "Performance tuning & scaling",
        "Security updates & patches",
        "Starting at $3,000/month"
      ],
      icon: "⚙️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Service Offerings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from flexible engagement models designed to meet your specific DevOps needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary-blue mr-2">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="professional" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;