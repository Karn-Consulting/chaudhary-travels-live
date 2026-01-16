import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState, useCallback } from "react";

// Using optimized WebM videos
const videos = [
  "/videos/optimized/video-1.webm",
  "/videos/optimized/video-2.webm",
  "/videos/optimized/video-3.webm",
  "/videos/optimized/video-4.webm",
  "/videos/optimized/video-5.webm",
  "/videos/optimized/video-6.webm"
];

// Fallback for browsers that don't support WebM
const fallbackVideos = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4",
  "/videos/video-5.mp4",
  "/videos/video-6.mp4"
];

function LazyVideo({ 
  src, 
  fallbackSrc, 
  index, 
  onPlay, 
  onPause 
}: { 
  src: string; 
  fallbackSrc: string; 
  index: number;
  onPlay: () => void;
  onPause: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video 
      ref={videoRef}
      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      controls
      preload="none"
      playsInline
      muted
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onPause}
    >
      {isIntersecting && (
        <>
          <source src={src} type="video/webm" />
          <source src={fallbackSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </>
      )}
    </video>
  );
}

export default function VideoGallery() {
  // Initialize Autoplay with stopOnInteraction: false to allow manual control
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, rootNode: (emblaRoot) => emblaRoot.parentElement })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  }, [autoplay.current]);

  const handleVideoPlay = useCallback(() => {
    if (autoplay.current) {
      autoplay.current.stop();
    }
  }, []);

  const handleVideoPause = useCallback(() => {
    if (autoplay.current) {
      autoplay.current.play();
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">
            Visual Experience
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Tour Our Fleet
          </h2>
          <div className="w-16 md:w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative max-w-[100vw] md:max-w-[95vw] mx-auto">
          <div className="overflow-hidden px-4 md:px-0" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              {videos.map((src, index) => (
                <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0 pl-4">
                  <Card className="overflow-hidden border-none shadow-lg group bg-black h-full rounded-xl">
                    <CardContent className="p-0 relative aspect-[9/16]">
                      <LazyVideo 
                        src={src} 
                        fallbackSrc={fallbackVideos[index]} 
                        index={index}
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
