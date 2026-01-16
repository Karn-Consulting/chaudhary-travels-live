import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  Phone, 
  Users, 
  MapPin, 
  Headphones, 
  IndianRupee, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/Header";
import FleetCarousel from "@/components/FleetCarousel";
import FounderSection from "@/components/FounderSection";
import VideoGallery from "@/components/VideoGallery";
import Footer from "@/components/Footer";
import GetQuoteSection from "@/components/GetQuoteSection";
import PopularRoutes from "@/components/PopularRoutes";
import { blogs } from "@/data/blogs";

const PHONE_1 = "9540726566";

// Vehicle Data
const vehicles = [
  {
    id: 1,
    name: "Tempo Traveller",
    image: "/images/tempo-traveller-luxury.webp",
    seats: "13 | 17 | 20 | 26",
    description: "Underestimated for its sober looks, PKN or Alius Tempo Travellers can put a lot of luxury cars to shame. The basic tempo travellers are also present in our portfolio if you're looking to hire a tempo traveller on a budget."
  },
  {
    id: 2,
    name: "Mini Bus",
    image: "/images/fleet/fleet-28.webp",
    seats: "27 | 29 | 35",
    description: "The perfect mix between luxury and economy, the mini bus is ideal for long outstation trips. The experience and comfort levels will ensure that you hire a mini bus every chance you get."
  },
  {
    id: 3,
    name: "Bus",
    image: "/images/luxury-bus-interior.webp",
    seats: "37 | 45 | 49",
    description: "Buses that are as comfortable as your living room. Sleep, Chit chat or admire the panoramic view out the window as you crunch KM's with ease."
  },
  {
    id: 4,
    name: "Luxury Car",
    image: "/images/fleet/innova-crysta.jpg",
    seats: "4 | 6 | 7",
    description: "Perfect for a trip with a small group between 3-7 or perfect for any trip if you love cars. You can hire cars from the humble Dzire to the grand Innova Crysta."
  }
];

// Features
const features = [
  {
    icon: IndianRupee,
    title: "Save Money & Time",
    description: "Awesome Value For Money quotes with zero booking fees means you don't have to be a pro negotiator to get a fair price."
  },
  {
    icon: Users,
    title: "The Finest Vehicles & Drivers",
    description: "Curated vehicle partners who've passed our multi-point audits ensure that your trips are memorable!"
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "A World Class 24/7 Customer Support team with a dedicated travel manager to assist you for a smooth & memorable vehicle rental experience."
  },
  {
    icon: MapPin,
    title: "PAN India Service Presence",
    description: "Leading presence across 11 Cities with a reputation of 5 star service & customer experience."
  }
];

// Trusted Companies
const trustedCompanies = [
  { name: "Flipkart", logo: "/images/logos/flipkart.svg" },
  { name: "Jio", logo: "/images/logos/jio.svg" },
  { name: "Tata", logo: "/images/logos/tata.svg" },
  { name: "Siemens", logo: "/images/logos/siemens.svg" },
  { name: "SBI", logo: "/images/logos/sbi.svg" },
  { name: "Google", logo: "/images/logos/google.svg" },
  { name: "DHL", logo: "/images/logos/dhl.svg" },
  { name: "Zomato", logo: "/images/logos/zomato.svg" },
  { name: "Wipro", logo: "/images/logos/wipro.svg" },
  { name: "EY", logo: "/images/logos/ey.svg" },
  { name: "Accenture", logo: "/images/logos/accenture.svg" }
];

// Testimonials - 8 clients with proper images
const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "IT Director, TCS",
    image: "/images/testimonials/rajesh-sharma.webp",
    text: "We've been using Chaudhary Travels for our team outings for over 2 years now. The Tempo Travellers are always spotless, drivers are punctual, and the booking process is seamless. Excellent service every single time."
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "HR Manager, Infosys",
    image: "/images/testimonials/anita-desai.webp",
    text: "Finding reliable employee transportation was a challenge until we partnered with Chaudhary Travels. Their fleet is modern, drivers are professional, and the 24/7 support gives us complete peace of mind."
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Wedding Planner",
    image: "/images/testimonials/vikram-patel.webp",
    text: "I recommend Chaudhary Travels to all my clients for wedding transportation. They handled 15 vehicles for a destination wedding flawlessly. The coordination was perfect and guests were impressed."
  },
  {
    id: 4,
    name: "Suresh Kumar",
    role: "Admin Head, HDFC Bank",
    image: "/images/testimonials/suresh-kumar.webp",
    text: "The professionalism shown by Chaudhary Travels is unmatched. From the condition of the buses to the behavior of the staff, everything is top-notch. Highly recommended for corporate travel."
  },
  {
    id: 5,
    name: "Meera Reddy",
    role: "Event Coordinator, Wipro",
    image: "/images/testimonials/meera-reddy.webp",
    text: "Organizing transport for 500+ employees for our annual day was a breeze with Chaudhary Travels. Their team managed the logistics perfectly, ensuring everyone arrived on time and in comfort."
  },
  {
    id: 6,
    name: "Amit Verma",
    role: "Operations Manager, Reliance",
    image: "/images/testimonials/amit-verma.webp",
    text: "We rely on Chaudhary Travels for our daily employee commute. Their punctuality and safety standards are commendable. It's a partnership we value greatly."
  },
  {
    id: 7,
    name: "Priya Kapoor",
    role: "Event Director, Wizcraft",
    image: "/images/testimonials/priya-kapoor.webp",
    text: "Managing VIP movement for large concerts is stressful, but Chaudhary Travels makes it look easy. Their luxury fleet and trained chauffeurs are a class apart."
  },
  {
    id: 8,
    name: "Dr. Sameer Gupta",
    role: "Medical Conference Organizer",
    image: "/images/testimonials/sameer-gupta.webp",
    text: "Our international delegates were extremely impressed with the comfort and cleanliness of the buses. The drivers were polite and knew the routes perfectly."
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />
            <img 
              src="/images/hero-luxury-fleet.webp" 
              alt="Luxury Fleet at The Imperial Delhi" 
              className="w-full h-full object-cover animate-ken-burns"
            />
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl animate-in slide-in-from-left-10 duration-1000 fade-in text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
                Experience Best in Class Vehicles<br />
                <span className="text-gradient-gold drop-shadow-none">ON RENT IN INDIA</span>
              </h1>
              <p className="text-white/90 text-lg md:text-2xl mb-8 md:mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md mx-auto md:mx-0">
                Your personal logistics and mobile sanctuary provider. We don't just sell rides; we sell status, peace of mind, and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href={`tel:${PHONE_1}`} className="btn-gold px-8 py-4 rounded-md font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" /> CALL US
                </a>
                <span className="text-white/80 self-center font-serif italic text-lg hidden sm:inline">or</span>
                <Link href="/get-quote">
                  <Button variant="outline" className="px-8 py-4 rounded-md font-semibold text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground h-auto w-full sm:w-auto">
                    GET PRICING
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Gallery Carousel */}
        <FleetCarousel />

        {/* Vehicles Section - Our Fleet Premium Vehicles */}
        <section id="vehicles" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our Fleet</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Premium Vehicles</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="luxury-card overflow-hidden group h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative bg-secondary/10">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${vehicle.name === "Luxury Car" ? "object-contain p-4" : "object-cover"}`}
                    />
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2 font-serif">{vehicle.name}</h3>
                    <p className="text-primary font-semibold mb-4 text-sm flex items-center gap-2">
                      <Users className="w-4 h-4" /> Seats: {vehicle.seats}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {vehicle.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground group-hover:text-primary transition-colors"
                      onClick={() => document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Video Gallery */}
        <VideoGallery />

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 hover:bg-background hover:shadow-lg rounded-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Quote Section */}
        <GetQuoteSection />

        {/* Popular Routes Section */}
        <PopularRoutes />

        {/* Trusted Companies - Above Testimonials */}
        <section className="py-16 bg-white border-t border-border">
          <div className="container mx-auto px-4">
            <p className="text-center text-muted-foreground uppercase tracking-widest text-sm mb-10 font-medium">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {trustedCompanies.map((company, index) => (
                <img 
                  key={index}
                  src={company.logo} 
                  alt={company.name} 
                  className="h-8 md:h-12 object-contain hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Client Stories Section - Testimonials */}
        <section className="py-16 md:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Client Stories</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg relative">
                <div className="absolute top-8 left-8 text-primary/20">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
                
                <div className={`relative z-10 flex flex-col md:flex-row gap-8 items-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-lg md:text-xl text-foreground/80 italic mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold font-serif text-foreground">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-primary font-medium">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end gap-4 mt-8">
                  <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full hover:bg-primary hover:text-white transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full hover:bg-primary hover:text-white transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section - Nitin Chaudhary */}
        <FounderSection />

        {/* Travel Insights Section - Blog */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our Blog</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Travel Insights</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogs.slice(0, 3).map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.id}`}>
                  <div className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={blog.heroImage} 
                        alt={blog.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {blog.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.author}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-semibold text-sm mt-auto group-hover:translate-x-2 transition-transform">
                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/blogs">
                <Button variant="outline" className="px-8 py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg font-semibold">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
