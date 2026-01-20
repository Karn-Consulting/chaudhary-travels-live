import { useState, useEffect } from "react";
import { Phone, MapPin, Calendar, Users, CheckCircle2, Mountain, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PHONE_NUMBER = "9540726566";

export default function CharDhamYatra() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    groupSize: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Char Dham Yatra Booking Request*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Mobile: ${formData.mobile}%0A` +
      `Group Size: ${formData.groupSize}`;
    
    window.open(`https://wa.me/91${PHONE_NUMBER}?text=${message}`, '_blank');
    setShowBookingModal(false);
    setFormData({ name: "", email: "", mobile: "", groupSize: "" });
  };

  const dhams = [
    {
      name: "Yamunotri",
      description: "The source of the sacred Yamuna River, dedicated to Goddess Yamuna",
      altitude: "3,293 meters",
      bestTime: "May to June, September to October"
    },
    {
      name: "Gangotri",
      description: "Origin of the holy Ganges River, dedicated to Goddess Ganga",
      altitude: "3,100 meters",
      bestTime: "May to June, September to October"
    },
    {
      name: "Kedarnath",
      description: "One of the 12 Jyotirlingas, dedicated to Lord Shiva",
      altitude: "3,583 meters",
      bestTime: "May to June, September to October"
    },
    {
      name: "Badrinath",
      description: "Dedicated to Lord Vishnu, one of the most important pilgrimage sites",
      altitude: "3,133 meters",
      bestTime: "May to June, September to October"
    }
  ];

  const highlights = [
    "Comfortable AC Tempo Travellers & Buses",
    "Experienced Drivers Familiar with Mountain Routes",
    "Flexible Itinerary Options",
    "24/7 Customer Support During Journey",
    "Clean & Well-Maintained Vehicles",
    "Affordable Pricing with No Hidden Costs"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
            <img 
              src="/images/chardham/chardham-hero.png" 
              alt="Char Dham Yatra" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 relative z-20 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
              Char Dham Yatra
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
              Embark on a Divine Pilgrimage to the Four Sacred Shrines of Uttarakhand
            </p>
            <Button 
              onClick={() => setShowBookingModal(true)}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold"
            >
              Book Your Yatra Now
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                About Char Dham Yatra
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Char Dham Yatra is one of the most revered pilgrimages in Hinduism, encompassing four sacred shrines 
                nestled in the majestic Himalayas of Uttarakhand. This spiritual journey takes devotees through breathtaking 
                landscapes, ancient temples, and divine experiences that cleanse the soul and bring inner peace.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">4</h3>
                <p className="text-muted-foreground">Sacred Dhams</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">10-12</h3>
                <p className="text-muted-foreground">Days Journey</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <Mountain className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">~1,200</h3>
                <p className="text-muted-foreground">KM Distance</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">Divine</h3>
                <p className="text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Dhams */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-foreground mb-12">
              The Four Sacred Dhams
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {dhams.map((dham, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{dham.name}</h3>
                      <p className="text-muted-foreground mb-3">{dham.description}</p>
                      <div className="space-y-1 text-sm">
                        <p className="text-foreground"><strong>Altitude:</strong> {dham.altitude}</p>
                        <p className="text-foreground"><strong>Best Time:</strong> {dham.bestTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-foreground mb-12">
              Why Choose Chaudhary Travels?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your Char Dham Yatra with us and experience comfort, safety, and divine blessings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowBookingModal(true)}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold"
              >
                Book Now
              </Button>
              <a href={`tel:+91${PHONE_NUMBER}`}>
                <Button 
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-foreground">Book Char Dham Yatra</h3>
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1 block">Full Name *</label>
                  <Input 
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1 block">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1 block">Mobile Number *</label>
                  <Input 
                    required
                    type="tel"
                    placeholder="Your Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1 block">Group Size *</label>
                  <Input 
                    required
                    type="number"
                    placeholder="Number of People"
                    value={formData.groupSize}
                    onChange={(e) => setFormData({...formData, groupSize: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6"
                >
                  Submit Request
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Or call us directly</p>
                <a href={`tel:+91${PHONE_NUMBER}`} className="text-primary font-semibold text-lg">
                  +91 {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
