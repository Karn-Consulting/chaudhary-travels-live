import { useState } from "react";
import { Link } from "wouter";
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  HelpCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PHONE_1 = "9540726566";
const WHATSAPP = "919540726566";

const faqs = [
  {
    question: "How do I book a vehicle with Chaudhary Travels?",
    answer: "Booking is simple! You can either fill out the quote form on our website, call us directly at 9540726566, or send us a WhatsApp message. Our team will get back to you within 30 minutes with the best pricing and availability."
  },
  {
    question: "What types of vehicles do you offer?",
    answer: "We offer a wide range of vehicles including Tempo Travellers (13, 17, 20, 26 seater), Mini Buses (27, 29, 35 seater), Buses (37, 45, 49 seater), and Cars (Sedan, SUV, Innova Crysta). All vehicles are well-maintained and come with experienced drivers."
  },
  {
    question: "Do you provide AC and Non-AC options?",
    answer: "Yes, we provide both AC and Non-AC vehicles. You can choose based on your preference and budget. AC vehicles are recommended for summer travel and long-distance trips."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 48 hours before the trip are eligible for a full refund. Cancellations within 24-48 hours will incur a 25% charge. Cancellations within 24 hours are non-refundable. Please contact our support team for any emergency situations."
  },
  {
    question: "Are your drivers trained and verified?",
    answer: "Absolutely! All our drivers undergo thorough background verification, have valid commercial driving licenses, and complete our comprehensive training program. They are experienced, courteous, and know the routes well."
  },
  {
    question: "Do you offer employee transportation services?",
    answer: "Yes, we specialize in corporate employee transportation. We offer dedicated routes, GPS tracking, 24/7 support, and flexible scheduling. Many Fortune 500 companies trust us for their daily employee commute needs."
  },
  {
    question: "What cities do you operate in?",
    answer: "We have a strong presence across major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Pune, Hyderabad, Gurgaon, and more. We also provide outstation services to any destination in India."
  },
  {
    question: "How is the pricing calculated?",
    answer: "Pricing depends on the vehicle type, distance, duration, and whether it's a one-way or round trip. We offer transparent pricing with no hidden charges. Get a free quote by filling out our form or calling us."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and cash. For corporate clients, we also offer credit terms and monthly billing options."
  },
  {
    question: "Is there 24/7 customer support?",
    answer: "Yes! Our customer support team is available 24/7 to assist you. Whether it's a booking query, trip modification, or emergency support during travel, we're always here to help."
  }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Support Center</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our vehicle rental services, booking process, and policies.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index}
                  className={`border transition-all duration-300 ${
                    openFaq === index 
                      ? "border-primary/50 shadow-md bg-secondary/30" 
                      : "border-border hover:border-primary/30 bg-card"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className={`w-5 h-5 shrink-0 ${openFaq === index ? "text-primary" : "text-muted-foreground"}`} />
                      <h3 className={`font-bold text-lg ${openFaq === index ? "text-primary" : "text-foreground"}`}>
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-4" />
                    )}
                  </button>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pl-15 ml-9 border-l-2 border-primary/10">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="max-w-3xl mx-auto mt-16">
              <Card className="bg-secondary border border-border p-10 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Our team is here to help. Contact us anytime for personalized assistance regarding your travel needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={`tel:${PHONE_1}`} className="btn-gold px-8 py-3 rounded-md font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                  <a 
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#20bd5a] transition-colors flex items-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
