import os
from PIL import Image

def generate_icons():
    img_path = 'public/logo-v2.png'
    if not os.path.exists(img_path):
        print("Error: public/logo-v2.png not found")
        return

    im = Image.open(img_path)
    im_rgba = im.convert('RGBA')
    w, h = im_rgba.size
    pixels = im_rgba.load()

    # Smooth thresholding using average intensity of pixels
    # For background pixels, R, G, B are all high (average > 165)
    # For logo pixels, average < 135
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            avg_val = (r + g + b) / 3.0
            
            if avg_val > 165:
                # Fully transparent background
                pixels[x, y] = (r, g, b, 0)
            elif avg_val < 135:
                # Fully opaque logo
                pixels[x, y] = (r, g, b, 255)
            else:
                # Smooth transition
                ratio = (165 - avg_val) / (165 - 135)
                alpha = int(255 * ratio)
                pixels[x, y] = (r, g, b, alpha)

    # Find the bounding box of non-transparent pixels
    bbox = im_rgba.getbbox()
    if not bbox:
        print("Error: Bounding box of transparent image is empty!")
        return

    print(f"Cropping logo to active bounds: {bbox}")
    cropped = im_rgba.crop(bbox)
    cw, ch = cropped.size

    # Create a 512x512 transparent canvas with a clean solid white circle background
    from PIL import ImageDraw
    badge_size = 512
    square_img = Image.new('RGBA', (badge_size, badge_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(square_img)

    # Draw a solid white circle (leaves a small margin around the edge)
    margin = 16
    draw.ellipse((margin, margin, badge_size - margin, badge_size - margin), fill=(255, 255, 255, 255))

    # Scale the logo to fit nicely in the center of the circle
    # Target width of 360px to leave clean margins
    target_w = 360
    target_h = int(ch * (target_w / cw))
    resized_logo = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # Center the scaled logo inside the circle
    offset_x = (badge_size - target_w) // 2
    offset_y = (badge_size - target_h) // 2
    square_img.paste(resized_logo, (offset_x, offset_y), resized_logo)

    # Standard Next.js Metadata Icon Targets
    targets = [
        # (filepath, size)
        ('src/app/icon.png', 512),
        ('src/app/apple-icon.png', 180),
    ]

    # Save PNG versions
    for path, size in targets:
        dir_name = os.path.dirname(path)
        if dir_name:
            os.makedirs(dir_name, exist_ok=True)
        resized = square_img.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(path, 'PNG')
        print(f"Saved {path} ({size}x{size})")

    # Save ICO versions
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    os.makedirs('src/app', exist_ok=True)
    square_img.save('src/app/favicon.ico', format='ICO', sizes=ico_sizes)
    print("Saved src/app/favicon.ico")

if __name__ == '__main__':
    generate_icons()
