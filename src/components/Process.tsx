const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "Understand your infrastructure needs and current challenges",
      icon: "💬"
    },
    {
      number: "02", 
      title: "Engineer Matching",
      description: "Assign the best-fit DevOps expert based on your requirements",
      icon: "🎯"
    },
    {
      number: "03",
      title: "2-Week Pilot",
      description: "Test the collaboration risk-free before full commitment",
      icon: "🧪"
    },
    {
      number: "04",
      title: "Full Deployment",
      description: "Scale up as needed with ongoing support and optimization",
      icon: "🚀"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent, and risk-free approach to DevOps collaboration
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-primary z-0 transform translate-x-4" />
                )}
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-primary-blue font-bold">{step.number}</div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;