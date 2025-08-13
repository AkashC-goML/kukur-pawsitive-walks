import { Button } from "@/components/ui/button";
import kukurLogo from "@/assets/kukur-logo.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={kukurLogo} 
              alt="Kukur - Professional Dog Walking Service" 
              className="h-10 w-auto md:h-12"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-orange transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-orange transition-colors font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('walkers')}
              className="text-foreground hover:text-orange transition-colors font-medium"
            >
              Our Walkers
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-orange transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
          
          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white px-6 py-2 md:px-8 md:py-3 font-semibold transition-all duration-300"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;