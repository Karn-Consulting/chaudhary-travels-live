/**
 * Lead Capture Utility for Chaudhary Travels
 * 
 * This utility handles lead submissions through multiple channels:
 * 1. Email notification via Web3Forms (free, no backend needed)
 * 2. WhatsApp message (fallback - opens WhatsApp with pre-filled message)
 * 
 * Web3Forms sends all leads to: info@chaudharytravels.co.in
 */

// Configuration
const WHATSAPP_NUMBER = "919540726566";
const WEB3FORMS_ACCESS_KEY = "be826425-a062-4b4d-812e-b366c3c514b4";
const RECIPIENT_EMAIL = "info@chaudharytravels.co.in";

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
 */
async function sendEmailNotification(data: LeadData): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `🚗 New Lead from ${data.source} - Chaudhary Travels`,
        from_name: "Chaudhary Travels Website",
        to: RECIPIENT_EMAIL,
        // Lead details
        "Customer Name": data.name || "Not provided",
        "Phone Number": data.phone,
        "Email": data.email || "Not provided",
        "From Location": data.from || "Not provided",
        "To Location": data.to || "Not provided",
        "Travel Date": data.date || "Not provided",
        "Return Date": data.returnDate || "Not provided",
        "Vehicle Type": data.vehicleType || "Not provided",
        "Trip Type": data.tripType || "Not provided",
        "AC Preference": data.acType || "Not provided",
        "Company Name": data.company || "Not provided",
        "Number of Employees": data.employees || "Not provided",
        "Additional Message": data.message || "Not provided",
        "Lead Source": data.source,
        "Submission Time": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        // Redirect back (optional - for form submissions)
        redirect: false
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log("✅ Lead sent to email successfully via Web3Forms");
      return true;
    } else {
      console.error("❌ Web3Forms error:", result.message);
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
function openWhatsApp(data: LeadData): void {
  const url = generateWhatsAppUrl(data);
  window.open(url, "_blank");
}

/**
 * Main function to capture and process leads
 * Sends email notification via Web3Forms first, then opens WhatsApp as backup
 */
export async function captureLead(data: LeadData): Promise<{ emailSent: boolean; whatsappOpened: boolean }> {
  // Send email notification first
  const emailSent = await sendEmailNotification(data);
  
  // Open WhatsApp as additional notification channel
  openWhatsApp(data);
  
  return {
    emailSent,
    whatsappOpened: true
  };
}

/**
 * Send lead via email only (no WhatsApp popup)
 * Use this for forms where WhatsApp popup is not desired
 */
export async function captureLeadEmailOnly(data: LeadData): Promise<boolean> {
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
