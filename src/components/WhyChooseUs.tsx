import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Cost Efficiency Without Compromise",
      description: "Highly skilled engineers at competitive rates (⅓ to ½ the cost of US/EU hires). No hidden fees—transparent monthly billing.",
      icon: "💰"
    },
    {
      title: "Elite Talent Pool",
      description: "Rigorous vetting: Only top 10% of Ethiopian DevOps engineers. Certified experts in AWS, Kubernetes, and Terraform.",
      icon: "🎯"
    },
    {
      title: "Timezone Advantage (GMT+3)",
      description: "Optimal overlap with EU/US hours for real-time collaboration. 24/7 support options for critical deployments.",
      icon: "🌍"
    },
    {
      title: "Risk-Free Onboarding",
      description: "2-week pilot period (pay only if satisfied). Flexible contracts (monthly, project-based, or long-term).",
      icon: "🛡️"
    }
  ];

  const technologies = [
    "AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", 
    "Ansible", "GitLab", "Jenkins", "ArgoCD", "Prometheus", 
    "Grafana", "ELK Stack", "Helm", "Istio", "Vault"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Choose EthioDevOps?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the global DevOps talent gap with Ethiopia's growing tech expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/10 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">Technologies We Master</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-primary/20 text-primary-blue border border-primary/30 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;