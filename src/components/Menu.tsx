import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Menu = () => {
  const menuSections = {
    starters: [
      { name: "Wolf's Sharing Board", price: "£18", description: "Local cheeses, cured meats, pickles, and artisan bread" },
      { name: "Pan-seared Scallops", price: "£14", description: "With cauliflower purée and crispy pancetta" },
      { name: "Woodland Mushroom Soup", price: "£8", description: "Wild mushrooms in a rich cream broth, truffle oil" },
      { name: "Smoked Salmon Terrine", price: "£12", description: "House-smoked salmon with dill cream and sourdough" }
    ],
    mains: [
      { name: "Venison Medallions", price: "£28", description: "Local venison with roasted root vegetables and red wine jus" },
      { name: "Beer-battered Fish & Chips", price: "£16", description: "Fresh haddock in our signature ale batter, triple-cooked chips" },
      { name: "Slow-cooked Lamb Shank", price: "£24", description: "Braised with rosemary and garlic, creamy mash" },
      { name: "Wild Boar Burger", price: "£18", description: "House-made patty with bacon jam and aged cheddar" },
      { name: "Roasted Chicken Supreme", price: "£20", description: "Free-range chicken with seasonal vegetables" }
    ],
    desserts: [
      { name: "Sticky Toffee Pudding", price: "£8", description: "Traditional pudding with vanilla ice cream" },
      { name: "Dark Chocolate Tart", price: "£9", description: "Rich chocolate with raspberry coulis" },
      { name: "Local Cheese Selection", price: "£12", description: "Three artisan cheeses with port and crackers" },
      { name: "Seasonal Fruit Crumble", price: "£7", description: "With custard or cream" }
    ],
    drinks: [
      { name: "Wolf's Bitter", price: "£5.50", description: "Our signature ale, brewed locally" },
      { name: "Whiskey Selection", price: "£8-£25", description: "Premium single malts and blends" },
      { name: "House Red Wine", price: "£6/£24", description: "Carefully selected Malbec by glass or bottle" },
      { name: "Craft Gin & Tonic", price: "£9", description: "Local gin with premium tonics and garnishes" },
      { name: "Hot Toddy", price: "£8", description: "Perfect warmer with whiskey, honey, and spices" }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brass mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Featuring locally sourced ingredients and traditional recipes with a modern twist.
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8 bg-wood-medium">
            <TabsTrigger value="starters" className="data-[state=active]:bg-brass data-[state=active]:text-wood-dark">Starters</TabsTrigger>
            <TabsTrigger value="mains" className="data-[state=active]:bg-brass data-[state=active]:text-wood-dark">Mains</TabsTrigger>
            <TabsTrigger value="desserts" className="data-[state=active]:bg-brass data-[state=active]:text-wood-dark">Desserts</TabsTrigger>
            <TabsTrigger value="drinks" className="data-[state=active]:bg-brass data-[state=active]:text-wood-dark">Drinks</TabsTrigger>
          </TabsList>

          {Object.entries(menuSections).map(([section, items]) => (
            <TabsContent key={section} value={section}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <Card key={index} className="bg-card border-brass/20">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-serif text-xl text-brass">{item.name}</CardTitle>
                        <span className="text-lg font-semibold text-brass">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-foreground">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;