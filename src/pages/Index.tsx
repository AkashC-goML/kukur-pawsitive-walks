import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WalkerRequirements from "@/components/WalkerRequirements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="walkers">
        <WalkerRequirements />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
