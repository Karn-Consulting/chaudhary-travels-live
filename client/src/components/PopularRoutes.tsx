import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Route {
  id: number;
  from: string;
  to: string;
  distance: string;
  duration: string;
  image: string;
}

const routes: Route[] = [
  {
    id: 1,
    from: "Delhi",
    to: "Jaipur",
    distance: "280 KM",
    duration: "5 HOURS",
    image: "/images/destinations/jaipur.jpg"
  },
  {
    id: 2,
    from: "Delhi",
    to: "Chandigarh",
    distance: "250 KM",
    duration: "4.5 HOURS",
    image: "/images/destinations/chandigarh.jpg"
  },
  {
    id: 3,
    from: "Delhi",
    to: "Manali",
    distance: "540 KM",
    duration: "12 HOURS",
    image: "/images/destinations/manali.jpg"
  },
  {
    id: 4,
    from: "Delhi",
    to: "Shimla",
    distance: "350 KM",
    duration: "7 HOURS",
    image: "/images/destinations/shimla.jpg"
  },
  {
    id: 5,
    from: "Delhi",
    to: "Agra",
    distance: "230 KM",
    duration: "4 HOURS",
    image: "/images/destinations/agra.jpg"
  },
  {
    id: 6,
    from: "Delhi",
    to: "Rishikesh",
    distance: "240 KM",
    duration: "5.5 HOURS",
    image: "/images/destinations/rishikesh.jpg"
  },
  {
    id: 7,
    from: "Delhi",
    to: "Haridwar",
    distance: "220 KM",
    duration: "5 HOURS",
    image: "/images/destinations/haridwar.jpg"
  },
  {
    id: 8,
    from: "Delhi",
    to: "Nainital",
    distance: "300 KM",
    duration: "6.5 HOURS",
    image: "/images/destinations/nainital.jpg"
  }
];

export default function PopularRoutes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleRouteClick = (route: Route) => {
    setSelectedRoute(route);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success(`Quote request for ${selectedRoute?.from} to ${selectedRoute?.to} submitted! We'll contact you shortly.`);
    setShowModal(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
            DESTINATIONS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Popular Routes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleRouteClick(route)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#8B7355] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {route.distance}
                </div>
                <div className="absolute top-3 right-3 bg-white text-[#8B7355] text-xs font-bold px-3 py-1 rounded-full">
                  {route.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-bold text-lg text-foreground">{route.from}</span>
                  <ArrowRight className="w-5 h-5 text-[#8B7355]" />
                  <span className="font-serif font-bold text-lg text-foreground">{route.to}</span>
                </div>
                <Button className="w-full bg-[#8B7355] hover:bg-[#6B5A45] text-white font-semibold">
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && selectedRoute && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="relative h-40 overflow-hidden">
              <img
                src={selectedRoute.image}
                alt={`${selectedRoute.from} to ${selectedRoute.to}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 text-xl font-serif font-bold">
                  {selectedRoute.from} <ArrowRight className="w-5 h-5" /> {selectedRoute.to}
                </div>
                <div className="text-sm opacity-90">
                  {selectedRoute.distance} • {selectedRoute.duration}
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <h3 className="font-serif font-bold text-xl text-center text-foreground mb-4">
                Get Your Free Quote
              </h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Full Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-gray-50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-gray-50"
                  placeholder="Enter your email (optional)"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Mobile Number *</label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-gray-50"
                  placeholder="Enter your mobile number"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#8B7355] hover:bg-[#6B5A45] text-white font-bold h-12 text-lg"
              >
                Submit Request
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                We'll contact you within 30 minutes with the best quote
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
