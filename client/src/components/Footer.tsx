import { Link } from "wouter";
import { MapPin, Mail, Globe, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-heading font-bold">
                H
              </div>
              <span className="font-heading font-bold text-xl">Horizon Spatial</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Voir plus loin, bâtir mieux. Nous combinons l'expertise urbanistique africaine et les technologies géospatiales les plus avancées pour transformer les territoires.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={16} />
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
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Urbanisme Réglementaire</li>
              <li className="text-muted-foreground">Systèmes d'Information Géographique</li>
              <li className="text-muted-foreground">Cartographie & Télédétection</li>
              <li className="text-muted-foreground">Aménagement du Territoire</li>
              <li className="text-muted-foreground">Solutions Smart City</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span className="text-muted-foreground">Abidjan, Plateau<br />Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:contact@horizonspatial.ci" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@horizonspatial.ci
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-primary shrink-0" size={18} />
                <a href="https://www.horizonspatial.ci" className="text-muted-foreground hover:text-primary transition-colors">
                  www.horizonspatial.ci
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Horizon Spatial. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
