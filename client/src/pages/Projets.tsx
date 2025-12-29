import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Navigation2, Target, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";
import { ProjectsMap } from "@/components/LeafletMap";

// Couleurs par catégorie de projet
const CATEGORY_COLORS: Record<string, string> = {
  "Urbanisme Réglementaire": "#0047AB",
  "Développement Rural": "#00A86B",
  "Lotissement & Foncier": "#E67E22",
  "SIG & Cartographie": "#9B59B6",
};

interface CaseStudy {
  title: string;
  location: string;
  category: string;
  year: string;
  client: string;
  image: string;
  tags: string[];
  coordinates: { lat: number; lng: number };
  context: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics?: { label: string; value: string }[];
}

export default function Projets() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: CaseStudy[] = [
    {
      title: "Plan d'Urbanisme Directeur de Bondoukou",
      location: "Bondoukou, Région du Gontougo",
      category: "Urbanisme Réglementaire",
      year: "2024-2025",
      client: "Mairie de Bondoukou",
      image: "/images/projet-pud-bondoukou.webp",
      tags: ["PUD", "Planification", "Zonage", "Réglementation"],
      coordinates: { lat: 8.0404, lng: -2.8003 },
      context: "Bondoukou, chef-lieu de la région du Gontougo, connaît une croissance urbaine soutenue nécessitant un cadre réglementaire actualisé. L'ancien document d'urbanisme datait de plus de 15 ans et ne reflétait plus les réalités du terrain ni les ambitions de développement de la commune.",
      challenge: "Le défi principal était de concilier la préservation du patrimoine historique de la ville (inscrite au patrimoine mondial de l'UNESCO pour son architecture soudanaise) avec les besoins de modernisation des infrastructures et d'extension urbaine maîtrisée.",
      solution: "Nous avons adopté une approche participative impliquant les autorités locales, les chefs traditionnels et les populations. Le diagnostic territorial a combiné des levés GPS, l'analyse d'images satellites et des enquêtes socio-économiques. Le nouveau PUD définit un zonage clair avec des zones de protection patrimoniale, des zones d'extension et des corridors verts.",
      results: [
        "Document de planification approuvé par les autorités compétentes",
        "Zonage couvrant 2 500 hectares avec règlement d'urbanisme détaillé",
        "Identification de 3 zones d'extension prioritaires",
        "Cartographie numérique complète intégrée au SIG communal"
      ],
      metrics: [
        { label: "Surface planifiée", value: "2 500 ha" },
        { label: "Horizon de planification", value: "2040" },
        { label: "Ateliers participatifs", value: "12" }
      ]
    },
    {
      title: "Plans de Développement Local — Villages du Poro",
      location: "Région du Poro, Nord Côte d'Ivoire",
      category: "Développement Rural",
      year: "2024",
      client: "Conseil Régional du Poro / Programme PNUD",
      image: "/images/projet-pdl-poro.webp",
      tags: ["PDL", "Diagnostic", "Participation", "Développement"],
      coordinates: { lat: 9.4500, lng: -5.6300 },
      context: "Dans le cadre d'un programme de développement rural financé par le PNUD, 5 villages de la région du Poro ont été sélectionnés pour l'élaboration de Plans de Développement Local (PDL). Ces communautés rurales, principalement agricoles, souhaitaient structurer leur vision de développement à horizon 10 ans.",
      challenge: "Les villages présentaient des défis communs : accès limité aux services de base (eau, santé, éducation), enclavement routier et faible diversification économique. L'enjeu était de produire des documents stratégiques réalistes, appropriés par les populations et susceptibles de mobiliser des financements.",
      solution: "Notre méthodologie s'est appuyée sur des diagnostics participatifs avec la création de comités villageois de développement. Chaque PDL a été construit autour de 5 axes : infrastructures, économie locale, services sociaux, environnement et gouvernance. Des fiches-projets chiffrées ont été élaborées pour faciliter la recherche de financement.",
      results: [
        "5 PDL validés et adoptés par les communautés villageoises",
        "25 projets prioritaires identifiés et chiffrés",
        "Formation de 50 membres des comités villageois",
        "3 projets déjà financés suite à la présentation des PDL"
      ],
      metrics: [
        { label: "Villages accompagnés", value: "5" },
        { label: "Population concernée", value: "12 000 hab." },
        { label: "Projets identifiés", value: "25" }
      ]
    },
    {
      title: "Lotissement Résidentiel « Les Jardins de Bingerville »",
      location: "Bingerville, Grand Abidjan",
      category: "Lotissement & Foncier",
      year: "2024-2025",
      client: "Promoteur Immobilier Privé",
      image: "/images/projet-lotissement-bingerville.webp",
      tags: ["Lotissement", "Foncier", "ACD", "Conception"],
      coordinates: { lat: 5.3500, lng: -3.8900 },
      context: "Un promoteur immobilier a acquis un terrain de 8 hectares à Bingerville pour y développer un lotissement résidentiel de standing. Le terrain, situé en zone périurbaine, nécessitait une étude de faisabilité complète et la constitution du dossier d'approbation auprès des autorités.",
      challenge: "Le terrain présentait une topographie accidentée avec un dénivelé de 15 mètres et une zone humide à préserver. Il fallait optimiser le nombre de lots tout en respectant les contraintes environnementales et en garantissant une qualité de vie aux futurs résidents.",
      solution: "Nous avons réalisé un levé topographique détaillé, une étude géotechnique et une analyse environnementale. Le plan de lotissement a été conçu pour s'adapter au relief naturel, avec des voiries en courbes de niveau et la création d'un parc paysager autour de la zone humide. Le dossier complet a été déposé pour approbation et demande d'ACD.",
      results: [
        "Plan de lotissement approuvé avec 85 lots viabilisés",
        "Arrêté de Concession Définitive (ACD) obtenu",
        "Modélisation 3D pour la commercialisation",
        "Réserve foncière de 1,2 ha pour équipements collectifs"
      ],
      metrics: [
        { label: "Surface totale", value: "8 ha" },
        { label: "Lots créés", value: "85" },
        { label: "Espaces verts", value: "18%" }
      ]
    },
    {
      title: "SIG Foncier Communal — Ville de Korhogo",
      location: "Korhogo, Région du Poro",
      category: "SIG & Cartographie",
      year: "2023-2024",
      client: "Mairie de Korhogo",
      image: "/images/projet-sig-korhogo.webp",
      tags: ["SIG", "Cadastre", "PostGIS", "WebSIG"],
      coordinates: { lat: 9.4580, lng: -5.6290 },
      context: "La ville de Korhogo, troisième agglomération de Côte d'Ivoire, souhaitait moderniser sa gestion foncière en passant d'un système papier à un Système d'Information Géographique (SIG) intégré. L'objectif était d'améliorer le recouvrement fiscal et de sécuriser les transactions foncières.",
      challenge: "Le principal défi était la numérisation et la géolocalisation de plus de 15 000 parcelles existantes, dont beaucoup n'avaient jamais été cartographiées avec précision. Il fallait également former les agents municipaux à l'utilisation du nouvel outil.",
      solution: "Nous avons déployé une base de données PostgreSQL/PostGIS hébergée localement, avec une interface WebSIG développée sur mesure (Leaflet). Une campagne de terrain de 6 mois a permis de lever et d'enregistrer l'ensemble des parcelles. Un programme de formation de 3 semaines a été dispensé aux agents du service foncier.",
      results: [
        "Base de données spatiale opérationnelle avec 15 200 parcelles",
        "Application WebSIG accessible aux agents municipaux",
        "Augmentation de 35% du recouvrement de la taxe foncière",
        "8 agents formés à l'utilisation et la maintenance du système"
      ],
      metrics: [
        { label: "Parcelles numérisées", value: "15 200" },
        { label: "Agents formés", value: "8" },
        { label: "Gain fiscal", value: "+35%" }
      ]
    }
  ];

  // Fonction pour naviguer vers un projet sur la carte
  const flyToProject = useCallback((index: number) => {
    setActiveProject(index);
    // Scroll vers la carte
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }, []);

  return (
    <PageTransition>
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Projets & Études de Cas — Horizon Spatial</title>
        <meta name="description" content="Découvrez nos études de cas détaillées : plans d'urbanisme, lotissements, SIG foncier et développement rural en Côte d'Ivoire. Contexte, défis, solutions et résultats."
        />
        <meta property="og:title" content="Nos Projets — Horizon Spatial" />
        <meta property="og:description" content="Une vitrine de notre savoir-faire en intelligence territoriale, illustrant l&apos;impact de nos interventions sur des projets concrets."
        />
        <meta property="og:url" content="https://www.horizonspatial.ci/projets" />
        <meta property="og:image" content="https://www.horizonspatial.ci/logo.jpg" />
        <link rel="canonical" href="https://www.horizonspatial.ci/projets" />
      </Helmet>
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container text-center max-w-4xl mx-auto">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Études de Cas</span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
            De la vision à la réalité :<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              l&apos;impact de notre expertise
            </span>
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
            Chaque projet est une histoire de collaboration et d&apos;innovation. Découvrez en détail comment nous avons accompagné nos partenaires pour transformer leurs défis en succès durables.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="rounded-3xl overflow-hidden border border-border shadow-xl h-[500px] relative">
            <ProjectsMap
              projects={projects}
              categoryColors={CATEGORY_COLORS}
              activeProject={activeProject}
              onProjectClick={(index) => setActiveProject(index)}
            />
            
            {/* Légende */}
            <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-md p-4 rounded-xl shadow-lg z-[1000] border border-border">
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">Nos Projets en Côte d&apos;Ivoire</h3>
              <div className="space-y-2">
                {Object.entries(CATEGORY_COLORS).map(([category, color]) => (
                  <div key={category} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs text-muted-foreground">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Liste des projets cliquables */}
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-md p-3 rounded-xl shadow-lg z-[1000] border border-border max-w-[220px]">
              <p className="text-xs font-medium text-muted-foreground mb-2">Aller au projet :</p>
              <div className="space-y-1">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => flyToProject(index)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                      activeProject === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] shrink-0"
                      style={{ backgroundColor: CATEGORY_COLORS[project.category] }}
                    >
                      {index + 1}
                    </span>
                    <span className="truncate">{project.title.split('—')[0].trim().substring(0, 20)}...</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <article key={index} id={`projet-${index}`} className="scroll-mt-32">
                {/* Project Header */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted group shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                          style={{ backgroundColor: CATEGORY_COLORS[project.category] }}
                        >
                          {project.category}
                        </span>
                        <p className="text-sm opacity-90">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="flex items-center gap-1"><Calendar size={14} /> {project.year}</span>
                    </div>
                    
                    <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground/70 border border-border">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="bg-muted/50 rounded-xl p-4 text-center">
                            <span className="block text-2xl font-heading font-bold text-primary">{metric.value}</span>
                            <span className="text-xs text-muted-foreground">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <button
                      onClick={() => {
                        flyToProject(index);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Navigation2 size={16} />
                      Voir sur la carte
                    </button>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Contexte */}
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Target size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-lg">Contexte</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.context}
                    </p>
                  </div>

                  {/* Défi */}
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                        <Lightbulb size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-lg">Défi</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                        <TrendingUp size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-lg">Solution</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Résultats */}
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <CheckCircle2 size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-lg">Résultats</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ils nous font confiance</h2>
            <p className="text-muted-foreground text-lg">
              Nous collaborons avec une diversité d&apos;acteurs pour bâtir l&apos;avenir des territoires africains.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Collectivités Territoriales",
              "Ministères & Agences",
              "Promoteurs Immobiliers",
              "Bailleurs de Fonds (BM, BAD, PNUD)",
              "ONG & Organisations",
              "Entreprises Privées",
              "Cabinets d'Architecture",
              "Bureaux d'Études Partenaires"
            ].map((client, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border border-border flex items-center justify-center text-center h-32 hover:border-primary/50 transition-colors group">
                <span className="font-heading font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Vous avez un projet en tête ?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Notre équipe est prête à vous accompagner pour le concrétiser. Discutons de vos besoins et construisons ensemble la solution adaptée.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-heading font-bold">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
}
