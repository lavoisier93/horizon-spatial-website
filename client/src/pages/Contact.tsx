import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <div className="pt-32 pb-20 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Contactez-nous</h1>
          <p className="text-muted-foreground text-lg">
            Vous avez un projet d'aménagement ou besoin d'une expertise géospatiale ? 
            Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="font-heading font-bold text-2xl mb-6">Nos Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Siège Social</h4>
                    <p className="text-muted-foreground">Abidjan, Plateau<br />Côte d'Ivoire</p>
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

            {/* Map Placeholder */}
            <div className="h-64 bg-muted rounded-2xl overflow-hidden relative border border-border">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Carte Interactive (Google Maps)
                </span>
              </div>
              {/* In a real implementation, embed Google Maps here */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
            <h3 className="font-heading font-bold text-2xl mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="text-sm font-medium">Prénom</label>
                  <Input id="firstname" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastname" className="text-sm font-medium">Nom</label>
                  <Input id="lastname" placeholder="Votre nom" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                <Input id="subject" placeholder="L'objet de votre message" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Détaillez votre projet ou votre demande..." className="min-h-[150px]" />
              </div>

              <Button type="submit" className="w-full h-12 font-heading font-bold text-lg">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
