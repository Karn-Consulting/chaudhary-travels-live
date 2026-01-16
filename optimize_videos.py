import os
import subprocess

VIDEO_DIR = "/home/ubuntu/chaudhary-travels/client/public/videos"
OUTPUT_DIR = "/home/ubuntu/chaudhary-travels/client/public/videos/optimized"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

files = sorted([f for f in os.listdir(VIDEO_DIR) if f.endswith((".mp4", ".mov", ".avi"))])
print(f"Found files: {files}")

for filename in files:
    input_path = os.path.join(VIDEO_DIR, filename)
    output_filename = os.path.splitext(filename)[0] + ".webm"
    output_path = os.path.join(OUTPUT_DIR, output_filename)
    
    if os.path.exists(output_path):
        print(f"Skipping {filename} (already exists)")
        continue
        
    print(f"Optimizing {filename}...")
    
    command = [
        "ffmpeg", "-i", input_path,
        "-c:v", "libvpx-vp9", "-crf", "35", "-b:v", "0",
        "-c:a", "libopus",
        "-y", output_path
    ]
    
    subprocess.run(command)
    print(f"Saved to {output_path}")

print("Video optimization complete!")
