import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
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
      popular: false
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
      popular: true
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
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="text-blue">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your furry friend. All plans include our full range of 
            professional services with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative h-full ${plan.popular ? 'border-2 border-orange shadow-lg scale-105' : 'border-2 hover:border-blue/20'} transition-all duration-300 hover:shadow-xl`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange to-orange-light text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold mb-2">{plan.title}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.prices.map((price, priceIndex) => (
                    <div key={priceIndex} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">{price.duration}</span>
                      <span className="text-xl font-bold text-orange">{price.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Included Features:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-blue flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange' 
                      : 'bg-blue hover:bg-blue-light'
                  } text-white transition-all duration-300`}
                >
                  Choose {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;