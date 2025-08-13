import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dogs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Dog Walking Services in 
            <span className="bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent"> Pune</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Trusted, reliable, and loving care for your furry family members. 
            Our experienced dog walkers ensure your pets get the exercise and attention they deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book a Walk Today
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 rounded-full transition-all duration-300">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;