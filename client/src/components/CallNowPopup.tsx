import { useState, useEffect } from "react";
import { Phone, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallNowPopupProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
}

export default function CallNowPopup({ isOpen, onClose, phoneNumber = "9540726566" }: CallNowPopupProps) {
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(8);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-serif font-bold text-center text-gray-900 mb-2">
          Quote Request Submitted!
        </h2>

        {/* Message */}
        <p className="text-center text-gray-600 mb-6">
          We'll contact you within <span className="font-semibold text-primary">30 minutes</span>. 
          Don't want to wait? Call us directly!
        </p>

        {/* Call Now Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-3 w-full bg-[#C5A059] hover:bg-[#B08D47] text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-[1.02] shadow-lg"
        >
          <Phone className="w-6 h-6" />
          Call Now: {phoneNumber}
        </a>

        {/* Auto-close countdown */}
        <p className="text-center text-sm text-gray-400 mt-4">
          This popup will close in <span className="font-semibold">{countdown}</span> seconds
        </p>

        {/* Skip button */}
        <button
          onClick={onClose}
          className="w-full text-center text-gray-500 hover:text-gray-700 text-sm mt-2 underline"
        >
          Close now
        </button>
      </div>
    </div>
  );
}
