import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dogs.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 animate-fade-in" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* Content with Staggered Animations */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Professional Dog Walking Services in 
            <span className="bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent  inline-block"> Your city</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:both]">
            Trusted, reliable, and loving care for your furry family members. 
            Our experienced dog walkers ensure your pets get the exercise and attention they deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.6s] [animation-fill-mode:both]">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:"
              onClick={scrollToServices}
            >
              <span className="group-hover:animate-bounce">Book a Walk Today</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/10"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="group-hover:animate-pulse">View Pricing</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={scrollToServices}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors duration-300">
          <ArrowDown className="w-4 h-4 mt-2 animate-bounce" />
        </div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange rounded-full animate-float [animation-delay:0s]"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue rounded-full animate-float [animation-delay:1s]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-light rounded-full animate-float [animation-delay:2s]"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-light rounded-full animate-float [animation-delay:3s]"></div>
      </div>
    </section>
  );
};

export default Hero;