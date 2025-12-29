import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock, Loader2, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";
import { SimpleMap } from "@/components/LeafletMap";

// Coordonnées du siège - Cocody, Abidjan (basé sur le repère Google Maps fourni)
const OFFICE_LOCATION: [number, number] = [5.3480, -3.9740];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast.success("Message envoyé avec succès !", {
        description: "Nous vous répondrons dans les plus brefs délais."
      });
      formRef.current.reset();
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer plus tard ou nous contacter directement par email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Contact — Horizon Spatial</title>
        <meta name="description" content="Contactez Horizon Spatial pour démarrer votre projet d'aménagement territorial. Parlons de vos besoins en urbanisme, géomatique ou analyse de données."
        />
        <meta property="og:title" content="Contact — Horizon Spatial" />
        <meta property="og:description" content="Prêt à transformer votre territoire ? Contactez notre équipe d'experts." />
        <meta property="og:url" content="https://www.horizonspatial.ci/contact" />
        <meta property="og:image" content="https://www.horizonspatial.ci/logo.jpg" />
        <link rel="canonical" href="https://www.horizonspatial.ci/contact" />
      </Helmet>
      <Navigation />
      
      <div className="pt-32 pb-20 container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Contact</span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Entrons en contact
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Une question, un projet, ou simplement l&apos;envie de discuter ? Nous sommes à votre écoute.
          </p>
        </div>
      </div>

      {/* Contact Info & Form Grid */}
      <div className="container pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-muted/30 p-8 rounded-2xl border border-border">
            <h3 className="font-heading font-bold text-2xl mb-6">Nos Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Siège Social</h4>
                  <p className="text-muted-foreground">Abidjan, Plateau<br />Côte d&apos;Ivoire</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <a href="mailto:contact@horizonspatial.ci" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@horizonspatial.ci
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Téléphone</h4>
                  <p className="text-muted-foreground">+225 07 07 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Horaires</h4>
                  <p className="text-muted-foreground">Lundi - Vendredi : 08h00 - 18h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-md">
            <SimpleMap
              center={OFFICE_LOCATION}
              zoom={16}
              markerPosition={OFFICE_LOCATION}
              markerTitle="Horizon Spatial"
              markerContent={
                <div className="text-xs mt-1">
                  <p>Bureau d'études en Urbanisme & Géomatique</p>
                  <p className="mt-1">📍 Cocody, Abidjan</p>
                </div>
              }
              height="240px"
            />
          </div>
          
          {/* Open in Google Maps Button */}
          <a 
            href="https://maps.app.goo.gl/7CaVngftHQ8KvopM9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-muted hover:bg-muted/80 text-sm font-medium text-foreground transition-colors border border-border"
          >
            <ExternalLink size={16} />
            Ouvrir dans Google Maps
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
          <h3 className="font-heading font-bold text-2xl mb-6">Envoyez-nous un message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm font-medium">Prénom</label>
                <Input id="firstname" name="firstname" placeholder="Votre prénom" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastname" className="text-sm font-medium">Nom</label>
                <Input id="lastname" name="lastname" placeholder="Votre nom" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
              <Input id="subject" name="subject" placeholder="L&apos;objet de votre message" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" name="message" placeholder="Détaillez votre projet ou votre demande..." className="min-h-[150px]" required />
            </div>

            <Button type="submit" className="w-full h-12 font-heading font-bold text-lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le message"
              )}
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
    </PageTransition>
  );
}
