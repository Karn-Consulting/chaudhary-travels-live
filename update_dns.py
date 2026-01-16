import requests
import json

API_KEY = "dLDKeLywDyuE_Ker94Q9a2zeTkQMKnEGDfs"
API_SECRET = "QQivhChvy53RVSHDr8FYrK"
DOMAIN = "xulr21.shop"
HEADERS = {
    "Authorization": f"sso-key {API_KEY}:{API_SECRET}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

def update_dns():
    url = f"https://api.godaddy.com/v1/domains/{DOMAIN}/records"
    
    # Vercel DNS Records
    records = [
        {
            "type": "A",
            "name": "@",
            "data": "76.76.21.21",
            "ttl": 600
        },
        {
            "type": "CNAME",
            "name": "www",
            "data": "cname.vercel-dns.com",
            "ttl": 600
        }
    ]
    
    try:
        response = requests.put(url, headers=HEADERS, json=records)
        if response.status_code == 200:
            print("Successfully updated DNS records for Vercel.")
        else:
            print(f"Failed to update DNS: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    update_dns()
