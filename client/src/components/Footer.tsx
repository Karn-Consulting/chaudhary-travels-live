import { Link } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ArrowRight,
  MessageCircle
} from "lucide-react";

const WHATSAPP = "919540726566";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-[#F9F9F7] border-t border-[#D4AF37]/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <img 
                    src="/images/logo.png" 
                    alt="Chaudhary Travels" 
                    className="h-16 w-auto object-contain" 
                  />
                </div>
              </div>
            </Link>
            <p className="text-[#8892B0] leading-relaxed pt-4">
              Your personal logistics and mobile sanctuary provider. We don't just sell rides; we sell status, peace of mind, and productivity.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#172A45] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#172A45] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#8892B0] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Home
                </Link>
              </li>
              <li>
                <Link href="/employee-transport" className="text-[#8892B0] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Employee Transport
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-[#8892B0] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Blogs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#8892B0] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> FAQ's
                </Link>
              </li>
              <li>
                <Link href="/get-quote" className="text-[#8892B0] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold text-[#D4AF37]">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-[#8892B0] hover:text-[#D4AF37] transition-colors cursor-pointer">Luxury Tempo Traveller</li>
              <li className="text-[#8892B0] hover:text-[#D4AF37] transition-colors cursor-pointer">Corporate Bus Rental</li>
              <li className="text-[#8892B0] hover:text-[#D4AF37] transition-colors cursor-pointer">Wedding Transportation</li>
              <li className="text-[#8892B0] hover:text-[#D4AF37] transition-colors cursor-pointer">Employee Commute</li>
              <li className="text-[#8892B0] hover:text-[#D4AF37] transition-colors cursor-pointer">Outstation Trips</li>
              <li className="text-[#8892B0] hover:text-[#D4AF37] transition-colors cursor-pointer">Airport Transfers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-bold text-[#D4AF37]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-[#8892B0]">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                <p>A/28, Second Floor, Gali No 13, Mandawali Unchepar, East Delhi, Delhi, 110092</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[#8892B0]">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <a href="tel:9540726566" className="hover:text-white transition-colors">+91 95407 26566</a>
                </div>
                <div className="flex items-center gap-3 text-[#8892B0]">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <a href="tel:9540240009" className="hover:text-white transition-colors">+91 95402 40009</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#8892B0]">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@chaudharytravels.in" className="hover:text-white transition-colors">info@chaudharytravels.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#050C18] py-6 border-t border-[#172A45]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8892B0]">
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <p>&copy; 2018 Chaudhary Travels. All rights reserved. <span className="text-xs font-bold text-green-500 ml-2 border border-green-500 px-1 rounded">v3.0 Live Fix</span></p>
            <span className="hidden md:inline text-[#172A45]">|</span>
            <p>GST: 07AZGPC2851E1ZR</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP}?text=Hi, I would like to get a quote for vehicle rental.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all z-50 group"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
      </a>
    </footer>
  );
}
