import Navigation from '@/components/Navigation';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;