import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="bg-primary/20 text-primary-blue border border-primary/30 px-4 py-2 rounded-full text-sm font-medium">
              DevOps Outsourcing & Staff Augmentation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            EthioDevOps
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Premium DevOps outsourcing from Ethiopia. Get high-skilled DevOps engineers and 
            cloud automation services with <span className="text-primary-blue font-semibold">40% cost savings</span> compared to Western markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Schedule a Call
            </Button>
            <Button variant="professional" size="lg" className="text-lg px-8 py-4">
              View Services
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue">40%</div>
              <div className="text-gray-400">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-teal">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-green">Top 10%</div>
              <div className="text-gray-400">Elite Talent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue">GMT+3</div>
              <div className="text-gray-400">Timezone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;