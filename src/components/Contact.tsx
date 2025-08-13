import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-blue">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to give your dog the exercise and care they deserve? Contact us today 
            to schedule a consultation or book your first walk.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-orange/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="p-3 bg-orange rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="p-3 bg-blue rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">hello@kukur.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="p-3 bg-orange rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Service Area</h4>
                    <p className="text-muted-foreground">Pune, Maharashtra</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="p-3 bg-blue rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Service Hours</h4>
                    <p className="text-muted-foreground">6:00 AM - 8:00 PM, 7 days a week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="border-2 border-blue/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Book a Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input placeholder="Enter your full name" className="border-2 focus:border-orange" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input placeholder="Your contact number" className="border-2 focus:border-blue" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" className="border-2 focus:border-orange" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Dog's Name</label>
                  <Input placeholder="Your dog's name" className="border-2 focus:border-blue" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Dog's Breed</label>
                  <Input placeholder="Breed (if known)" className="border-2 focus:border-orange" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Preferred Service</label>
                <select className="w-full p-3 border-2 border-input rounded-md focus:border-blue focus:outline-none">
                  <option>Daily Walk (1 Hour)</option>
                  <option>Daily Walk (2 Hours)</option>
                  <option>Weekly Package</option>
                  <option>Monthly Plan</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Additional Notes</label>
                <Textarea 
                  placeholder="Tell us about your dog's personality, special needs, or any questions you have..."
                  className="border-2 focus:border-orange min-h-[100px]"
                />
              </div>
              
              <Button className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-orange to-blue hover:from-orange-light hover:to-blue-light text-white transition-all duration-300">
                Schedule Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;