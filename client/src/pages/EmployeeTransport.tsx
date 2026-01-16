import { useState } from "react";
import { Link } from "wouter";
import { 
  Building2, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Shuttle Options
const shuttleOptions = {
  basic: [
    {
      name: "Tempo Traveller",
      seats: "13 | 17 | 20 | 26",
      image: "/images/fleet/tempo-traveller.jpg"
    },
    {
      name: "Mini Bus",
      seats: "27 | 29 | 32 | 35",
      image: "/images/fleet/mini-bus.jpg"
    },
    {
      name: "Bus",
      seats: "37 | 40 | 45 | 49",
      image: "/images/fleet/bus.jpg"
    },
    {
      name: "Car",
      seats: "4 | 6 | 7",
      image: "/images/fleet/car.jpg"
    }
  ],
  executive: [
    {
      name: "Tempo Traveller",
      seats: "13 | 17 | 20 | 26",
      image: "/images/fleet/tempo-traveller-executive.jpg"
    },
    {
      name: "Mini Bus",
      seats: "27 | 29 | 32 | 35",
      image: "/images/fleet/mini-bus-executive.jpg"
    },
    {
      name: "Bus",
      seats: "37 | 40 | 45 | 49",
      image: "/images/fleet/bus-executive.jpg"
    },
    {
      name: "Car",
      seats: "4 | 6 | 7",
      image: "/images/fleet/car-executive.jpg"
    }
  ]
};

// Why Choose Us Features
const features = [
  {
    icon: Building2,
    title: "An end to end travel solution",
    description: "From efficient route design to hassle-free operations & transparent invoicing. We take care of your entire staff transport operation."
  },
  {
    icon: Clock,
    title: "Minimize your transportation costs",
    description: "Our logistics team works to minimize all associated transport costs, ensuring there are no hidden charges. We also don't compromise on your employees' comfort & safety."
  },
  {
    icon: Users,
    title: "High-Quality vehicles & drivers",
    description: "Our buses are kept in prime condition through frequent checks & strict adherence to maintenance schedules. Drivers are experienced, trained & groomed."
  },
  {
    icon: Shield,
    title: "World-class operations",
    description: "Operations SOPs with an emphasis on punctuality, reliability, cleanliness & contingency planning. The 99.6% trip fulfillment rate & backup buses ensure your organization functions without any interruptions."
  }
];

// Safety Features
const safetyFeatures = [
  {
    title: "100% compliance with WHO's Sanitization SOPs",
    points: [
      "At Chaudhary Travels, we ensure that all our buses are sanitized before every trip using a WHO-approved disinfectant.",
      "Mandatory use of face masks by the driver, operations staff & passengers.",
      "Hand Sanitizers in every bus for passengers to disinfect themselves."
    ]
  },
  {
    title: "Temperature checks of drivers, operations staff & passengers",
    points: [
      "Daily temperature checks for all drivers & operational staff.",
      "All drivers have been trained in conducting passenger temperature checks & in following best hygiene practices.",
      "Immediate intimation to the HR/Admin, if any of the passengers have a high body temperature (> 98 F)"
    ]
  },
  {
    title: "Buses dedicated to serving only your company",
    points: [
      "Buses are reserved only for the use of your organization's employees during the term of service.",
      "This prevents buses from being used for other trips and hence reduces exposure to contaminants.",
      "This will significantly reduce the need of contact tracing & provides a safe, sanitized bus only for your employees."
    ]
  }
];

export default function EmployeeTransport() {
  const [activeTab, setActiveTab] = useState<'basic' | 'executive'>('basic');
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    officeLocation: "",
    comments: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.company) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you! Our corporate team will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", company: "", officeLocation: "", comments: "" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-secondary">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent z-10" />
            <img 
              src="/images/employee-transport-hero.jpg" 
              alt="Corporate Transport" 
              className="w-full h-full object-cover object-center opacity-50"
            />
          </div>

          <div className="container mx-auto px-4 relative z-20 text-center">
            <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-10 duration-1000 fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight uppercase">
                ARRANGING BUS SERVICES<br />
                <span className="text-foreground">FOR OFFICE EMPLOYEES IS HARD</span>
              </h1>
              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
                <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                  From pricing without hidden charges, strict adherence to vehicle sanitization, maintenance & problem-free operations. There are lots of factors to consider & manage.
                </p>
                <p className="text-foreground font-medium text-lg">
                  We've however made it extremely easy & hassle-free for you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                  <a href="#shuttle-options" className="btn-gold px-8 py-3 rounded-md font-semibold text-sm md:text-base uppercase tracking-wider">
                    KNOW MORE
                  </a>
                  <a href="#contact" className="px-8 py-3 rounded-md font-semibold text-sm md:text-base border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-wider">
                    GET IN TOUCH
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shuttle Options Section */}
        <section id="shuttle-options" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Shuttle options available for your staff transportation
              </h2>
              
              {/* Toggle Switch */}
              <div className="flex justify-center items-center gap-4 mb-12">
                <button 
                  onClick={() => setActiveTab('basic')}
                  className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeTab === 'basic' 
                      ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  Basic
                </button>
                <div className="h-8 w-[1px] bg-border"></div>
                <button 
                  onClick={() => setActiveTab('executive')}
                  className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeTab === 'executive' 
                      ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  Executive
                </button>
              </div>

              <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-sm md:text-base">
                {activeTab === 'basic' 
                  ? "Buses which are designed with minimal features & minimal costs. These buses are ideal to provide shuttle services for the staff or factory workers."
                  : "Buses with state of the art engineering, comfort & features. Ideal for shuttle services of corporate employees."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shuttleOptions[activeTab].map((option, index) => (
                <Card key={index} className="bg-card border border-border shadow-sm hover:shadow-md transition-all group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={option.image} 
                      alt={option.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-bold text-foreground mb-2">{option.name}</h3>
                    <p className="text-muted-foreground text-sm">Seats: {option.seats}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
                Why Choose Chaudhary Travels as your Employee Transport Partner?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center px-4 group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why is Chaudhary Travels the safest way for your organization to travel?
              </h2>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-muted-foreground items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3">
                    <img 
                      src={`/images/safety-${index + 1}.svg`} 
                      alt="Safety Feature" 
                      className="w-full h-auto opacity-80"
                      onError={(e) => {
                        e.currentTarget.src = "/images/pattern-overlay.png"; // Fallback
                        e.currentTarget.style.opacity = "0.1";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-xl overflow-hidden border border-border">
              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Get in touch with us
                  </h2>
                  <p className="text-muted-foreground">
                    You can also give us a call on <a href="tel:9540726566" className="text-primary hover:underline font-medium">9540726566</a>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                      <Input
                        placeholder="Full Name *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Contact Number</label>
                      <Input
                        placeholder="Phone No. *"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                      <Input
                        placeholder="Email Id *"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name</label>
                      <Input
                        placeholder="Company Name *"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Office Location</label>
                      <Input
                        placeholder="Office Location *"
                        value={formData.officeLocation}
                        onChange={(e) => setFormData({...formData, officeLocation: e.target.value})}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Additional Comments</label>
                    <Textarea
                      placeholder="Message"
                      value={formData.comments}
                      onChange={(e) => setFormData({...formData, comments: e.target.value})}
                      className="bg-background min-h-[100px]"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <Button type="submit" className="btn-gold px-12 py-6 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                      PROCEED
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
