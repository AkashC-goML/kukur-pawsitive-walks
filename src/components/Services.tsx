import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Heart, Shield, Camera, MapPin } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Heart className="h-8 w-8 text-orange transition-all duration-300 group-hover:scale-110 group-hover:text-orange-light" />,
      title: "Personalized Care",
      description: "Individual attention and care tailored to your dog's specific needs and personality.",
      color: "orange"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue transition-all duration-300 group-hover:scale-110 group-hover:text-blue-light" />,
      title: "Flexible Scheduling",
      description: "Morning, afternoon, or evening walks scheduled to fit your busy lifestyle.",
      color: "blue"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange transition-all duration-300 group-hover:scale-110 group-hover:text-orange-light" />,
      title: "Safe & Secure",
      description: "Fully insured and trained walkers with clean driving records and background checks.",
      color: "orange"
    },
    {
      icon: <Camera className="h-8 w-8 text-blue transition-all duration-300 group-hover:scale-110 group-hover:text-blue-light" />,
      title: "Photo Updates",
      description: "Regular photos, videos, and location updates so you know your pet is having fun.",
      color: "blue"
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange transition-all duration-300 group-hover:scale-110 group-hover:text-orange-light" />,
      title: "Door-to-Door Service",
      description: "Safe transportation to and from your home with secure pickup and drop-off.",
      color: "orange"
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-blue transition-all duration-300 group-hover:scale-110 group-hover:text-blue-light" />,
      title: "Health Monitoring",
      description: "Careful observation and immediate notification of any health concerns or injuries.",
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange/5 rounded-full animate-float [animation-delay:0s]"></div>
        <div className="absolute top-1/2 -right-24 w-32 h-32 bg-blue/5 rounded-full animate-float [animation-delay:1s]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-orange/10 rounded-full animate-float [animation-delay:2s]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-orange animate-glow">Kukur</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive dog walking services with the highest standards of care, 
            safety, and professionalism. Your pet's happiness is our priority.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-orange/30 bg-white/80 backdrop-blur-sm animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 via-transparent to-${service.color === 'orange' ? 'blue' : 'orange'}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange/20 via-blue/20 to-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange/10 to-blue/10 rounded-full w-fit group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden">
                  {/* Icon Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-blue/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-orange transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
              </CardContent>
              
              {/* Hover Shine Effect */}
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;