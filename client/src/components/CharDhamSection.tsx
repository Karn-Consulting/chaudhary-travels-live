import { Link } from "wouter";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

export default function CharDhamSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
            SPIRITUAL JOURNEY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Char Dham Yatra
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Embark on a divine pilgrimage to the four sacred shrines of Uttarakhand
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Link href="/char-dham-yatra">
            <a className="group block relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              {/* Background Image */}
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src="/images/chardham/chardham-banner.jpg"
                  alt="Char Dham Yatra - Yamunotri, Gangotri, Kedarnath, Badrinath"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-white/70">Destinations</p>
                      <p className="font-semibold">4 Sacred Dhams</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-white/70">Duration</p>
                      <p className="font-semibold">10-12 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-white/70">Distance</p>
                      <p className="font-semibold">~1,200 KM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-white/70">Group Size</p>
                      <p className="font-semibold">Any Size</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl md:text-4xl font-serif font-bold mb-3">
                  Experience the Divine Char Dham Yatra
                </h3>
                <p className="text-white/90 mb-4 max-w-3xl">
                  Visit Yamunotri, Gangotri, Kedarnath, and Badrinath with our premium vehicle rentals. 
                  Comfortable, safe, and spiritually enriching journey through the Himalayas.
                </p>
                
                <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-primary/90 transition-colors">
                  Explore Char Dham Yatra
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
