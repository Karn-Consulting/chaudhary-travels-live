import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const fleetImages = [
  "/images/fleet/fleet-1.webp",
  "/images/fleet/fleet-2.webp",
  "/images/fleet/fleet-3.webp",
  "/images/fleet/fleet-4.webp",
  "/images/fleet/fleet-5.webp",
  "/images/fleet/fleet-6.webp",
  "/images/fleet/fleet-7.webp",
  "/images/fleet/fleet-8.webp",
  "/images/fleet/fleet-9.webp",
  "/images/fleet/fleet-10.webp",
  "/images/fleet/fleet-11.webp",
  "/images/fleet/fleet-12.webp",
  "/images/fleet/fleet-13.webp",
  "/images/fleet/fleet-14.webp",
  "/images/fleet/fleet-15.webp",
  "/images/fleet/fleet-16.webp",
  "/images/fleet/fleet-17.webp",
  "/images/fleet/fleet-18.webp",
  "/images/fleet/fleet-19.webp",
  "/images/fleet/fleet-20.webp",
  "/images/fleet/fleet-21.webp",
  "/images/fleet/fleet-22.webp",
  "/images/fleet/fleet-23.webp",
  "/images/fleet/fleet-24.webp",
  "/images/fleet/fleet-25.webp",
  "/images/fleet/fleet-26.webp",
  "/images/fleet/fleet-27.webp",
  "/images/fleet/fleet-28.webp",
  "/images/fleet/fleet-29.webp",
  "/images/fleet/fleet-30.webp",
  "/images/fleet/fleet-31.webp",
  "/images/fleet/fleet-32.webp",
  "/images/fleet/fleet-33.webp",
  "/images/fleet/fleet-34.webp",
  "/images/fleet/fleet-35.webp",
  "/images/fleet/fleet-36.webp",
  "/images/fleet/fleet-37.webp",
  "/images/fleet/fleet-38.webp",
  "/images/fleet/fleet-39.webp",
  "/images/fleet/fleet-40.webp",
 "/images/fleet/fleet-41.webp",
];

export default function FleetCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
          Our Premium Fleet
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
          Experience Luxury on Wheels
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="relative max-w-[95vw] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {fleetImages.map((src, index) => (
              <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4">
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="aspect-[16/10] overflow-hidden rounded-lg relative group">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                      <img
                        src={src}
                        alt={`Luxury Fleet Vehicle ${index + 1}`}
                        className="w-full h-full object-contain bg-secondary/10 transform transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
