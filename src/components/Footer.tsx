import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wood-dark border-t border-brass/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-brass mb-4">Wolf's Tavern</h3>
            <p className="text-cream/80 mb-4 max-w-md">
              A premium rustic pub where tradition meets comfort. Great food, warm hospitality, and memorable experiences in the heart of Woodland Village.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brass hover:text-brass/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-brass hover:text-brass/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-brass hover:text-brass/80 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-brass mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-cream/80 hover:text-brass transition-colors">Home</a></li>
              <li><a href="#events" className="text-cream/80 hover:text-brass transition-colors">Events</a></li>
              <li><a href="#menu" className="text-cream/80 hover:text-brass transition-colors">Menu</a></li>
              <li><a href="#stay" className="text-cream/80 hover:text-brass transition-colors">Stay With Us</a></li>
              <li><a href="#about" className="text-cream/80 hover:text-brass transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-brass mb-4">Contact</h4>
            <div className="space-y-2 text-cream/80">
              <p>123 High Street</p>
              <p>Woodland Village, WV12 3AB</p>
              <p>+44 (0) 1234 567890</p>
              <p>hello@wolfstavern.co.uk</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brass/20 mt-8 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Wolf's Tavern. All rights reserved. | Designed with care for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;