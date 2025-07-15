import { Mail, Globe, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero border-t border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-white">
                EthioDevOps Solutions
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Engineering the Future, Efficiently. Premium DevOps outsourcing 
              with 40% cost savings and elite Ethiopian talent.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>contact@ethiodevops.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe size={16} />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>Schedule a Call</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Staff Augmentation</div>
              <div>Project-Based Solutions</div>
              <div>Managed DevOps</div>
              <div>Cloud Migration</div>
              <div>CI/CD Implementation</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} EthioDevOps Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>GMT+3 Timezone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;