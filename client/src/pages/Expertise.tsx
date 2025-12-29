import { Button } from "@/components/ui/button";
import { Map, Layers, Building2, Database, Globe, Ruler, FileText, Activity, Home, CheckCircle, Landmark, MapPinned, Satellite, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";

export default function Expertise() {
  const urbanismeServices = [
    {
      icon: <FileText size={24} />,
      title: "Documents Réglementaires",
      description: "Élaboration des documents de planification stratégique et réglementaire.",
      items: [
        "Schéma Directeur d'Urbanisme (SDU)",
        "Plan d'Urbanisme Directeur (PUD)",
        "Plan d'Urbanisme de Détail (PUDé)",
        "Plan de Développement Local (PDL)"
      ]
    },
    {
      icon: <Home size={24} />,
      title: "Plans de Lotissements",
      description: "Conception et suivi des opérations de lotissement et d'aménagement foncier.",
      items: [
        "Lotissements résidentiels et économiques",
        "Régularisations foncières",
        "Restructurations urbaines",
        "Promotions immobilières"
      ]
    },
    {
      icon: <Landmark size={24} />,
      title: "Accompagnement Administratif",
      description: "Assistance pour l'obtention des autorisations et approbations officielles.",
      items: [
        "Approbation des lotissements",
        "Demandes d'ACD (Arrêté de Concession Définitive)",
        "Constitution des dossiers techniques",
        "Suivi des procédures administratives"
      ]
    },
    {
      icon: <Activity size={24} />,
      title: "Études & Diagnostics",
      description: "Analyses approfondies pour éclairer la prise de décision.",
      items: [
        "Diagnostics territoriaux",
        "Études de faisabilité",
        "Études d'Impact Environnemental (EIE)",
        "Monographies communales"
      ]
    }
  ];

  const geomatiqueServices = [
    {
      icon: <Database size={24} />,
      title: "Solutions SIG Avancées",
      description: "Développement et déploiement de systèmes d'information géographique.",
      items: [
        "Bases de données spatiales (PostgreSQL/PostGIS)",
        "SIG Foncier et Cadastral",
        "SIG Réseaux (eau, assainissement, électricité)",
        "Applications WebSIG (Leaflet, Mapbox, OpenLayers)"
      ]
    },
    {
      icon: <Satellite size={24} />,
      title: "Cartographie & Télédétection",
      description: "Production cartographique et analyse d'images satellites.",
      items: [
        "Traitement d'images satellites",
        "Photogrammétrie par drone",
        "Cartographie thématique",
        "Modélisation 3D du territoire"
      ]
    },
    {
      icon: <MapPinned size={24} />,
      title: "Levés & Collecte de Données",
      description: "Acquisition de données terrain avec précision.",
      items: [
        "Levés topographiques GPS",
        "Recensement parcellaire",
        "Enquêtes socio-économiques géolocalisées",
        "Inventaire patrimonial"
      ]
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analyse Spatiale",
      description: "Exploitation des données pour l'aide à la décision.",
      items: [
        "Études de localisation optimale",
        "Analyse d'accessibilité",
        "Modélisation prospective",
        "Tableaux de bord territoriaux"
      ]
    }
  ];

  return (
    <PageTransition>
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Expertise — Horizon Spatial</title>
        <meta name="description" content="Découvrez notre expertise unique en urbanisme réglementaire, plans de lotissements, solutions SIG, analyse territoriale et accompagnement administratif en Côte d'Ivoire."
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted group sticky top-32">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src="/images/expertise-urbanisme.webp" 
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
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Notre expertise couvre l&apos;ensemble de la chaîne de valeur des projets d&apos;aménagement, depuis les études préliminaires jusqu&apos;à l&apos;obtention des autorisations administratives. Nous accompagnons les collectivités, promoteurs et particuliers dans tous leurs projets fonciers et urbains.
              </p>
              
              <div className="space-y-8">
                {urbanismeServices.map((service, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg">{service.title}</h4>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle size={14} className="text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Géomatique Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Globe size={16} /> Pôle Géomatique
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Systèmes d&apos;Information Géographique</h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Nous maîtrisons l&apos;ensemble des technologies géospatiales modernes pour transformer la donnée en intelligence territoriale exploitable. De la collecte terrain à la visualisation web, nous offrons des solutions SIG complètes et adaptées à vos besoins.
              </p>
              
              <div className="space-y-8">
                {geomatiqueServices.map((service, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg">{service.title}</h4>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle size={14} className="text-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted group sticky top-32">
                <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src="/images/expertise-geomatique.webp" 
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

      {/* Methodologie Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Notre Approche : La Donnée au Cœur de la Décision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Chaque mission suit un processus rigoureux en 5 étapes, garantissant des résultats fiables et adaptés à vos besoins spécifiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Cadrage", desc: "Analyse des besoins et définition des objectifs" },
              { step: "02", title: "Diagnostic", desc: "Collecte et analyse des données existantes" },
              { step: "03", title: "Analyse", desc: "Synthèse et identification des enjeux" },
              { step: "04", title: "Propositions", desc: "Élaboration et validation des solutions" },
              { step: "05", title: "Livraison", desc: "Finalisation et accompagnement" }
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors h-full">
                  <span className="text-4xl font-heading font-bold text-primary/20">{phase.step}</span>
                  <h4 className="font-heading font-bold text-lg mt-2 mb-2">{phase.title}</h4>
                  <p className="text-muted-foreground text-sm">{phase.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Besoin d&apos;une expertise technique ?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Que ce soit pour un plan d&apos;urbanisme, un lotissement ou une solution SIG complexe, notre équipe est prête à relever le défi.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-heading font-bold">
              Demander une consultation
            </Button>
          </Link>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: "SIG Desktop", tools: "QGIS, ArcGIS Pro" },
              { category: "Bases de Données", tools: "PostgreSQL, PostGIS" },
              { category: "Développement", tools: "Python, JavaScript, R" },
              { category: "Web Mapping", tools: "Leaflet, Mapbox, OpenLayers" },
              { category: "CAO / DAO", tools: "AutoCAD, Civil 3D" },
              { category: "3D & Rendu", tools: "Blender, SketchUp" },
              { category: "Télédétection", tools: "SNAP, Google Earth Engine" },
              { category: "Photogrammétrie", tools: "Pix4D, Agisoft Metashape" }
            ].map((stack, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-colors">
                <h4 className="font-heading font-bold text-lg mb-2 text-primary">{stack.category}</h4>
                <p className="text-sm text-muted-foreground">{stack.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </PageTransition>
  );
}
