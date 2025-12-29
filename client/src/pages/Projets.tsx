import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapView } from "@/components/Map";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function Projets() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const projects = [
    {
      title: "Plans d'Urbanisme Directeurs",
      location: "Chefs-lieux de Département, Côte d'Ivoire",
      category: "Urbanisme Réglementaire",
      year: "2025",
      description: "Élaboration de documents de planification stratégique pour le développement harmonieux des chefs-lieux de département. Zonage, règlements d'urbanisme et programmation des équipements.",
      image: "https://images.unsplash.com/photo-1591523383370-58957457807d?q=80&w=2070&auto=format&fit=crop",
      tags: ["PUD", "Planification", "Réglementation"],
      coordinates: { lat: 7.539989, lng: -5.547080 } // Centre approx Côte d'Ivoire
    },
    {
      title: "Plans de Développement Local",
      location: "Villages du Nord, Côte d'Ivoire",
      category: "Développement Rural",
      year: "2024-2025",
      description: "Diagnostic territorial approfondi et programmation des investissements pour le développement durable des communautés rurales. Approche participative incluant les populations locales.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2070&auto=format&fit=crop",
      tags: ["PDL", "Diagnostic", "Participation"],
      coordinates: { lat: 9.5, lng: -5.5 } // Nord CI
    },
    {
      title: "Aménagement Résidentiel & 3D",
      location: "Grand Abidjan",
      category: "Promotion Immobilière",
      year: "2025",
      description: "Études de faisabilité, conception de plans de masse et modélisation 3D pour des projets immobiliers privés. Création de visuels immersifs pour la commercialisation.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      tags: ["Immobilier", "3D", "Conception"],
      coordinates: { lat: 5.3600, lng: -4.0083 } // Abidjan
    },
    {
      title: "Missions Géomatiques Diverses",
      location: "National",
      category: "SIG & Cartographie",
      year: "Continu",
      description: "Développement de bases de données SIG, production de cartes thématiques et analyses spatiales pour divers clients institutionnels et privés.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
      tags: ["SIG", "Cartographie", "Data"],
      coordinates: { lat: 6.8, lng: -5.3 } // Centre-Sud
    }
  ];

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // Add markers for each project
    projects.forEach((project) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: project.coordinates,
        title: project.title,
      });
      
      // Optional: Add info window on click
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">${project.title}</h3>
            <p style="font-size: 12px; color: #666;">${project.category}</p>
          </div>
        `
      });

      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    });
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Projets — Horizon Spatial</title>
        <meta name="description" content="Explorez nos projets et découvrez comment nous avons aidé nos clients à réaliser leur vision, de la planification urbaine à la mise en œuvre de solutions SIG."
        />
        <meta property="og:title" content="Nos Projets — Horizon Spatial" />
        <meta property="og:description" content="Une vitrine de notre savoir-faire en intelligence territoriale, illustrant l&apos;impact de nos interventions sur des projets concrets."
        />
        <meta property="og:url" content="https://www.horizon-spatial.com/projets" />
        <meta property="og:image" content="https://www.horizon-spatial.com/logo.jpg" />
        <link rel="canonical" href="https://www.horizon-spatial.com/projets" />
      </Helmet>
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container text-center max-w-4xl mx-auto">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Nos Réalisations</span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
            De la vision à la réalité :<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              l&apos;impact de notre expertise
            </span>
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
            Chaque projet est une histoire de collaboration et d'innovation. Découvrez comment nous avons accompagné nos partenaires pour transformer leurs défis en succès durables.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="rounded-3xl overflow-hidden border border-border shadow-xl h-[500px] relative">
            <MapView 
              initialCenter={{ lat: 7.54, lng: -5.55 }} // Center of Côte d'Ivoire
              initialZoom={7}
              onMapReady={handleMapReady}
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs z-10 border border-border/50">
              <h3 className="font-heading font-bold text-lg mb-1">Nos Projets en Côte d'Ivoire</h3>
              <p className="text-xs text-muted-foreground">Explorez nos interventions à travers le territoire national.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted group shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 translate-y-4 group-hover:translate-y-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary text-xs font-bold mb-2">{project.category}</span>
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
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground/70 border border-border">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="rounded-full px-6 group">
                    Voir les détails <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
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
              Nous collaborons avec une diversité d&apos;acteurs pour bâtir l&apos;avenir.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Collectivités Territoriales",
              "Ministères & Agences",
              "Promoteurs Immobiliers",
              "Bailleurs de Fonds (BM, BAD)",
              "ONG & Organisations",
              "Entreprises Privées",
              "Cabinets d&apos;Architecture",
              "Bureaux d&apos;Études Partenaires"
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
            Notre équipe est prête à vous accompagner pour le concrétiser. Parlons-en !
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
  );
}
