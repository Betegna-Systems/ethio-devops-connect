import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/10 backdrop-blur-sm border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-xl text-gray-300">
                Modernize Your Infrastructure with Top-Tier DevOps Talent at Half the Cost
              </CardDescription>
              <div className="bg-accent-green/20 text-accent-green border border-accent-green/30 px-6 py-3 rounded-lg inline-block mt-4">
                <span className="font-semibold">Special Offer:</span> First month 15% discount for new clients
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white">Next Steps</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl">📞</div>
                    <div className="text-white font-medium">Schedule a call</div>
                    <div className="text-gray-400 text-sm">Discuss your DevOps needs</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">📋</div>
                    <div className="text-white font-medium">Receive proposal</div>
                    <div className="text-gray-400 text-sm">Tailored with engineer profiles</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">🚀</div>
                    <div className="text-white font-medium">Start pilot</div>
                    <div className="text-gray-400 text-sm">2-week trial, no commitment</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <Button variant="cta" size="lg" className="text-lg px-12 py-4">
                  Schedule Your Discovery Call
                </Button>
                
                <div className="space-y-4 text-gray-300">
                  <h4 className="text-xl font-semibold text-white">Contact Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">Email:</span> contact@ethiodevops.com
                    </div>
                    <div>
                      <span className="font-medium">Website:</span> Coming Soon
                    </div>
                  </div>
                  <p className="text-lg text-primary-blue font-semibold">
                    EthioDevOps Solutions – Engineering the Future, Efficiently.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;