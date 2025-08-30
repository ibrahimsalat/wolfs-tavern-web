const Gallery = () => {
  // Placeholder images - users can replace these with their own
  const galleryImages = [
    { id: 1, alt: "Tavern interior atmosphere" },
    { id: 2, alt: "Delicious food presentation" },
    { id: 3, alt: "Happy customers enjoying evening" },
    { id: 4, alt: "Cozy bar area" },
    { id: 5, alt: "Live music event" },
    { id: 6, alt: "Beautiful room accommodation" },
    { id: 7, alt: "Outdoor dining area" },
    { id: 8, alt: "Chef preparing signature dish" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brass mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the warmth and character of Wolf's Tavern through our collection of memories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square bg-wood-medium border-2 border-brass/20 rounded-lg overflow-hidden group hover:border-brass/40 transition-colors duration-300"
            >
              <div className="w-full h-full bg-gradient-to-br from-wood-medium to-wood-dark flex items-center justify-center group-hover:from-wood-dark group-hover:to-wood-medium transition-all duration-300">
                <div className="text-center text-brass/60 group-hover:text-brass/80 transition-colors">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm font-medium">Add Your Photo</p>
                  <p className="text-xs mt-1 px-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Click on any placeholder to upload your own images of Wolf's Tavern
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;