import { Link } from "wouter";
import { MapPin, Mail, Globe, Linkedin, Twitter, Facebook, Instagram, Phone } from "lucide-react";

// Coordonnées officielles de l'entreprise
const CONTACT_INFO = {
  address: "Abidjan, Côte d'Ivoire",
  email: "contact@horizonspatial.ci",
  emailCommercial: "commercial@horizonspatial.ci",
  phone: "+225 07 89 89 10 01",
  website: "www.horizonspatial.ci",
  social: {
    linkedin: "https://www.linkedin.com/company/horizon-spatial",
    twitter: "https://twitter.com/HorizonSpatial",
    facebook: "https://www.facebook.com/HorizonSpatialCI",
    instagram: "https://www.instagram.com/horizonspatial.ci"
  }
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden bg-white">
                <img src="/icon.png" alt="Horizon Spatial Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl">Horizon Spatial</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Voir plus loin, bâtir mieux. Nous combinons l&apos;expertise urbanistique africaine et les technologies géospatiales les plus avancées pour transformer les territoires.
            </p>
            <div className="flex gap-3">
              <a 
                href={CONTACT_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={CONTACT_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={CONTACT_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={CONTACT_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/expertise">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Expertise</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/projets">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Projets</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">À Propos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Urbanisme Réglementaire</li>
              <li className="text-muted-foreground">Plans de Lotissements</li>
              <li className="text-muted-foreground">Systèmes d&apos;Information Géographique</li>
              <li className="text-muted-foreground">Cartographie & Télédétection</li>
              <li className="text-muted-foreground">Accompagnement ACD</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span className="text-muted-foreground">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-primary shrink-0" size={18} />
                <a href={`https://${CONTACT_INFO.website}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {CONTACT_INFO.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Horizon Spatial. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/mentions-legales">
              <span className="hover:text-primary transition-colors cursor-pointer">Mentions Légales</span>
            </Link>
            <Link href="/politique-confidentialite">
              <span className="hover:text-primary transition-colors cursor-pointer">Politique de Confidentialité</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
