import os
from PIL import Image
import glob

# Source and destination directories
SOURCE_DIR = "/home/ubuntu/upload"
DEST_DIR = "/home/ubuntu/chaudhary-travels/client/public/images/fleet"

# Ensure destination directory exists
os.makedirs(DEST_DIR, exist_ok=True)

# List of files to process (based on previous ls output)
files = [
    "WhatsAppImage2026-01-15at6.30.02PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.30.02PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.30.02PM(3).jpeg",
    "WhatsAppImage2026-01-15at6.30.03PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.30.03PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.30.02PM.jpeg",
    "WhatsAppImage2026-01-15at6.30.03PM.jpeg",
    "WhatsAppImage2026-01-15at6.30.04PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.30.04PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.30.04PM(3).jpeg",
    "WhatsAppImage2026-01-15at6.30.04PM.jpeg",
    "WhatsAppImage2026-01-15at6.30.05PM.jpeg",
    "WhatsAppImage2026-01-15at6.34.42PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.34.42PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.34.42PM.jpeg",
    "WhatsAppImage2026-01-15at6.34.43PM.jpeg",
    "WhatsAppImage2026-01-15at6.30.28PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.30.28PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.30.29PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.30.29PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.30.29PM(3).jpeg",
    "WhatsAppImage2026-01-15at6.30.29PM.jpeg",
    "WhatsAppImage2026-01-15at6.30.28PM.jpeg",
    "WhatsAppImage2026-01-15at6.32.47PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.32.48PM.jpeg",
    "WhatsAppImage2026-01-15at6.32.50PM.jpeg",
    "WhatsAppImage2026-01-15at6.32.47PM.jpeg",
    "WhatsAppImage2026-01-15at6.33.13PM.jpeg",
    "WhatsAppImage2026-01-15at6.33.13PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.33.14PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.33.14PM.jpeg",
    "WhatsAppImage2026-01-15at6.33.17PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.33.17PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.33.17PM.jpeg",
    "WhatsAppImage2026-01-15at6.33.18PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.33.18PM.jpeg",
    "WhatsAppImage2026-01-15at6.33.18PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.33.19PM(1).jpeg",
    "WhatsAppImage2026-01-15at6.33.19PM(2).jpeg",
    "WhatsAppImage2026-01-15at6.33.19PM(3).jpeg",
    "WhatsAppImage2026-01-15at6.33.19PM.jpeg"
]

print(f"Starting optimization of {len(files)} images...")

for i, filename in enumerate(files):
    try:
        src_path = os.path.join(SOURCE_DIR, filename)
        
        # Check if file exists
        if not os.path.exists(src_path):
            print(f"Warning: File not found: {src_path}")
            continue
            
        # Open image
        with Image.open(src_path) as img:
            # Convert to RGB (in case of RGBA/P modes)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Resize if too large (max width 1920px)
            if img.width > 1920:
                ratio = 1920 / img.width
                new_height = int(img.height * ratio)
                img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
            
            # Save as WebP
            dest_filename = f"fleet-{i+1}.webp"
            dest_path = os.path.join(DEST_DIR, dest_filename)
            
            # Save with quality 80 for good balance of size/quality
            img.save(dest_path, "WEBP", quality=80, optimize=True)
            print(f"Processed: {filename} -> {dest_filename}")
            
    except Exception as e:
        print(f"Error processing {filename}: {str(e)}")

print("Optimization complete!")
