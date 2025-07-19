import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 High Street, Woodland Village, WV12 3AB"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+44 (0) 1234 567890"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@wolfstavern.co.uk"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: "Mon-Thu: 12pm-11pm\nFri-Sat: 12pm-12am\nSun: 12pm-10pm"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brass mb-4">
            Find Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Woodland Village, Wolf's Tavern is easy to find and even easier to love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-brass mb-6">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-wood-medium border-brass/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brass/20 rounded-full flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-brass" />
                      </div>
                      <CardTitle className="text-lg text-brass">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cream whitespace-pre-line">{info.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-wood-medium border-brass/20">
              <CardHeader>
                <CardTitle className="text-xl text-brass">Special Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-cream">🚗 Free parking available behind the tavern</p>
                <p className="text-cream">🐕 Well-behaved dogs welcome in the bar area</p>
                <p className="text-cream">♿ Ground floor accessible, please call about accommodation</p>
                <p className="text-cream">🎵 Live music Friday evenings from 8:30pm</p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-brass mb-6">Location</h3>
            <Card className="bg-wood-medium border-brass/20">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-wood-dark rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-brass mx-auto mb-4" />
                    <p className="text-cream text-lg">Interactive Map</p>
                    <p className="text-cream/70 text-sm">
                      Map integration available<br />
                      123 High Street, Woodland Village
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-wood-medium border-brass/20">
              <CardHeader>
                <CardTitle className="text-xl text-brass">How to Find Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-cream">
                  <strong>From the train station:</strong> 5-minute walk up High Street, we're on the right just past the village green.
                </p>
                <p className="text-cream">
                  <strong>By car:</strong> Take the A123 into Woodland Village, turn right at the church, and you'll find us 100 meters ahead.
                </p>
                <p className="text-cream">
                  <strong>Public transport:</strong> Bus routes 45 and 67 stop directly outside. Services run every 30 minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;