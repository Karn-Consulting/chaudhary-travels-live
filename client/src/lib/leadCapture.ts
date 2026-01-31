/**
 * Lead Capture Utility for Chaudhary Travels
 * 
 * This utility handles lead submissions through multiple channels:
 * 1. Email notification via Web3Forms (free, no backend needed)
 * 2. WhatsApp message (opens WhatsApp with pre-filled message)
 * 
 * Web3Forms sends all leads to: info@chaudharytravels.co.in
 */

// Configuration
const WHATSAPP_NUMBER = "919540726566";
const WEB3FORMS_ACCESS_KEY = "be826425-a062-4b4d-812e-b366c3c514b4";

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
  tripType?: string;
  acType?: string;
}

/**
 * Send lead data via email using Web3Forms
 * Web3Forms automatically sends to the email associated with the access key
 */
async function sendEmailNotification(data: LeadData): Promise<boolean> {
  try {
    // Build the form data object
    const formData: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `🚗 New Lead from ${data.source} - Chaudhary Travels`,
      from_name: "Chaudhary Travels Website",
      name: data.name || "Not provided",
      phone: data.phone,
      email: data.email || "Not provided",
      from_location: data.from || "Not provided",
      to_location: data.to || "Not provided",
      travel_date: data.date || "Not provided",
      return_date: data.returnDate || "Not provided",
      vehicle_type: data.vehicleType || "Not provided",
      trip_type: data.tripType || "Not provided",
      ac_preference: data.acType || "Not provided",
      company_name: data.company || "Not provided",
      number_of_employees: data.employees || "Not provided",
      additional_message: data.message || "Not provided",
      lead_source: data.source,
      submission_time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    console.log("📧 Sending lead to Web3Forms...", formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    
    console.log("📧 Web3Forms response:", result);
    
    if (result.success) {
      console.log("✅ Lead sent to email successfully via Web3Forms");
      return true;
    } else {
      console.error("❌ Web3Forms error:", result.message || result);
      return false;
    }
  } catch (error) {
    console.error("❌ Error sending email notification:", error);
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
  if (data.tripType) message += `🔄 Trip Type: ${data.tripType}%0A`;
  if (data.acType) message += `❄️ AC: ${data.acType}%0A`;
  if (data.email) message += `📧 Email: ${data.email}%0A`;
  if (data.company) message += `🏢 Company: ${data.company}%0A`;
  if (data.employees) message += `👥 Employees: ${data.employees}%0A`;
  if (data.message) message += `💬 Message: ${data.message}%0A`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

/**
 * Open WhatsApp with pre-filled message
 */
export function openWhatsApp(data: LeadData): void {
  const url = generateWhatsAppUrl(data);
  window.open(url, "_blank");
}

/**
 * Main function to capture and process leads
 * Sends email notification via Web3Forms only - WhatsApp is handled separately by components
 */
export async function captureLead(data: LeadData): Promise<{ emailSent: boolean; whatsappUrl: string }> {
  console.log("🚀 Starting lead capture process...", data);
  
  // Send email notification first and wait for it
  const emailSent = await sendEmailNotification(data);
  
  // Generate WhatsApp URL but don't open it - let the component decide when
  const whatsappUrl = generateWhatsAppUrl(data);
  
  console.log("✅ Lead capture complete. Email sent:", emailSent);
  
  return {
    emailSent,
    whatsappUrl
  };
}

/**
 * Send lead via email only (no WhatsApp popup)
 * Use this for forms where WhatsApp popup is not desired
 */
export async function captureLeadEmailOnly(data: LeadData): Promise<boolean> {
  console.log("🚀 Starting email-only lead capture...", data);
  return sendEmailNotification(data);
}

/**
 * Quick function to just open WhatsApp (for existing forms that only need WhatsApp)
 */
export function sendToWhatsApp(data: LeadData): void {
  openWhatsApp(data);
}

/**
 * Function to send email only (alias for captureLeadEmailOnly)
 */
export async function sendEmailOnly(data: LeadData): Promise<boolean> {
  return sendEmailNotification(data);
}

export default captureLead;
