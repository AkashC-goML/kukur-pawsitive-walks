import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Heart, Shield, Camera, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-8 w-8 text-orange" />,
      title: "Personalized Care",
      description: "Individual attention and care tailored to your dog's specific needs and personality."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue" />,
      title: "Flexible Scheduling",
      description: "Morning, afternoon, or evening walks scheduled to fit your busy lifestyle."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange" />,
      title: "Safe & Secure",
      description: "Fully insured and trained walkers with clean driving records and background checks."
    },
    {
      icon: <Camera className="h-8 w-8 text-blue" />,
      title: "Photo Updates",
      description: "Regular photos, videos, and location updates so you know your pet is having fun."
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange" />,
      title: "Door-to-Door Service",
      description: "Safe transportation to and from your home with secure pickup and drop-off."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-blue" />,
      title: "Health Monitoring",
      description: "Careful observation and immediate notification of any health concerns or injuries."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-orange">Kukur</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive dog walking services with the highest standards of care, 
            safety, and professionalism. Your pet's happiness is our priority.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange/10 to-blue/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;