import kukurLogo from "@/assets/kukur-logo.png";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={kukurLogo} 
                alt="Kukur" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Professional dog walking services in Pune. We provide loving, reliable care for your furry family members.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Heart className="h-4 w-4 text-orange" />
              <span>Made with love for dogs</span>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Daily Dog Walking</li>
              <li>Weekly Packages</li>
              <li>Monthly Plans</li>
              <li>Pet Transportation</li>
              <li>Health Monitoring</li>
              <li>Emergency Care</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue" />
                <span>hello@kukur.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Service Hours</h4>
            <div className="space-y-2 text-white/80">
              <div>Monday - Sunday</div>
              <div className="font-medium text-white">6:00 AM - 8:00 PM</div>
              <div className="text-sm mt-4 p-3 bg-white/10 rounded-lg">
                <div className="font-medium text-orange">Emergency Support</div>
                <div className="text-xs">24/7 available for urgent needs</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2024 Kukur. All rights reserved. | Professional Dog Walking Services in Pune
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;