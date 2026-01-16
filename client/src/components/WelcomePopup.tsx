import { useState, useEffect } from "react";
import { X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: ""
  });

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup");
    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenWelcomePopup", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    
    // Send to WhatsApp
    const message = `New Lead from Welcome Popup:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AFrom: ${formData.from || 'Not specified'}%0ATo: ${formData.to || 'Not specified'}`;
    window.open(`https://wa.me/919540726566?text=${message}`, '_blank');
    
    toast.success("Thank you! We'll contact you within 30 minutes with the best quote.");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header with Image */}
        <div className="relative h-40 bg-gradient-to-r from-[#8B7355] to-[#6B5A45] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-luxury-fleet.webp')] bg-cover bg-center opacity-30" />
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors z-50 cursor-pointer"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center">
              Welcome to Chaudhary Travels
            </h2>
            <p className="text-white/90 text-sm mt-2 text-center">
              Premium Vehicle Rentals Across India
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-foreground">Get Your Free Quote Now!</p>
            <p className="text-sm text-muted-foreground">Fill in your details and we'll call you back</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-11 bg-gray-50"
                  placeholder="Your Name *"
                />
              </div>
              <div>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11 bg-gray-50"
                  placeholder="Mobile Number *"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                  className="h-11 bg-gray-50"
                  placeholder="From City"
                />
              </div>
              <div>
                <Input
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                  className="h-11 bg-gray-50"
                  placeholder="To City"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#8B7355] hover:bg-[#6B5A45] text-white font-bold h-12 text-base"
            >
              Get Free Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">Or call us directly</p>
            <a 
              href="tel:9540726566" 
              className="inline-flex items-center gap-2 text-[#8B7355] font-bold text-lg hover:underline"
            >
              <Phone className="w-5 h-5" /> +91 95407 26566
            </a>
          </div>

          <button
            onClick={handleClose}
            className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, I'll browse first
          </button>
        </div>
      </div>
    </div>
  );
}
