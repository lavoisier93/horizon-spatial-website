#!/usr/bin/env python3
from PIL import Image
from pathlib import Path

img_dir = Path("/home/ubuntu/horizon-spatial-website/client/public/images")

# Convertir l'image JPG en WebP
input_path = img_dir / "projet-pdl-poro-temp.jpg"
output_path = img_dir / "projet-pdl-poro.webp"

img = Image.open(input_path)
if img.mode in ('RGBA', 'P'):
    img = img.convert('RGB')

# Redimensionner si nécessaire
max_width = 1200
if img.width > max_width:
    ratio = max_width / img.width
    new_height = int(img.height * ratio)
    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

img.save(output_path, 'WEBP', quality=85, optimize=True)
print(f"Converti: {output_path.name} ({output_path.stat().st_size / 1024:.1f}KB)")

# Supprimer le fichier temporaire
input_path.unlink()
print("Fichier temporaire supprimé")
