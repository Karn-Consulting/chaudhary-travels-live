import { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GetQuote() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    tripType: "round_trip",
    from: "",
    to: "",
    startDate: "",
    returnDate: "",
    acType: "ac",
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.from || !formData.to || !formData.startDate || !formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Quote request submitted! We'll contact you within 30 minutes.");
    // Reset form or redirect
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Best Price Guarantee</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Get Your <span className="text-gradient-gold">Free Quote</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and our team will get back to you with the best possible rates for your journey.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card border border-border shadow-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit}>
                    {/* Trip Type Toggle */}
                    <div className="flex justify-center mb-10">
                      <div className="inline-flex bg-secondary rounded-lg p-1 border border-border">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, tripType: "round_trip"})}
                          className={`px-8 py-3 rounded-md font-semibold transition-all ${
                            formData.tripType === "round_trip" 
                              ? "bg-white text-primary shadow-sm" 
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Round Trip
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, tripType: "one_way"})}
                          className={`px-8 py-3 rounded-md font-semibold transition-all ${
                            formData.tripType === "one_way" 
                              ? "bg-white text-primary shadow-sm" 
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          One Way
                        </button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Trip Details */}
                      <div className="space-y-6">
                        <h3 className="font-serif font-bold text-xl text-foreground border-b border-border pb-2">Trip Details</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/70">From *</label>
                            <Input
                              required
                              value={formData.from}
                              onChange={(e) => setFormData({...formData, from: e.target.value})}
                              className="h-12 bg-background"
                              placeholder="Pickup City"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/70">To *</label>
                            <Input
                              required
                              value={formData.to}
                              onChange={(e) => setFormData({...formData, to: e.target.value})}
                              className="h-12 bg-background"
                              placeholder="Drop City"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground/70">Start Date *</label>
                              <Input
                                required
                                type="date"
                                value={formData.startDate}
                                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                                className="h-12 bg-background"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground/70">Return Date</label>
                              <Input
                                type="date"
                                value={formData.returnDate}
                                onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                                className="h-12 bg-background"
                                disabled={formData.tripType === "one_way"}
                              />
                            </div>
                          </div>
                          
                          {/* AC Toggle */}
                          <div className="pt-2">
                            <label className="text-sm font-medium text-foreground/70 block mb-3">Vehicle Type</label>
                            <div className="flex gap-6">
                              <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.acType === "ac" ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                                  {formData.acType === "ac" && <CheckCircle2 className="w-3 h-3 text-white" />}
                                </div>
                                <input 
                                  type="radio" 
                                  name="acType" 
                                  className="hidden" 
                                  checked={formData.acType === "ac"} 
                                  onChange={() => setFormData({...formData, acType: "ac"})}
                                />
                                <span className={`font-medium ${formData.acType === "ac" ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>AC Vehicle</span>
                              </label>
                              
                              <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.acType === "non_ac" ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                                  {formData.acType === "non_ac" && <CheckCircle2 className="w-3 h-3 text-white" />}
                                </div>
                                <input 
                                  type="radio" 
                                  name="acType" 
                                  className="hidden" 
                                  checked={formData.acType === "non_ac"} 
                                  onChange={() => setFormData({...formData, acType: "non_ac"})}
                                />
                                <span className={`font-medium ${formData.acType === "non_ac" ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>Non-AC Vehicle</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="space-y-6">
                        <h3 className="font-serif font-bold text-xl text-foreground border-b border-border pb-2">Contact Details</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/70">Full Name *</label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="h-12 bg-background"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/70">Phone Number *</label>
                            <Input
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="h-12 bg-background"
                              placeholder="Your Mobile Number"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground/70">Email Address</label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="h-12 bg-background"
                              placeholder="Your Email (Optional)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-xs text-center mb-8">
                      By submitting this form, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> & Privacy Policy.
                    </p>

                    <Button
                      type="submit"
                      className="w-full btn-gold h-14 text-lg font-bold rounded-md"
                    >
                      GET MY FREE QUOTE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
