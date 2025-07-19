import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-tavern.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-6 drop-shadow-lg">
          Wolf's Tavern
        </h1>
        <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          A cozy, character-rich pub nestled in the heart of town.<br />
          Where great food, unforgettable nights, and restful stays come together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="tavern" size="lg" asChild>
            <a href="#menu">View Our Menu</a>
          </Button>
          <Button variant="wood" size="lg" asChild>
            <a href="#stay">Book Your Stay</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;