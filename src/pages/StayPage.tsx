import Navigation from '@/components/Navigation';
import Stay from '@/components/Stay';
import Footer from '@/components/Footer';

const StayPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Stay />
      </div>
      <Footer />
    </div>
  );
};

export default StayPage;