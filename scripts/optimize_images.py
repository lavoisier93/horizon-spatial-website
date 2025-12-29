#!/usr/bin/env python3
"""
Script pour télécharger et optimiser les images du site Horizon Spatial.
Convertit les images en WebP pour une meilleure performance.
"""

import os
import requests
from PIL import Image
from io import BytesIO
from pathlib import Path

# Configuration
OUTPUT_DIR = Path(__file__).parent.parent / "client" / "public" / "images"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Liste des images à télécharger avec leurs noms de fichier
IMAGES = {
    # Page Expertise
    "expertise-urbanisme.webp": "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop",
    "expertise-geomatique.webp": "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1200&auto=format&fit=crop",
    
    # Page Projets
    "projet-pud-bondoukou.webp": "https://images.unsplash.com/photo-1591523383370-58957457807d?q=80&w=1200&auto=format&fit=crop",
    "projet-pdl-poro.webp": "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=1200&auto=format&fit=crop",
    "projet-lotissement-bingerville.webp": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    "projet-sig-korhogo.webp": "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
    
    # Page Home - Hero et sections
    "hero-abidjan.webp": "https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=1600&auto=format&fit=crop",
    "about-team.webp": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    
    # Solutions
    "solution-hvision.webp": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    "solution-hanalytics.webp": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
}

def download_and_optimize(url: str, output_path: Path, quality: int = 85, max_width: int = 1600) -> bool:
    """
    Télécharge une image, la redimensionne et la convertit en WebP.
    """
    try:
        print(f"Téléchargement: {url[:60]}...")
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Ouvrir l'image
        img = Image.open(BytesIO(response.content))
        
        # Convertir en RGB si nécessaire (pour les PNG avec transparence)
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Redimensionner si trop grande
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Sauvegarder en WebP
        img.save(output_path, 'WEBP', quality=quality, optimize=True)
        
        # Afficher les stats
        original_size = len(response.content) / 1024
        final_size = output_path.stat().st_size / 1024
        print(f"  ✓ {output_path.name}: {original_size:.1f}KB -> {final_size:.1f}KB ({(1-final_size/original_size)*100:.0f}% réduction)")
        
        return True
        
    except Exception as e:
        print(f"  ✗ Erreur: {e}")
        return False

def main():
    print("=" * 60)
    print("Optimisation des images pour Horizon Spatial")
    print("=" * 60)
    print(f"Dossier de sortie: {OUTPUT_DIR}")
    print()
    
    success_count = 0
    for filename, url in IMAGES.items():
        output_path = OUTPUT_DIR / filename
        if download_and_optimize(url, output_path):
            success_count += 1
    
    print()
    print("=" * 60)
    print(f"Terminé: {success_count}/{len(IMAGES)} images optimisées")
    print("=" * 60)
    
    # Lister les fichiers créés
    print("\nFichiers créés:")
    for f in sorted(OUTPUT_DIR.glob("*.webp")):
        print(f"  - /images/{f.name} ({f.stat().st_size / 1024:.1f}KB)")

if __name__ == "__main__":
    main()
