import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
              <p>
                At Chaudhary Travels ("we", "us", or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
              </p>

              <h3>1. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, phone number, email address, and pickup/drop-off addresses provided during booking or inquiry.</li>
                <li><strong>Booking Details:</strong> Travel dates, vehicle preferences, and payment information.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>To process your bookings and provide the requested transportation services.</li>
                <li>To communicate with you regarding your booking, including confirmations, updates, and support.</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To send you promotional offers and updates (only if you have opted in).</li>
                <li>To comply with legal obligations and resolve disputes.</li>
              </ul>

              <h3>3. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h3>4. Sharing of Information</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your data with:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted partners who assist us in operating our website and conducting our business (e.g., payment processors, driver partners), subject to confidentiality agreements.</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
              </ul>

              <h3>5. Cookies</h3>
              <p>
                Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can choose to disable cookies through your browser settings, but this may limit some features of our website.
              </p>

              <h3>6. Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal information held by us. You may also opt-out of receiving marketing communications at any time. To exercise these rights, please contact us at info@chaudharytravels.co.in.
              </p>

              <h3>7. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
              </p>

              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p>
                <strong>Chaudhary Travels</strong><br />
                Email: info@chaudharytravels.co.in<br />
                Phone: 9540726566<br />
                Address: A/28, Second Floor, Gali No 13, Mandawali Unchepar, East Delhi, Delhi, 110092
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
