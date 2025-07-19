import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Menu from '@/components/Menu';
import Stay from '@/components/Stay';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Events />
      <Menu />
      <Stay />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
