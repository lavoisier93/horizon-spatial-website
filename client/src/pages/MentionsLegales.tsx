import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Mentions Légales — Horizon Spatial</title>
        <meta name="description" content="Mentions légales du site Horizon Spatial, bureau d'études en urbanisme et géomatique en Côte d'Ivoire." />
        <link rel="canonical" href="https://www.horizonspatial.ci/mentions-legales" />
      </Helmet>
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-12">Mentions Légales</h1>
          
          <div className="space-y-10 text-muted-foreground">
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">1. Éditeur du site</h2>
              <div className="bg-muted/30 p-6 rounded-xl border border-border">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Horizon Spatial</strong><br />
                  Bureau d'études en Urbanisme et Géomatique<br /><br />
                  <strong className="text-foreground">Siège social :</strong> Abidjan, Plateau, Côte d'Ivoire<br />
                  <strong className="text-foreground">Email :</strong> contact@horizonspatial.ci<br />
                  <strong className="text-foreground">Téléphone :</strong> +225 07 89 89 10 01<br /><br />
                  <strong className="text-foreground">Directeur de la publication :</strong> Lavoisier Ousmane
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">2. Hébergement</h2>
              <p className="leading-relaxed">
                Ce site est hébergé par :<br />
                <strong className="text-foreground">Vercel Inc.</strong><br />
                340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">3. Propriété intellectuelle</h2>
              <p className="leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, logiciels) est la propriété exclusive d'Horizon Spatial ou de ses partenaires et est protégé par les lois ivoiriennes et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'Horizon Spatial.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">4. Limitation de responsabilité</h2>
              <p className="leading-relaxed">
                Horizon Spatial s'efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="leading-relaxed mt-4">
                Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur ce site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">5. Liens hypertextes</h2>
              <p className="leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites. Horizon Spatial n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux éventuels collectes de données qu'ils pourraient opérer.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">6. Droit applicable</h2>
              <p className="leading-relaxed">
                Les présentes mentions légales sont régies par le droit ivoirien. En cas de litige, les tribunaux d'Abidjan seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

