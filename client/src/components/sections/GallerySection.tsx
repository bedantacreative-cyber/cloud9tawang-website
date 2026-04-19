import { useEffect, useRef, useState } from "react";

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/hero-tawang-monastery-RczbPNfmwVp4bBkHmqb2SY.webp",
      title: "Tawang Monastery",
      category: "Monasteries",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/sela-pass-landscape-RbSHYubqN5T3QCqqxwUCHc.webp",
      title: "Sela Pass",
      category: "Mountains",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/prayer-flags-mountain-NvG3gv46HSN7kmsDBUSUD6.webp",
      title: "Prayer Flags",
      category: "Culture",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/monastery-interior-monks-KXXGk2hbzmDJ7yo8c7SGV8.webp",
      title: "Monastery Interior",
      category: "Monasteries",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663462509682/HyUrhM7eNfTo93fA2Kcd2a/nuranang-falls-XgKnoD6foKThe3uugW8T7u.webp",
      title: "Nuranang Falls",
      category: "Nature",
    },
  ];

  return (
    <section id="gallery" ref={ref} className="relative py-12 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-accent mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Gallery
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Glimpses of the spiritual and natural beauty of Tawang
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-1000 hover-lift ${
                index === 2 ? "md:col-span-2 md:row-span-2" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                <div>
                  <p className="text-accent text-xs font-semibold mb-1">{image.category}</p>
                  <h3 className="text-white font-serif font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full rounded-lg"
            />
            <p className="text-white text-center mt-4 font-serif text-lg">
              {galleryImages[selectedImage].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
