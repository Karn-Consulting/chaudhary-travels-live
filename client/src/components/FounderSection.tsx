import { Card, CardContent } from "@/components/ui/card";

export default function FounderSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Title (Visible only on mobile/tablet) */}
          <div className="w-full lg:hidden text-center mb-4">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
              Meet The Founder
            </span>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto" />
          </div>

          {/* Image Column */}
          <div className="relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4 hidden md:block" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/founder/nitin.png" 
                alt="Nitin Chaudhary - Founder" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full order-3 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Desktop Title (Hidden on mobile) */}
            <div className="hidden lg:block">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
                Meet The Founder
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Nitin Chaudhary
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </div>

            {/* Mobile Name (Visible only on mobile) */}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground lg:hidden">
              Nitin Chaudhary
            </h2>

            <div className="relative inline-block text-left">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic relative z-10">
                "We are not just a transportation company; we are a personal logistics and mobile sanctuary provider. Our systems should be so robust that they not only ensure flawless service but also attract the best chauffeurs."
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                With a vision to revolutionize the luxury ground transportation industry in India, Nitin Chaudhary established Chaudhary Travels to bridge the gap between premium comfort and operational excellence.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
