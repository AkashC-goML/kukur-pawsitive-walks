import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Car, Heart, Shield, Clock, Users } from "lucide-react";

const WalkerRequirements = () => {
  const requirements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education & Experience",
      items: [
        "High school diploma or GED preferred",
        "Proven experience working with dogs",
        "Working knowledge of positive reinforcement training",
        "Sound understanding of dog behavior"
      ]
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Transportation",
      items: [
        "Valid driver's license required",
        "Clean driving record",
        "Reliable vehicle for safe pet transportation",
        "Ability to safely transport multiple dogs"
      ]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Personal Qualities",
      items: [
        "Genuine love of animals",
        "Patient, punctual, and reliable personality",
        "Friendly and trustworthy character",
        "Excellent communication skills"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety & Responsibility",
      items: [
        "Attention to safety issues concerning dogs",
        "Knowledge of how to interact with animals safely",
        "Ability to handle emergency situations",
        "Responsible and accountable approach"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Availability & Fitness",
      items: [
        "Available during peak walking times",
        "Physical stamina and energy for long walks",
        "Ability to walk for extended periods",
        "Flexibility with scheduling"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Skills",
      items: [
        "Experience conducting client consultations",
        "Ability to complete detailed information forms",
        "Record-keeping and documentation skills",
        "Regular client communication and updates"
      ]
    }
  ];

  const responsibilities = [
    "Walking multiple dogs in various weather conditions",
    "Conducting consultations with new clients",
    "Recording detailed walk information and observations",
    "Safely transporting dogs to and from homes",
    "Picking up and disposing of pet waste",
    "Ensuring dogs have fresh water and food as required",
    "Scheduling suitable walking times",
    "Taking safety precautions for dogs and public",
    "Providing regular updates with photos and videos",
    "Notifying owners of any health concerns immediately"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional <span className="text-orange">Dog Walkers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            At Kukur, we maintain the highest standards for our dog walking team. Every walker 
            undergoes thorough screening and meets our comprehensive requirements to ensure 
            your pet receives the best possible care.
          </p>
        </div>
        
        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {requirements.map((req, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-blue/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-br from-orange/10 to-blue/10 rounded-lg text-orange">
                    {req.icon}
                  </div>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        

        {/* Responsibilities Section */}
<Card className="max-w-4xl mx-auto border-2 border-orange/20 shadow-lg">
  <CardHeader className="text-center bg-gradient-to-r from-orange/5 to-blue/5">
    <CardTitle className="text-2xl font-bold mb-2">Daily Responsibilities</CardTitle>
    <p className="text-muted-foreground">What our professional dog walkers do every day</p>
  </CardHeader>
  <CardContent className="pt-6">
    <div className="grid md:grid-cols-2 gap-4">
      {responsibilities.map((responsibility, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange/20 text-orange font-bold">
            🐾
          </div>
          <span className="text-sm">{responsibility}</span>
        </div>
      ))}
    </div>
  </CardContent>
</Card>


      </div>
    </section>
  );
};

export default WalkerRequirements;