import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
// @ts-ignore
import industrialVideo from '../assets/Video1.mp4';

export function VideoHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    { id: 1, videoUrl: industrialVideo },
    { id: 2, videoUrl: industrialVideo },
    { id: 3, videoUrl: industrialVideo },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, [currentIndex, isPlaying]);

  return (
    <section
      id="home"
      /* MOBILE FIX: 
         - Use h-[80vh] or h-[100svh] for mobile to account for browser bars.
         - lg:h-screen restores full height for desktop.
      */
      className="relative h-[80vh] sm:h-[85vh] lg:h-screen w-full overflow-hidden bg-black"
    >
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          key={slides[currentIndex].id}
          /* MOBILE FIX: 
             - object-cover ensures the video fills the screen even on tall phones.
             - playsInline is MANDATORY for mobile autoplay.
          */
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={slides[currentIndex].videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Optional: Add a smooth fade-in for the text content on mobile */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
            Airtech Engineering
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl opacity-90">
            Innovative HVAC solutions for modern infrastructure.
          </p>
      </div>

      {/* Navigation Arrows - Hidden on small mobile to avoid clutter, visible on md+ */}
      <div className="hidden md:block">
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Pagination Dots - Centered at the bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}