import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Users, Award, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Horizon Spatial — À propos</title>
        <meta name="description" content="Découvrez notre vision, notre mission et l’équipe pluridisciplinaire d’Horizon Spatial, bureau d’études de nouvelle génération." />
        <meta property="og:title" content="Horizon Spatial — À propos" />
        <meta property="og:description" content="Urbanisme réglementaire, géomatique et technologie au service des territoires africains." />
        <meta property="og:url" content="https://www.horizonspatial.ci/about" />
        <meta property="og:image" content="https://www.horizonspatial.ci/logo.jpg" />
        <link rel="canonical" href="https://www.horizonspatial.ci/about" />
      </Helmet>
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container text-center max-w-4xl mx-auto">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Notre Histoire</span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Un bureau d&apos;études de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              nouvelle génération
            </span>
          </h1>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Fondé sur la conviction que l&apos;avenir de l&apos;Afrique passe par une urbanisation maîtrisée et intelligente.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white mb-6">
                <Target size={28} />
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4 text-primary">Notre Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Devenir le leader ouest-africain de l&apos;intelligence territoriale en démocratisant l&apos;accès aux technologies géospatiales pour un développement urbain durable et inclusif.
              </p>
            </div>
            
            <div className="bg-secondary/5 p-10 rounded-3xl border border-secondary/10">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-white mb-6">
                <Heart size={28} />
              </div>
              <h2 className="font-heading font-bold text-3xl mb-4 text-secondary">Notre Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Accompagner les acteurs publics et privés dans la transformation de leurs territoires en fournissant des données fiables, des analyses précises et des outils d&apos;aide à la décision innovants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-background shadow-2xl max-w-md mx-auto relative group">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFHCcvtY87wFQ/profile-displayphoto-scale_400_400/B4EZqECF01KcAk-/0/1763151733801?e=1765411200&v=beta&t=hswoEAgTvAsRL6TJTvdm1aTcuhuF9_9cnXzg9PBy19M" 
                  alt="Lavoisier Ousmane" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>
            
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Le Fondateur</span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Lavoisier Ousmane</h2>
              <p className="text-xl font-medium text-foreground mb-6">Urbaniste & Expert SIG</p>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Avec plus de 8 années d&apos;expérience dans les domaines de l&apos;urbanisme et de la géomatique en Côte d&apos;Ivoire et en Afrique de l&apos;Ouest, Lavoisier Ousmane incarne la double compétence qui fait la force d&apos;Horizon Spatial.
                </p>
                <p>
                  Titulaire d&apos;un Double Master en Urbanisme & Aménagement et en Géomatique, il est membre inscrit à l&apos;O.N.U.C.I. (Ordre National des Urbanistes de Côte d&apos;Ivoire) et enseigne la cartographie à l&apos;Université de Bondoukou.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium flex items-center gap-2">
                  <Award size={16} className="text-primary" /> Membre O.N.U.C.I.
                </span>
                <span className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium flex items-center gap-2">
                  <Users size={16} className="text-secondary" /> Enseignant ENSAU
                </span>
              </div>
              
              <a href="https://www.linkedin.com/in/lavoisier-ousmane/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full gap-2">
                  <Linkedin size={18} /> Voir le profil LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Values */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Une Équipe Pluridisciplinaire</h2>
            <p className="text-muted-foreground text-lg">
              L&apos;équipe H-Spatial réunit des compétences complémentaires pour couvrir l&apos;ensemble des métiers de l&apos;aménagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Urbanisme & Planification",
                desc: "Élaboration de documents réglementaires et conception de projets urbains."
              },
              {
                title: "Géomatique & Data",
                desc: "Développement SIG, gestion de bases de données et analyse spatiale."
              },
              {
                title: "Technologie & Innovation",
                desc: "Développement d&apos;outils, automatisation et intégration de solutions."
              }
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border text-center hover:border-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="font-heading font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Rejoignez l&apos;aventure</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Nous sommes toujours à la recherche de talents passionnés par la ville et la technologie.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-heading font-bold">
              Contactez-nous <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
