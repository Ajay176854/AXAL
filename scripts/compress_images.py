import os
from PIL import Image

def compress_images():
    images_dir = r"c:\Users\ajaia\AXAL\public\images"
    total_original = 0
    total_compressed = 0
    converted_count = 0
    
    for root, dirs, files in os.walk(images_dir):
        for file in files:
            if file.lower().endswith('.png'):
                png_path = os.path.join(root, file)
                webp_path = os.path.splitext(png_path)[0] + ".webp"
                
                # Get original size
                orig_size = os.path.getsize(png_path)
                total_original += orig_size
                
                # Convert to WebP
                with Image.open(png_path) as img:
                    img.save(webp_path, "WEBP", quality=80)
                
                # Get new size
                new_size = os.path.getsize(webp_path)
                total_compressed += new_size
                converted_count += 1
                
                print(f"Converted {file}: {orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB (Saved {((orig_size - new_size)/orig_size)*100:.1f}%)")
                
                # Delete original PNG file
                os.remove(png_path)
                
    if converted_count > 0:
        print(f"\nCompleted! Converted {converted_count} files.")
        print(f"Total Original: {total_original/1024/1024:.2f} MB")
        print(f"Total Compressed: {total_compressed/1024/1024:.2f} MB")
        print(f"Total Space Saved: {(total_original - total_compressed)/1024/1024:.2f} MB ({((total_original - total_compressed)/total_original)*100:.1f}%)")
    else:
        print("No PNG files found to convert.")

if __name__ == "__main__":
    compress_images()
