/**
 * Lead Capture Utility for Chaudhary Travels
 * 
 * This utility handles lead submissions through multiple channels:
 * 1. Email notification via Formspree (free, no backend needed)
 * 2. WhatsApp message (opens WhatsApp with pre-filled message)
 * 
 * To set up email notifications:
 * 1. Go to https://formspree.io/
 * 2. Sign up with info@chaudharytravels.co.in
 * 3. Create a new form and get your form ID
 * 4. Replace FORMSPREE_FORM_ID below with your form ID
 */

// Configuration
const WHATSAPP_NUMBER = "919540726566";
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID"; // Replace with actual ID after signup
const EMAIL_ENABLED = FORMSPREE_FORM_ID !== "YOUR_FORMSPREE_ID";

export interface LeadData {
  name?: string;
  phone: string;
  from?: string;
  to?: string;
  date?: string;
  returnDate?: string;
  email?: string;
  company?: string;
  employees?: string;
  message?: string;
  source: string; // e.g., "Home Page Hero", "Welcome Popup", "Char Dham Yatra"
  vehicleType?: string;
}

/**
 * Send lead data via email using Formspree
 */
async function sendEmailNotification(data: LeadData): Promise<boolean> {
  if (!EMAIL_ENABLED) {
    console.log("Email notifications not configured. Set FORMSPREE_FORM_ID to enable.");
    return false;
  }

  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New Lead from ${data.source} - Chaudhary Travels`,
        name: data.name || "Not provided",
        phone: data.phone,
        from: data.from || "Not provided",
        to: data.to || "Not provided",
        date: data.date || "Not provided",
        returnDate: data.returnDate || "Not provided",
        email: data.email || "Not provided",
        company: data.company || "Not provided",
        employees: data.employees || "Not provided",
        vehicleType: data.vehicleType || "Not provided",
        message: data.message || "Not provided",
        source: data.source,
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      })
    });

    if (response.ok) {
      console.log("Email notification sent successfully");
      return true;
    } else {
      console.error("Failed to send email notification:", await response.text());
      return false;
    }
  } catch (error) {
    console.error("Error sending email notification:", error);
    return false;
  }
}

/**
 * Generate WhatsApp message URL
 */
function generateWhatsAppUrl(data: LeadData): string {
  let message = `*New Lead from ${data.source}*%0A%0A`;
  
  if (data.name) message += `👤 Name: ${data.name}%0A`;
  message += `📱 Phone: ${data.phone}%0A`;
  if (data.from) message += `📍 From: ${data.from}%0A`;
  if (data.to) message += `📍 To: ${data.to}%0A`;
  if (data.date) message += `📅 Date: ${data.date}%0A`;
  if (data.returnDate) message += `📅 Return: ${data.returnDate}%0A`;
  if (data.vehicleType) message += `🚗 Vehicle: ${data.vehicleType}%0A`;
  if (data.email) message += `📧 Email: ${data.email}%0A`;
  if (data.company) message += `🏢 Company: ${data.company}%0A`;
  if (data.employees) message += `👥 Employees: ${data.employees}%0A`;
  if (data.message) message += `💬 Message: ${data.message}%0A`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

/**
 * Open WhatsApp with pre-filled message
 */
function openWhatsApp(data: LeadData): void {
  const url = generateWhatsAppUrl(data);
  window.open(url, "_blank");
}

/**
 * Main function to capture and process leads
 * Sends email notification AND opens WhatsApp
 */
export async function captureLead(data: LeadData): Promise<{ emailSent: boolean; whatsappOpened: boolean }> {
  // Send email notification (async, don't wait)
  const emailPromise = sendEmailNotification(data);
  
  // Open WhatsApp immediately
  openWhatsApp(data);
  
  // Wait for email result
  const emailSent = await emailPromise;
  
  return {
    emailSent,
    whatsappOpened: true
  };
}

/**
 * Quick function to just open WhatsApp (for existing forms)
 */
export function sendToWhatsApp(data: LeadData): void {
  openWhatsApp(data);
}

/**
 * Function to send email only (for forms that don't need WhatsApp)
 */
export async function sendEmailOnly(data: LeadData): Promise<boolean> {
  return sendEmailNotification(data);
}

export default captureLead;
