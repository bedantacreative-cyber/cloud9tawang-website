import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Categories provided in the spec
const CATEGORIES = [
  "All",
  "Monasteries & Culture",
  "Mountains & Passes",
  "Lakes",
  "Adventure & Snow",
  "Happy Travelers",
];

// Helper to generate a random rotate between -2 and 2 for subtle polaroid scatter effect
const getRandomRotate = () => {
  const tilt = Math.random() * 4 - 2;
  return `rotate(${tilt.toFixed(1)}deg)`;
};

// CRITICAL: Explicitly formatted using strictly available names without HEIC traces
const GALLERY_DATA = [
  { id: 1, url: "/gallery/IMG_6288.jpg", category: "Monasteries & Culture", caption: "Golden Buddha — Close Up", rotate: getRandomRotate() },
  { id: 2, url: "/gallery/IMG_6271.jpg", category: "Monasteries & Culture", caption: "Prayer Flag Bridge — Sacred Crossing", rotate: getRandomRotate() },
  { id: 3, url: "/gallery/IMG_6264.jpg", category: "Monasteries & Culture", caption: "Village by the River — Prayer Flags", rotate: getRandomRotate() },
  { id: 4, url: "/gallery/IMG_6674.jpg", category: "Adventure & Snow", caption: "Traveler at Sela Lake", rotate: getRandomRotate() },
  { id: 5, url: "/gallery/IMG_6214.jpg", category: "Monasteries & Culture", caption: "Monpa Elder — Faces of Tawang", rotate: getRandomRotate() },
  { id: 6, url: "/gallery/IMG_8010.jpg", category: "Happy Travelers", caption: "Travelers in Monpa Traditional Dress", rotate: getRandomRotate() },
  { id: 7, url: "/gallery/IMG_5492.jpg", category: "Adventure & Snow", caption: "Group at Frozen Waterfall", rotate: getRandomRotate() },
  { id: 8, url: "/gallery/IMG_7656.jpg", category: "Happy Travelers", caption: "Girls' Trip to Tawang", rotate: getRandomRotate() },
  { id: 9, url: "/gallery/IMG_6830.jpg", category: "Adventure & Snow", caption: "Mera Bharat Mahaan — Saluting the Nation", rotate: getRandomRotate() },
  { id: 10, url: "/gallery/IMG_6552.jpg", category: "Mountains & Passes", caption: "Bumla Pass — India-China Border (15,200 ft)", rotate: getRandomRotate() },
  { id: 11, url: "/gallery/IMG_7704.jpg", category: "Monasteries & Culture", caption: "Giant Buddha Statue — Tawang", rotate: getRandomRotate() },
  { id: 12, url: "/gallery/IMG_7738.jpg", category: "Happy Travelers", caption: "Traveler at Bumla Pass (15,200 ft)", rotate: getRandomRotate() },
  { id: 13, url: "/gallery/IMG_8157.jpg", category: "Lakes", caption: "Shungetser Lake — Travelers in Naga Shawls", rotate: getRandomRotate() },
  { id: 14, url: "/gallery/IMG_7852.jpg", category: "Adventure & Snow", caption: "Snowfall in Tawang Town", rotate: getRandomRotate() },
  { id: 15, url: "/gallery/IMG_7571.jpg", category: "Adventure & Snow", caption: "Mera Bharat Mahaan — Thumbs Up", rotate: getRandomRotate() },
  { id: 16, url: "/gallery/IMG_7638.jpg", category: "Adventure & Snow", caption: "Soldier for a Day — Sela Pass", rotate: getRandomRotate() },
  { id: 17, url: "/gallery/IMG_6873.jpg", category: "Monasteries & Culture", caption: "Tawang Monastery Courtyard", rotate: getRandomRotate() },
  { id: 18, url: "/gallery/IMG_6867.jpg", category: "Monasteries & Culture", caption: "Tawang Monastery — Main Hall", rotate: getRandomRotate() },
  { id: 19, url: "/gallery/IMG_6285.jpg", category: "Monasteries & Culture", caption: "Golden Buddha with Dalai Lama Portrait", rotate: getRandomRotate() },
  { id: 20, url: "/gallery/IMG_7073.JPG.jpeg", category: "Adventure & Snow", caption: "Group at the Frozen Waterfall", rotate: getRandomRotate() },
  { id: 21, url: "/gallery/IMG_7074.JPG.jpeg", category: "Lakes", caption: "Shungetser Lake (Madhuri Lake) — 12,467 ft", rotate: getRandomRotate() },
  { id: 22, url: "/gallery/IMG_7081.JPG.jpeg", category: "Happy Travelers", caption: "Girls' Winter Trip to Tawang", rotate: getRandomRotate() },
  { id: 23, url: "/gallery/IMG_7161.JPG.jpeg", category: "Lakes", caption: "Travelers in Naga Shawls — Shungetser Lake", rotate: getRandomRotate() },
  { id: 24, url: "/gallery/IMG_8132.JPG.jpeg", category: "Monasteries & Culture", caption: "Tawang Monastery — Largest in India", rotate: getRandomRotate() },
  { id: 25, url: "/gallery/IMG_8133.JPG.jpeg", category: "Mountains & Passes", caption: "Sela Pass — Welcome to West Kameng", rotate: getRandomRotate() }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // We assign a subtle random rotation client-side only once so it doesn't bounce constantly on re-renders across categories.
  const [rotations, setRotations] = useState<string[]>([]);
  useEffect(() => {
    setRotations(GALLERY_DATA.map(() => getRandomRotate()));
  }, []);

  const filteredGallery = GALLERY_DATA.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "auto";
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredGallery.length - 1 : lightboxIndex - 1);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-24 pb-16">
      <Navigation />

      <main className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
            Our Photo Gallery
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto italic text-lg">
            "Unforgettable moments from the land of the Monpa"
          </p>
        </div>

        {/* Categories / Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-surface/50 text-foreground/80 hover:bg-surface border border-border/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Setup */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 pb-12 w-full max-w-7xl mx-auto">
          {filteredGallery.map((item, index) => {
            // Re-find original index for stable rotations
            const originalIndex = GALLERY_DATA.findIndex(g => g.id === item.id);
            const stableRotate = rotations[originalIndex] || "rotate(0deg)";

            return (
              <div
                key={item.id}
                className="break-inside-avoid w-full flex justify-center cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                {/* Polaroid Frame */}
                <div 
                  className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] relative transition-all duration-300 transform"
                  style={{ 
                    padding: "10px 10px 60px 10px",
                    transform: stableRotate,
                    width: "100%",
                    maxWidth: "320px",
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
                    e.currentTarget.style.zIndex = "20";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = stableRotate;
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                    e.currentTarget.style.zIndex = "1";
                  }}
                >
                  {/* Tape Overlay for aesthetics */}
                  {index % 3 === 0 && (
                    <div className="absolute top-[-8px] left-1/2 -ml-[25%] w-[50%] h-5 bg-white/50 backdrop-blur-md border border-white/40 shadow-sm z-20 transform -rotate-2 opacity-80 mix-blend-screen"></div>
                  )}
                  
                  {/* The Image (Aspect ratio preserved with object fit) */}
                  <div className="overflow-hidden bg-gray-100 h-[250px] w-full border border-black/5">
                    <img
                      src={item.url}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.parentElement?.parentElement?.parentElement?.remove();
                      }}
                    />
                  </div>
                  
                  {/* Polaroid Caption Box */}
                  <div className="absolute bottom-0 left-0 w-full h-[60px] flex items-center justify-center px-4">
                    <p 
                      className="text-[#333333] text-lg lg:text-xl font-bold tracking-wide text-center" 
                      style={{ fontFamily: "'Caveat', cursive", lineHeight: "1.1" }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Lightbox / Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center pt-10 pb-10 px-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X size={36} />
          </button>

          {/* Previous Arrow */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors bg-black/20 rounded-full hover:bg-black/40"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next Arrow */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-colors bg-black/20 rounded-full hover:bg-black/40"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          {/* Main Image Container */}
          <div className="max-w-4xl max-h-full flex flex-col items-center">
            <img 
              src={filteredGallery[lightboxIndex].url} 
              alt={filteredGallery[lightboxIndex].caption}
              className="max-h-[80vh] w-auto object-contain shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
            <p 
               style={{ fontFamily: "'Caveat', cursive" }}
               className="mt-6 text-3xl md:text-4xl text-white font-bold"
               onClick={(e) => e.stopPropagation()}
            >
              {filteredGallery[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
