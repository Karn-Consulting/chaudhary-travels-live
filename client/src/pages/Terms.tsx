import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
              <h3>1. Booking & Confirmation</h3>
              <p>
                All bookings are subject to availability and confirmation by Chaudhary Travels. A booking is considered confirmed only after the receipt of the advance payment as specified during the booking process.
              </p>

              <h3>2. Payment Terms</h3>
              <ul>
                <li>25% advance payment is required to confirm the booking.</li>
                <li>The remaining balance must be paid before the start of the journey or as agreed upon in writing.</li>
                <li>We accept payments via UPI, Bank Transfer, Credit/Debit Cards, and Cash.</li>
                <li>GST @ 5% (or as applicable) will be charged extra on the total bill amount.</li>
              </ul>

              <h3>3. Cancellation & Refund Policy</h3>
              <ul>
                <li><strong>48+ hours before trip:</strong> Full refund of the advance amount.</li>
                <li><strong>24-48 hours before trip:</strong> 25% cancellation charge on the total trip cost.</li>
                <li><strong>Less than 24 hours before trip:</strong> No refund. 100% cancellation charge.</li>
              </ul>

              <h3>4. Vehicle Usage</h3>
              <p>
                The vehicle will be provided for the specific route and duration mentioned in the booking. Any deviation from the agreed route or extension of time will be charged extra on a pro-rata basis.
              </p>
              <p>
                The vehicle will not be used for any illegal activities or for carrying prohibited items. Smoking and consumption of alcohol are strictly prohibited inside the vehicle.
              </p>

              <h3>5. Kilometers & Time Calculation</h3>
              <p>
                Kilometers and time are calculated from our garage to garage (Garage location: Mandawali, East Delhi). A minimum of 250 km per day will be charged for outstation trips.
              </p>

              <h3>6. Driver Allowance & Night Charges</h3>
              <p>
                Driver allowance covers the driver's food and stay. Night driving charges apply if the vehicle is used between 10:00 PM and 6:00 AM.
              </p>

              <h3>7. Liability</h3>
              <p>
                Chaudhary Travels will not be responsible for any loss, theft, or damage to the passenger's luggage or personal belongings. Passengers are advised to take care of their valuables.
              </p>
              <p>
                In case of vehicle breakdown, we will make every effort to provide an alternative vehicle. However, we shall not be liable for any consequential loss or delay caused due to mechanical failure, traffic, or weather conditions.
              </p>

              <h3>8. Jurisdiction</h3>
              <p>
                Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts in Delhi.
              </p>

              <div className="mt-12 p-6 bg-secondary rounded-lg border border-border">
                <h4 className="text-lg font-bold mb-2">Company Information</h4>
                <p className="text-sm mb-1"><strong>Chaudhary Travels</strong></p>
                <p className="text-sm mb-1">GSTIN: 07AZGPC2851E1ZR</p>
                <p className="text-sm">Address: A/28, Second Floor, Gali No 13, Mandawali Unchepar, East Delhi, Delhi, 110092</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
