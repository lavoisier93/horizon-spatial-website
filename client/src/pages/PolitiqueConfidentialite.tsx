import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";

export default function PolitiqueConfidentialite() {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Politique de Confidentialité — Horizon Spatial</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles d'Horizon Spatial." />
        <link rel="canonical" href="https://www.horizonspatial.ci/politique-confidentialite" />
      </Helmet>
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Politique de Confidentialité</h1>
          <p className="text-muted-foreground mb-12">Dernière mise à jour : Décembre 2025</p>
          
          <div className="space-y-10 text-muted-foreground">
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Horizon Spatial s'engage à protéger la vie privée des utilisateurs de son site web. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles conformément à la réglementation en vigueur en Côte d'Ivoire et aux standards internationaux de protection des données.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">2. Données collectées</h2>
              <p className="leading-relaxed mb-4">
                Nous collectons les données personnelles que vous nous fournissez volontairement via notre formulaire de contact :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Sujet et contenu de votre message</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Nous collectons également automatiquement certaines données techniques à des fins statistiques (voir section Cookies).
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">3. Utilisation des données</h2>
              <p className="leading-relaxed mb-4">
                Vos données personnelles sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de contact et de renseignements</li>
                <li>Vous fournir les informations ou services demandés</li>
                <li>Améliorer notre site et nos services</li>
                <li>Établir des statistiques anonymes de fréquentation</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong className="text-foreground">Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins commerciales.</strong>
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">4. Conservation des données</h2>
              <p className="leading-relaxed">
                Vos données personnelles sont conservées pendant une durée de <strong className="text-foreground">3 ans</strong> à compter de votre dernier contact avec nous, sauf obligation légale contraire. Passé ce délai, vos données sont supprimées de manière sécurisée.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">5. Sécurité des données</h2>
              <p className="leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">6. Vos droits</h2>
              <p className="leading-relaxed mb-4">
                Conformément à la réglementation applicable, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong className="text-foreground">Droit de rectification :</strong> corriger des données inexactes</li>
                <li><strong className="text-foreground">Droit de suppression :</strong> demander l'effacement de vos données</li>
                <li><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong className="text-foreground">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              </ul>
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-6">
                <p className="leading-relaxed">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@horizonspatial.ci" className="text-primary hover:underline font-medium">contact@horizonspatial.ci</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">7. Cookies et analytics</h2>
              <p className="leading-relaxed mb-4">
                Ce site utilise <strong className="text-foreground">Umami</strong>, une solution d'analyse web respectueuse de la vie privée. Umami :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ne collecte aucune donnée personnelle identifiable</li>
                <li>Ne dépose pas de cookies de suivi</li>
                <li>Ne suit pas les utilisateurs entre les sites</li>
                <li>Est conforme au RGPD sans nécessiter de consentement</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Les seules données collectées sont anonymes : pages visitées, durée de visite, type d'appareil et pays d'origine (déduit de l'IP, non stocké).
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">8. Services tiers</h2>
              <p className="leading-relaxed">
                Notre formulaire de contact utilise <strong className="text-foreground">EmailJS</strong> pour l'envoi des messages. EmailJS agit en tant que sous-traitant et s'engage à protéger vos données conformément à sa propre politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">9. Modifications</h2>
              <p className="leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">10. Contact</h2>
              <p className="leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, contactez-nous :
              </p>
              <div className="bg-muted/30 p-6 rounded-xl border border-border mt-4">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Horizon Spatial</strong><br />
                  Email : <a href="mailto:contact@horizonspatial.ci" className="text-primary hover:underline">contact@horizonspatial.ci</a><br />
                  Adresse : Abidjan, Plateau, Côte d'Ivoire
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </PageTransition>
  );
}

