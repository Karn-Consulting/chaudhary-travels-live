import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleName?: string;
}

export default function BookingModal({ isOpen, onClose, vehicleName }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success(`Booking request for ${vehicleName || "vehicle"} submitted! We'll contact you within 30 minutes.`);
    onClose();
    setFormData({ name: "", email: "", phone: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="relative bg-gradient-to-r from-[#8B7355] to-[#6B5A45] p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <h3 className="font-serif font-bold text-2xl text-white">
            Book {vehicleName || "Vehicle"}
          </h3>
          <p className="text-white/80 text-sm mt-1">
            Fill in your details and we'll get back to you shortly
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
  );
}
