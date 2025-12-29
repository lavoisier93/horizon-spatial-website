import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Eye, BarChart, Box } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";

export default function Solutions() {
  return (
    <PageTransition>
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Solutions — Horizon Spatial</title>
        <meta name="description" content="Découvrez nos solutions sur mesure en urbanisme, SIG, et développement d&apos;applications. Nous transformons vos défis en opportunités de croissance."
        />
        <meta property="og:title" content="Solutions — Horizon Spatial" />
        <meta property="og:description" content="Solutions intégrées pour l&apos;aménagement du territoire, de la planification stratégique au déploiement d&apos;outils géospatiaux avancés."
        />
        <meta property="og:url" content="https://www.horizonspatial.ci/solutions" />
        <meta property="og:image" content="https://www.horizonspatial.ci/logo.jpg" />
        <link rel="canonical" href="https://www.horizonspatial.ci/solutions" />
      </Helmet>
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container text-center max-w-4xl mx-auto">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">Innovation Technologique</span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Des solutions propriétaires <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              adaptées à l&apos;Afrique
            </span>
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Nous développons des outils logiciels innovants pour répondre aux défis spécifiques de l&apos;urbanisation et de la gestion territoriale en Afrique.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* H-Vision */}
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <Eye size={32} />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-2xl">H-Vision</h3>
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">En Dév.</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Module d&apos;Intelligence Artificielle pour la reconnaissance automatique du bâti et de l&apos;occupation des sols à partir d&apos;images satellites et de drones. Accélérez vos diagnostics territoriaux avec une précision inégalée.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Détection automatique du bâti
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Classification de l'occupation du sol
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Analyse des changements temporels
                </li>
              </ul>
            </div>

            {/* H-Analytics */}
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                <BarChart size={32} />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-2xl">H-Analytics</h3>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">MVP</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tableau de bord d&apos;indicateurs territoriaux en temps réel pour le pilotage des politiques publiques. Visualisez vos données clés pour prendre des décisions éclairées et rapides.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Monitoring urbain en temps réel
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Indicateurs de performance (KPI)
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Rapports automatisés
                </li>
              </ul>
            </div>

            {/* H-Collect */}
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <Smartphone size={32} />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-2xl">H-Collect</h3>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Opérationnel</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Application mobile de collecte de données terrain avec synchronisation cloud et géolocalisation automatique. Fiabilisez vos enquêtes terrain et centralisez vos données instantanément.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Mode hors-ligne complet
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Géolocalisation précise
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Formulaires dynamiques
                </li>
              </ul>
            </div>

            {/* H-Twin */}
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Box size={32} />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-2xl">H-Twin</h3>
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">Concept</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Anticipez l&apos;impact de vos projets d&apos;aménagement dans un environnement virtuel réaliste.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Modélisation 3D de la ville
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Simulation de scénarios
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Visualisation immersive
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Notre Stack Technologique</h2>
            <p className="text-muted-foreground text-lg">
              Nous utilisons les meilleurs outils du marché pour garantir performance et fiabilité.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { category: "SIG Desktop", tools: "QGIS, ArcGIS Pro" },
              { category: "Bases de Données", tools: "PostgreSQL, PostGIS" },
              { category: "Développement", tools: "Python, R, JavaScript" },
              { category: "Web Mapping", tools: "Leaflet, Mapbox, OpenLayers" },
              { category: "CAO / DAO", tools: "AutoCAD, Civil 3D" },
              { category: "3D & Rendu", tools: "Blender, SketchUp" },
              { category: "Télédétection", tools: "SNAP, Google Earth Engine" },
              { category: "Photogrammétrie", tools: "Pix4D, Agisoft Metashape" }
            ].map((stack, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border border-border text-center">
                <h4 className="font-heading font-bold text-lg mb-2 text-primary">{stack.category}</h4>
                <p className="text-sm text-muted-foreground">{stack.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Intéressé par nos solutions ?</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Contactez-nous pour une démonstration ou pour discuter de l&apos;intégration de nos outils dans vos processus.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg font-heading font-bold shadow-xl shadow-primary/20">
              Demander une démo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
