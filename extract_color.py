from PIL import Image
import collections

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        # Resize to speed up processing and ignore small details
        img = img.resize((100, 100))
        
        # Get colors from the corners (likely background)
        width, height = img.size
        corners = [
            (0, 0), (width-1, 0), (0, height-1), (width-1, height-1),
            (10, 10), (width-10, 10), (10, height-10), (width-10, height-10) # slightly inner
        ]
        
        colors = []
        for x, y in corners:
            colors.append(img.getpixel((x, y)))
            
        # Find most common color among corners
        counter = collections.Counter(colors)
        most_common = counter.most_common(1)[0][0]
        
        return '#{:02x}{:02x}{:02x}'.format(most_common[0], most_common[1], most_common[2])
    except Exception as e:
        return str(e)

# Check the Gemini generated image which likely has the paper texture
print(f"Logo Background Color: {get_dominant_color('/home/ubuntu/upload/Gemini_Generated_Image_hmi36fhmi36fhmi3(1).png')}")
