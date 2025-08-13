import { Button } from "@/components/ui/button";
import kukurLogo from "@/assets/kukur-logo.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={kukurLogo} 
              alt="Kukur - Professional Dog Walking Service" 
              className="h-18 w-auto md:h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Services', id: 'services' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'Our Walkers', id: 'walkers' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground hover:text-orange transition-colors font-medium group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange to-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white px-6 py-2 md:px-8 md:py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:animate-pulse">Book Now</span>
            {/* Button shine effect */}
            <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;