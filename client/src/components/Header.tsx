import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_1 = "9540726566";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/employee-transport", label: "Employee Transportation" },
    { href: "/blogs", label: "Blogs" },
    { href: "/faq", label: "FAQ's" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2E9]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Mobile Menu Button (Left) */}
          <button 
            className="lg:hidden p-2 text-[#0A192F] hover:text-[#D4AF37] transition-colors z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo (Centered on Mobile, Left on Desktop) */}
          <Link href="/" className="flex items-center gap-3 group absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:translate-x-0">
            <img 
              src="/images/logo.png" 
              alt="Chaudhary Travels" 
              className="h-16 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply" 
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-[#0A192F] leading-none tracking-tight">
                CHAUDHARY TRAVELS
              </h1>
              <p className="text-xs text-[#D4AF37] font-medium tracking-widest uppercase">
                Premium Concierge
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                  location === link.href ? "text-[#D4AF37] font-semibold" : "text-[#0A192F]/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href={`tel:${PHONE_1}`} 
              className="flex items-center gap-2 text-[#0A192F]/80 hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="font-semibold text-sm">{PHONE_1}</span>
            </a>
            <Link href="/get-quote">
              <Button className="btn-gold rounded-full px-6">
                GET PRICING
              </Button>
            </Link>
          </div>

          {/* Mobile Call Icon (Right) */}
          <a 
            href={`tel:${PHONE_1}`} 
            className="lg:hidden p-2 text-[#0A192F] hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-6 h-6" />
          </a>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F2E9] border-t border-[#D4AF37]/20 py-4 shadow-lg animate-in slide-in-from-top-5 absolute w-full left-0 top-20">
          <nav className="container mx-auto px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`py-3 px-4 rounded-md transition-colors ${
                  location === link.href 
                    ? "bg-[#D4AF37]/10 text-[#D4AF37] font-semibold" 
                    : "text-[#0A192F]/80 hover:bg-[#F0F0EB] hover:text-[#D4AF37]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-[#D4AF37]/20 my-2" />
            <Link href="/get-quote" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full btn-gold mt-2">
                GET PRICING
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
