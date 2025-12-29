import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Map, Database, Cpu, Globe } from "lucide-react";
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
              Intelligence Territoriale pour l&apos;Afrique
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight text-foreground">
              Voir plus loin, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                bâtir mieux.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Nous combinons l'expertise urbanistique et les technologies géospatiales pour transformer durablement les territoires africains.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 font-heading font-semibold text-lg h-14 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  Démarrer un projet <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/expertise">
                <Button variant="outline" size="lg" className="rounded-full px-8 font-heading font-semibold text-lg h-14 border-2 hover:bg-muted/50">
                  Découvrir nos services
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
                    <span className="font-heading font-bold text-lg">Données Spatiales</span>
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
                      <span className="font-heading font-bold text-lg">Analyse Urbaine</span>
                    </div>
                    <span className="text-xs font-mono bg-secondary/10 text-secondary px-2 py-1 rounded">LIVE</span>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <span className="text-2xl font-bold text-primary">58%</span>
                      <p className="text-xs text-muted-foreground mt-1">Urbanisation 2030</p>
                    </div>
                    <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/10">
                      <span className="text-2xl font-bold text-secondary">+3.3%</span>
                      <p className="text-xs text-muted-foreground mt-1">Croissance An.</p>
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

      {/* Values Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-muted-foreground text-lg">
              Des principes forts qui guident chacune de nos actions pour un impact durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8 text-primary" />,
                title: "Excellence & Innovation",
                desc: "Nous intégrons les technologies les plus avancées pour garantir une qualité irréprochable."
              },
              {
                icon: <Globe className="w-8 h-8 text-secondary" />,
                title: "Durabilité & Impact",
                desc: "Chaque projet est pensé pour respecter l'environnement et les générations futures."
              },
              {
                icon: <Cpu className="w-8 h-8 text-primary" />,
                title: "Expertise Hybride",
                desc: "La fusion unique entre urbanisme réglementaire et intelligence géospatiale."
              }
            ].map((value, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {value.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Notre Expertise</span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 leading-tight">
                L'alliance de l'Urbanisme et de la Géomatique
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nous ne sommes pas un bureau d'études classique. Nous sommes le pont entre la planification traditionnelle et la puissance de la donnée spatiale.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Urbanisme Réglementaire", desc: "SDU, PUD, Plans de détail et régularisation foncière." },
                  { title: "Solutions SIG Avancées", desc: "Bases de données spatiales, cadastre numérique et WebSIG." },
                  { title: "Analyse Territoriale", desc: "Aide à la décision basée sur des données probantes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted relative group">
                {/* Placeholder for a generated image of urban planning + tech */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Urban Planning Technology" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl z-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Projets Réalisés</p>
                      <span className="text-3xl font-heading font-bold text-primary">15+</span>
                    </div>
                    <div className="h-10 w-px bg-border mx-4" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Données Traitées</p>
                      <span className="text-3xl font-heading font-bold text-secondary">TB+</span>
                    </div>
                    <div className="h-10 w-px bg-border mx-4" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Communes</p>
                      <span className="text-3xl font-heading font-bold text-foreground">200+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">Prêt à transformer votre territoire ?</h2>
          <p className="text-primary-foreground/80 text-xl mb-10 leading-relaxed">
            Discutons de vos projets d'aménagement et voyons comment notre expertise peut vous aider à voir plus loin.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg font-heading font-bold shadow-2xl hover:scale-105 transition-transform">
              Contactez notre équipe
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
