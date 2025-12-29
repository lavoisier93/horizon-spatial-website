import { Link } from "wouter";
import { MapPin, Mail, Globe, Linkedin, Twitter, Facebook, Instagram, Phone, ArrowRight } from "lucide-react";

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
        {/* SEO Rich Text Section */}
        <div className="mb-12 p-8 bg-background rounded-2xl border border-border">
          <h2 className="font-heading font-bold text-2xl mb-4 text-primary">
            Horizon Spatial — Cabinet d&apos;Urbanisme Agréé à Abidjan
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Horizon Spatial</strong> est votre <strong>cabinet d&apos;urbanisme agréé à Abidjan</strong>, spécialisé dans la conception de <strong>plans de lotissement</strong>, l&apos;accompagnement pour les <strong>demandes d&apos;ACD</strong> (Arrêté de Concession Définitive), et l&apos;obtention d&apos;<strong>approbations de lotissement</strong> en Côte d&apos;Ivoire. Notre équipe d&apos;<strong>urbanistes agréés</strong> vous accompagne également dans vos projets de <strong>régularisation foncière</strong>, <strong>restructuration urbaine</strong>, et la mise en place de <strong>SIG foncier</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Que vous soyez promoteur immobilier, propriétaire foncier ou collectivité locale, nous vous guidons de la <strong>convention de lotissement</strong> à l&apos;obtention de votre <strong>titre foncier</strong> ou <strong>certificat foncier</strong>. Basés à Abidjan, nous intervenons sur l&apos;ensemble du territoire ivoirien pour vos <strong>plans d&apos;opération immobilière</strong> et <strong>plans de promotion immobilière</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden bg-white">
                <img src="/icon.png" alt="Horizon Spatial - Cabinet d'urbanisme agréé Abidjan" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl">Horizon Spatial</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              <em>Voir plus loin, bâtir mieux.</em> Nous combinons l&apos;expertise d&apos;<strong>urbaniste agréé</strong> et les technologies <strong>SIG</strong> les plus avancées pour transformer les territoires de Côte d&apos;Ivoire.
            </p>
            <div className="flex gap-3">
              <a 
                href={CONTACT_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn - Horizon Spatial Cabinet d'urbanisme"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={CONTACT_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter / X - Horizon Spatial"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={CONTACT_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook - Horizon Spatial CI"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={CONTACT_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram - Horizon Spatial"
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Urbanisme Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services Urbanisme</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/urbanisme-cote-ivoire">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Plan de Lotissement
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/urbanisme-cote-ivoire">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Demande d&apos;ACD
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/urbanisme-cote-ivoire">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Approbation de Lotissement
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/urbanisme-cote-ivoire">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Régularisation Foncière
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/expertise">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Restructuration Urbaine
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Géomatique Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services Géomatique</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/expertise">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> SIG Foncier & Cadastre
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/expertise">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Cartographie & Télédétection
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/expertise">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> WebSIG & Applications
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/expertise">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Levés Topographiques GPS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                    <ArrowRight size={12} /> Nos Solutions SIG
                  </span>
                </Link>
              </li>
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
            
            <div className="mt-6">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer">
                  Demander un devis gratuit <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links Row */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Accueil</span>
            </Link>
            <Link href="/expertise">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Expertise</span>
            </Link>
            <Link href="/urbanisme-cote-ivoire">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Urbanisme CI</span>
            </Link>
            <Link href="/solutions">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Solutions</span>
            </Link>
            <Link href="/projets">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Projets</span>
            </Link>
            <Link href="/about">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">À Propos</span>
            </Link>
            <Link href="/contact">
              <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Horizon Spatial — Cabinet d&apos;Urbanisme Agréé Abidjan, Côte d&apos;Ivoire. Tous droits réservés.
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
