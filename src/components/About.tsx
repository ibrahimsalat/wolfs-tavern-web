import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Warm Atmosphere",
      description: "Every corner of Wolf's Tavern is designed to make you feel at home, with cozy lighting and rustic charm."
    },
    {
      icon: Award,
      title: "Premium Service",
      description: "We pride ourselves on exceptional service, ensuring every visit is memorable and every guest feels valued."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "More than just a pub, we're a gathering place where locals and travelers come together to share stories."
    },
    {
      icon: Clock,
      title: "Timeless Tradition",
      description: "Honoring traditional pub culture while embracing modern comforts and culinary excellence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brass mb-4">
            About Wolf's Tavern
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our story began with a vision to create something special – a place where tradition meets comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-brass mb-4">Our Story</h3>
            <p className="text-foreground leading-relaxed">
              Nestled in the heart of town, Wolf's Tavern has been carefully crafted to embody the spirit of a classic English pub while offering modern comforts and exceptional cuisine. Our building, with its exposed wooden beams and stone walls, tells stories of generations past.
            </p>
            <p className="text-foreground leading-relaxed">
              We believe in the power of gathering – whether it's friends meeting for a pint after work, families enjoying a Sunday roast, or travelers finding refuge and comfort during their journeys. Every detail, from our locally sourced ingredients to our carefully curated whiskey selection, reflects our commitment to quality and authenticity.
            </p>
            <p className="text-foreground leading-relaxed">
              Above the tavern, our guest rooms offer a peaceful retreat, each uniquely decorated to reflect the character and warmth that defines Wolf's Tavern. We're not just a destination; we're a home away from home.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card className="bg-wood-medium border-brass/20 p-6">
              <h4 className="font-serif text-xl text-brass mb-3">Our Philosophy</h4>
              <p className="text-cream italic">
                "Great food, warm hospitality, and genuine connections – these are the ingredients that make Wolf's Tavern more than just a pub."
              </p>
            </Card>
            <Card className="bg-wood-medium border-brass/20 p-6">
              <h4 className="font-serif text-xl text-brass mb-3">Local Commitment</h4>
              <p className="text-cream">
                We proudly source from local farms and breweries, supporting our community while ensuring the freshest ingredients reach your table.
              </p>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-brass/20 text-center p-6">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-brass/20 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-brass" />
                </div>
                <h4 className="font-serif text-lg text-brass">{value.title}</h4>
                <p className="text-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;