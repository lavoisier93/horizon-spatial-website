import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Map, Database, Cpu, Globe, FileCheck, Building2, MapPin, Users, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Cabinet d'Urbanisme Agréé Abidjan | Plan de Lotissement & SIG Côte d'Ivoire — Horizon Spatial</title>
        <meta name="description" content="Horizon Spatial, cabinet d'urbanisme agréé à Abidjan. Spécialiste plan de lotissement, demande d'ACD, approbation de lotissement, SIG foncier et cartographie en Côte d'Ivoire." />
        <meta property="og:title" content="Cabinet d'Urbanisme Agréé Abidjan | Plan de Lotissement & SIG Côte d'Ivoire" />
        <meta property="og:description" content="Cabinet d'urbanisme agréé à Abidjan. Plan de lotissement, demande d'ACD, approbation de lotissement, SIG foncier en Côte d'Ivoire." />
        <meta property="og:url" content="https://www.horizonspatial.ci/" />
        <meta property="og:image" content="https://www.horizonspatial.ci/logo.jpg" />
        <link rel="canonical" href="https://www.horizonspatial.ci/" />
      </Helmet>
      <Navigation />
      <main className="isolate">
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-10 duration-1000 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Cabinet d&apos;Urbanisme Agréé à Abidjan
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight text-foreground">
              Votre <span className="text-primary">Urbaniste Agréé</span> en Côte d&apos;Ivoire
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              <strong>Horizon Spatial</strong> est votre partenaire de confiance pour vos <strong>plans de lotissement</strong>, <strong>demandes d&apos;ACD</strong>, <strong>approbations de lotissement</strong> et solutions <strong>SIG foncier</strong> en Côte d&apos;Ivoire.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 font-heading font-semibold text-lg h-14 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  Demander un devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/urbanisme-cote-ivoire">
                <Button variant="outline" size="lg" className="rounded-full px-8 font-heading font-semibold text-lg h-14 border-2 hover:bg-muted/50">
                  Guide Lotissement CI
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            {/* Abstract Layered Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Layer 1: Map Base */}
              <div className="absolute w-[500px] h-[400px] bg-white rounded-2xl shadow-2xl border border-border rotate-[-6deg] z-10 overflow-hidden group hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Map className="text-primary" />
                    <span className="font-heading font-bold text-lg">Plan de Lotissement</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-muted rounded" />
                    <div className="h-2 w-1/2 bg-muted rounded" />
                    <div className="h-32 w-full bg-muted/50 rounded-lg mt-4 border border-dashed border-border" />
                  </div>
                </div>
              </div>

              {/* Layer 2: Analysis Overlay */}
              <div className="absolute w-[500px] h-[400px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/20 rotate-[6deg] z-20 translate-x-12 translate-y-12 overflow-hidden group hover:rotate-0 hover:translate-x-0 hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Layers className="text-secondary" />
                      <span className="font-heading font-bold text-lg">SIG Foncier</span>
                    </div>
                    <span className="text-xs font-mono bg-secondary/10 text-secondary px-2 py-1 rounded">LIVE</span>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <span className="text-2xl font-bold text-primary">100%</span>
                      <p className="text-xs text-muted-foreground mt-1">Taux d&apos;approbation</p>
                    </div>
                    <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/10">
                      <span className="text-2xl font-bold text-secondary">6-12</span>
                      <p className="text-xs text-muted-foreground mt-1">Mois pour ACD</p>
                    </div>
                    <div className="col-span-2 bg-muted/30 rounded-lg p-4 border border-border flex items-end justify-between h-32">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="w-8 bg-gradient-to-t from-primary to-secondary rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Section - SEO Optimized */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Nos Services</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Services d&apos;Urbanisme et de Géomatique en Côte d&apos;Ivoire
            </h2>
            <p className="text-muted-foreground text-lg">
              En tant que <strong>cabinet d&apos;urbanisme agréé à Abidjan</strong>, nous accompagnons les promoteurs, propriétaires fonciers et collectivités dans tous leurs projets d&apos;aménagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck className="w-8 h-8 text-primary" />,
                title: "Plan de Lotissement",
                desc: "Conception et élaboration de plans de lotissement conformes à la réglementation ivoirienne. Lotissements résidentiels, économiques et mixtes.",
                link: "/urbanisme-cote-ivoire"
              },
              {
                icon: <Building2 className="w-8 h-8 text-secondary" />,
                title: "Demande d'ACD",
                desc: "Accompagnement complet pour l'obtention de l'Arrêté de Concession Définitive (ACD) et la sécurisation de votre titre foncier.",
                link: "/urbanisme-cote-ivoire"
              },
              {
                icon: <MapPin className="w-8 h-8 text-primary" />,
                title: "Approbation de Lotissement",
                desc: "Montage et suivi des dossiers d'approbation de lotissement auprès du MCLU. Convention de lotissement et certificat de conformité.",
                link: "/expertise"
              },
              {
                icon: <Database className="w-8 h-8 text-secondary" />,
                title: "SIG Foncier & Cadastre",
                desc: "Mise en place de Systèmes d'Information Géographique pour la gestion foncière. Cadastre numérique et WebSIG.",
                link: "/expertise"
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Régularisation Foncière",
                desc: "Accompagnement dans les procédures de régularisation foncière et de restructuration urbaine des quartiers informels.",
                link: "/urbanisme-cote-ivoire"
              },
              {
                icon: <Cpu className="w-8 h-8 text-secondary" />,
                title: "Cartographie & Télédétection",
                desc: "Levés topographiques, cartographie thématique, analyse d'images satellites et photogrammétrie par drone.",
                link: "/expertise"
              }
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <div className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group cursor-pointer h-full">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Trust Signals */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Pourquoi Nous Choisir</span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 leading-tight">
                Votre Cabinet d&apos;Urbanisme Agréé de Confiance à Abidjan
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Faire appel à un <strong>urbaniste agréé</strong> est une obligation légale pour tout projet de lotissement en Côte d&apos;Ivoire. Horizon Spatial vous garantit un accompagnement professionnel de la conception à l&apos;<strong>approbation de lotissement</strong>.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Urbaniste Agréé par le MCLU", desc: "Habilitation officielle pour la réalisation de plans de lotissement et documents d'urbanisme." },
                  { title: "Expertise Lotissement & ACD", desc: "Maîtrise complète des procédures de demande d'ACD, convention de lotissement et titre foncier." },
                  { title: "Technologies SIG Avancées", desc: "Bases de données spatiales PostgreSQL/PostGIS, WebSIG et cartographie numérique." },
                  { title: "Accompagnement Complet", desc: "De la demande d'Avis de Servitude à l'obtention du lotissement approuvé." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full">
                    En savoir plus sur notre cabinet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
                <img 
                  src="/images/expertise-urbanisme.webp" 
                  alt="Cabinet d'urbanisme agréé Abidjan - Plan de lotissement Côte d'Ivoire" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={600}
                />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl z-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Lotissements Approuvés</p>
                      <span className="text-3xl font-heading font-bold text-primary">15+</span>
                    </div>
                    <div className="h-10 w-px bg-border mx-4" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Hectares Planifiés</p>
                      <span className="text-3xl font-heading font-bold text-secondary">500+</span>
                    </div>
                    <div className="h-10 w-px bg-border mx-4" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Clients Satisfaits</p>
                      <span className="text-3xl font-heading font-bold text-foreground">50+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Zones d&apos;Intervention</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Urbaniste Agréé dans toute la Côte d&apos;Ivoire
            </h2>
            <p className="text-muted-foreground text-lg">
              Basé à <strong>Abidjan</strong>, notre cabinet intervient sur l&apos;ensemble du territoire ivoirien pour vos projets de <strong>lotissement</strong>, de <strong>régularisation foncière</strong> et de <strong>restructuration urbaine</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Abidjan", region: "District Autonome" },
              { city: "Bouaké", region: "Gbêkê" },
              { city: "Korhogo", region: "Poro" },
              { city: "San-Pédro", region: "San-Pédro" },
              { city: "Yamoussoukro", region: "District Autonome" },
              { city: "Daloa", region: "Haut-Sassandra" },
              { city: "Man", region: "Tonkpi" },
              { city: "Bondoukou", region: "Gontougo" }
            ].map((zone, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-colors">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <h3 className="font-heading font-bold text-lg">{zone.city}</h3>
                <p className="text-sm text-muted-foreground">{zone.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Besoin d&apos;un Plan de Lotissement ou d&apos;une Demande d&apos;ACD ?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-10 leading-relaxed">
            Contactez notre <strong>cabinet d&apos;urbanisme agréé à Abidjan</strong> pour un devis gratuit. Nous vous accompagnons de la conception à l&apos;<strong>approbation de lotissement</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg font-heading font-bold shadow-2xl hover:scale-105 transition-transform">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/projets">
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-heading font-bold border-2 border-white/30 text-white hover:bg-white/10">
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
