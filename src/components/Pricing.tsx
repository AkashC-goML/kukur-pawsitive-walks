import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      title: "Daily Walks",
      description: "Perfect for occasional walks",
      prices: [
        { duration: "1 Hour (Once a day)", price: "₹250" },
        { duration: "2 Hours (Morning/Evening)", price: "₹450" }
      ],
      features: [
        "Professional dog walker",
        "Safe transportation",
        "Photo updates",
        "Health monitoring",
        "Waste cleanup"
      ],
      popular: false,
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Weekly Package",
      description: "Great value for regular walks",
      prices: [
        { duration: "1 Hour (Once a day for a week)", price: "₹1,575" },
        { duration: "2 Hours (Morning/Evening)", price: "₹3,080" }
      ],
      features: [
        "All daily features included",
        "Priority scheduling",
        "Weekly progress reports",
        "Emergency contact support",
        "Flexible rescheduling"
      ],
      popular: true,
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Monthly Plan",
      description: "Best value for committed pet care",
      prices: [
        { duration: "1 Hour (Once a day for a week)", price: "₹6,450" },
        { duration: "2 Hours (Morning/Evening)", price: "₹12,750" }
      ],
      features: [
        "All weekly features included",
        "Monthly health reports",
        "Free consultation sessions",
        "Priority customer support",
        "Special holiday care"
      ],
      popular: false,
      icon: <Check className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-orange/10 to-blue/10 rounded-full animate-float [animation-delay:0s] blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue/10 to-orange/10 rounded-full animate-float [animation-delay:2s] blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="text-blue animate-glow">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your furry friend. All plans include our full range of 
            professional services with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full group transition-all duration-500 cursor-pointer animate-scale-in ${
                plan.popular 
                  ? 'border-2 border-orange shadow-2xl scale-105 bg-gradient-to-br from-orange/5 via-white to-blue/5' 
                  : 'border-2 hover:border-blue/30 hover:shadow-2xl hover:scale-105 bg-white/80 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Glowing Effect for Popular Plan */}
              {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-orange via-blue to-orange-light rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow"></div>
              )}
              
              {/* Popular Badge with Animation */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange to-orange-light text-white px-4 py-1 animate-bounce-in shadow-lg">
                  <Sparkles className="h-3 w-3 mr-1 animate-spin" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6 relative">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`p-2 rounded-full transition-all duration-500 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange to-blue text-white animate-glow' 
                      : 'bg-muted text-muted-foreground group-hover:bg-gradient-to-r group-hover:from-orange/20 group-hover:to-blue/20 group-hover:text-blue'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2 group-hover:text-orange transition-colors duration-300">{plan.title}</CardTitle>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.prices.map((price, priceIndex) => (
                    <div 
                      key={priceIndex} 
                      className="flex justify-between items-center p-4 bg-muted/50 rounded-lg group-hover:bg-gradient-to-r group-hover:from-orange/10 group-hover:to-blue/10 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="text-sm font-medium">{price.duration}</span>
                      <span className="text-xl font-bold text-orange group-hover:animate-pulse">{price.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg group-hover:text-blue transition-colors duration-300">Included Features:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <Check className="h-5 w-5 text-blue flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-orange" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-6 text-lg font-semibold relative overflow-hidden group/button ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange shadow-lg hover:shadow-2xl' 
                      : 'bg-blue hover:bg-blue-light shadow-md hover:shadow-lg'
                  } text-white transition-all duration-500 transform hover:scale-105`}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover/button:left-full transition-all duration-1000"></div>
                  <span className="relative z-10 group-hover/button:animate-pulse">
                    Choose {plan.title}
                  </span>
                </Button>
              </CardContent>
              
              {/* Card Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;