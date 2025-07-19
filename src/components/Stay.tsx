import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Bed, Bath, Wifi, Coffee, Car, Users } from 'lucide-react';
import { useState } from 'react';

const Stay = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const rooms = [
    {
      name: "The Woodland Suite",
      price: "£120/night",
      description: "Spacious suite with exposed beams, four-poster bed, and countryside views",
      amenities: ["King bed", "En-suite bathroom", "WiFi", "Coffee station", "Countryside view"]
    },
    {
      name: "The Cozy Den",
      price: "£85/night", 
      description: "Intimate room perfect for couples, featuring original stone walls",
      amenities: ["Double bed", "Shared bathroom", "WiFi", "Coffee station", "Historic character"]
    },
    {
      name: "The Family Cabin",
      price: "£150/night",
      description: "Perfect for families, with bunk beds and connecting door to parents' room",
      amenities: ["Double + bunks", "En-suite bathroom", "WiFi", "Coffee station", "Family-friendly"]
    }
  ];

  const amenityIcons = {
    "King bed": Bed,
    "Double bed": Bed,
    "Double + bunks": Users,
    "En-suite bathroom": Bath,
    "Shared bathroom": Bath,
    "WiFi": Wifi,
    "Coffee station": Coffee,
    "Countryside view": Car,
    "Historic character": Car,
    "Family-friendly": Users
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking inquiry:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="stay" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brass mb-4">
            Stay With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rest comfortably above the tavern in our charming rooms, each with its own character and modern amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rooms */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-brass mb-6">Our Rooms</h3>
            {rooms.map((room, index) => (
              <Card key={index} className="bg-wood-medium border-brass/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-serif text-xl text-brass">{room.name}</CardTitle>
                    <span className="text-lg font-semibold text-brass">{room.price}</span>
                  </div>
                  <CardDescription className="text-cream/80">{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, idx) => {
                      const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Car;
                      return (
                        <div key={idx} className="flex items-center gap-2 text-sm text-cream">
                          <IconComponent className="h-4 w-4 text-brass" />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <div>
            <Card className="bg-wood-medium border-brass/20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-brass">Book Your Stay</CardTitle>
                <CardDescription className="text-cream/80">
                  Send us your details and we'll get back to you with availability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-cream">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background border-brass/30 text-foreground"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-cream">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background border-brass/30 text-foreground"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="checkIn" className="text-cream">Check-in</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="bg-background border-brass/30 text-foreground"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut" className="text-cream">Check-out</Label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="bg-background border-brass/30 text-foreground"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="text-cream">Guests</Label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-brass/30 bg-background px-3 py-2 text-foreground"
                        required
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-cream">Special Requests</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background border-brass/30 text-foreground"
                      placeholder="Any special requirements or requests..."
                    />
                  </div>

                  <Button type="submit" variant="tavern" className="w-full">
                    Send Booking Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;