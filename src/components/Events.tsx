import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Quiz Night",
      date: "Every Wednesday",
      time: "7:00 PM",
      description: "Test your knowledge with friends! Prizes for the winning team.",
      capacity: "Teams of 4"
    },
    {
      title: "Live Acoustic Sessions",
      date: "Friday, March 22",
      time: "8:30 PM",
      description: "Local musicians perform intimate acoustic sets in our cozy setting.",
      capacity: "Limited seating"
    },
    {
      title: "Weekend Sports Screening",
      date: "Saturday & Sunday",
      time: "All day",
      description: "Catch all the big games on our large screens with great atmosphere.",
      capacity: "Open to all"
    },
    {
      title: "Whiskey Tasting Evening",
      date: "Thursday, March 28",
      time: "7:00 PM",
      description: "Explore premium whiskeys with our expert sommelier. Includes cheese pairings.",
      capacity: "20 guests"
    }
  ];

  return (
    <section id="events" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brass mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for unforgettable nights filled with entertainment, community, and great times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="bg-wood-medium border-brass/20 hover:border-brass/40 transition-colors">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-brass">{event.title}</CardTitle>
                <CardDescription className="text-cream/80">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-cream">
                  <Calendar className="h-4 w-4 text-brass" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-cream">
                  <Clock className="h-4 w-4 text-brass" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-cream">
                  <Users className="h-4 w-4 text-brass" />
                  <span>{event.capacity}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;