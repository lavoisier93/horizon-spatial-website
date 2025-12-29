import { Button } from "@/components/ui/button";
import { Map, Layers, Building2, Database, Globe, Ruler, FileText, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";

export default function Expertise() {
  return (
    <PageTransition>
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Expertise — Horizon Spatial</title>
        <meta name="description" content="Découvrez notre expertise unique en urbanisme réglementaire, solutions SIG, analyse territoriale et formation. Nous transformons les données en décisions stratégiques."
        />
        <meta property="og:title" content="Expertise — Horizon Spatial" />
        <meta property="og:description" content="L&apos;alliance de la planification urbaine et de l&apos;intelligence géospatiale pour des projets durables."
        />
        <meta property="og:url" content="https://www.horizonspatial.ci/expertise" />
        <meta property="og:image" content="https://www.horizonspatial.ci/logo.jpg" />
        <link rel="canonical" href="https://www.horizonspatial.ci/expertise" />
      </Helmet>
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container text-center max-w-4xl mx-auto">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Nos Domaines d&apos;Intervention</span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Une double expertise unique en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Urbanisme & Géomatique
            </span>
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Nous combinons la planification territoriale traditionnelle avec les technologies géospatiales les plus avancées pour offrir des solutions complètes et innovantes.
          </p>
        </div>
      </section>

      {/* Urbanisme Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Urbanisme et Planification"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 size={16} /> Pôle Urbanisme
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Aménagement du Territoire</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Notre expertise couvre l&apos;ensemble de la chaîne de valeur des projets d&apos;aménagement, depuis les études préliminaires jusqu&apos;à la mise en œuvre opérationnelle.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 text-primary">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Documents Réglementaires</h4>
                    <p className="text-muted-foreground text-sm">Schémas Directeurs (SDU), Plans d&apos;Urbanisme (PUD/PUd) et Plans d&apos;Aménagement de Zone (PAZ).</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 text-primary">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Études & Planification</h4>
                    <p className="text-muted-foreground text-sm">Diagnostics territoriaux, faisabilité de lotissements, régularisation foncière et prévention des risques.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 text-primary">
                    <Ruler size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Conception & Programmation</h4>
                    <p className="text-muted-foreground text-sm">Aménagement d&apos;espaces publics, programmation d&apos;équipements et rénovation urbaine.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Géomatique Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Globe size={16} /> Pôle Géomatique
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Systèmes d&apos;Information Géographique</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nous maîtrisons l&apos;ensemble des technologies géospatiales modernes pour transformer la donnée en intelligence territoriale exploitable.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 text-secondary">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Solutions SIG Avancées</h4>
                    <p className="text-muted-foreground text-sm">Bases de données spatiales (PostGIS), SIG Foncier, Cadastral et gestion des réseaux.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 text-secondary">
                    <Map size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Cartographie & Télédétection</h4>
                    <p className="text-muted-foreground text-sm">Traitement d&apos;images satellites, photogrammétrie par drone et modélisation 3D.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 text-secondary">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Analyse Spatiale</h4>
                    <p className="text-muted-foreground text-sm">Études de localisation, analyse d&apos;accessibilité et modélisation prospective.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted group">
                <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2069&auto=format&fit=crop" 
                  alt="Géomatique et SIG"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Besoin d&apos;une expertise technique ?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Que ce soit pour un plan d'urbanisme ou une solution SIG complexe, notre équipe est prête à relever le défi.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-heading font-bold">
              Demander une consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Methodologie Section */}
      <section className="py-24">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Notre Approche : La Donnée au Coeur de la Décision</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Chaque mission suit un processus rigoureux en 4 étapes, garantissant des résultats fiables et adaptés à vos besoins spécifiques.
          </p>
        </div>
      </section>

      {/* Outils & Technologies */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Outils & Technologies</h2>
            <p className="text-muted-foreground text-lg">
              Nous mobilisons les meilleures technologies pour garantir la précision et l&apos;efficacité de nos analyses.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </PageTransition>
  );
}
