import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, CheckCircle, ShieldCheck, Building, Map, Users, Award } from "lucide-react";

// Contenu Markdown simulé - à remplacer par le contenu réel
const markdownContent = `
# Guide Complet de l'Urbanisme et des Lotissements en Côte d'Ivoire

## Introduction : Le Cadre de l'Aménagement Foncier à Abidjan et en Côte d'Ivoire

L'urbanisme en Côte d'Ivoire est un secteur en pleine mutation, porté par une croissance démographique rapide et un développement économique soutenu. La maîtrise du foncier et la planification urbaine sont devenues des enjeux cruciaux, particulièrement dans le Grand Abidjan. Pour les promoteurs, les propriétaires terriens et les investisseurs, comprendre les procédures de **lotissement** et de **régularisation foncière** est la première étape vers la sécurisation de leurs investissements et la réussite de leurs projets.

En tant que **cabinet d'urbanisme agréé à Abidjan**, Horizon Spatial vous propose ce guide complet pour naviguer le paysage réglementaire ivoirien, de la conception d'un **plan de lotissement** à l'obtention du précieux **Arrêté de Concession Définitive (ACD)**.

---

## 1. Le Lotissement : Définition et Procédure d'Approbation

Un lotissement est une opération d'aménagement qui consiste à diviser une propriété foncière en plusieurs lots destinés à être bâtis. En Côte d'Ivoire, la procédure est strictement encadrée par le Ministère de la Construction, du Logement et de l'Urbanisme (MCLU) pour garantir un développement cohérent et viabilisé.

### Les Étapes Clés pour un Lotissement Approuvé

L'**approbation de lotissement** est un processus complexe qui nécessite l'intervention d'un **urbaniste agréé** ou d'un géomètre-expert.

| Étape | Description | Acteurs Clés | Mots-clés Associés |
| :--- | :--- | :--- | :--- |
| **1. Constitution du Dossier** | Rassembler les pièces administratives et techniques : **titre foncier** (ou **certificat foncier**), levé topographique, esquisse du plan de lotissement. | Propriétaire, **Urbaniste Agréé** | Titre de propriété, Levé topo |
| **2. Demande d'Avis de Servitude** | Vérifier auprès des concessionnaires (CIE, SODECI, etc.) l'absence de réseaux ou contraintes sur le terrain. | Urbaniste, Concessionnaires | Avis de Servitude, Réseaux |
| **3. Conception du Plan de Lotissement** | L'urbaniste conçoit le plan détaillé, incluant la voirie, les espaces verts, les lots et les équipements collectifs. | **Cabinet d'urbanisme** | Plan de masse, VRD |
| **4. Dépôt au Guichet Unique** | Le dossier complet est déposé au Guichet Unique du Foncier et de l'Habitat (GUFH) pour instruction. | Mandataire (Urbaniste) | GUFH, MCLU |
| **5. Obtention de l'Arrêté d'Approbation** | Après validation par les services techniques, le Ministre signe l'Arrêté d'**Approbation de lotissement**. Le projet devient un **lotissement approuvé**. | MCLU | Arrêté d'approbation |

> **Le rôle de l'Urbaniste Agréé :** Faire appel à un **cabinet d'urbanisme agréé à Abidjan** comme Horizon Spatial est une obligation légale et un gage de sécurité. Nous assurons la conformité de votre **plan de lotissement** et pilotons l'ensemble de la procédure administrative pour vous.

---

## 2. De l'Approbation à la Sécurisation : L'Arrêté de Concession Définitive (ACD)

L'approbation du lotissement ne confère pas la pleine propriété aux acquéreurs des lots. L'étape ultime est l'obtention de l'ACD, le seul acte qui garantit un droit de propriété irrévocable sur le domaine foncier urbain.

### Comment obtenir sa Demande d'ACD ?

La **demande d'ACD** est une procédure individuelle pour chaque lot.

1.  **Signature de la Convention de Lotissement** : Un accord entre le lotisseur et l'administration qui fixe les obligations de chacun.
2.  **Viabilisation du Site** : Le lotisseur doit réaliser les travaux de voirie et réseaux divers (VRD) prévus dans le plan.
3.  **Obtention du Certificat de Conformité** : Le MCLU certifie que les travaux de viabilisation sont conformes au projet approuvé.
4.  **Dossier de Demande d'ACD Individuel** : Chaque acquéreur peut alors constituer son dossier pour obtenir son propre **titre foncier** sous la forme d'un ACD.

---

## 3. Cas Particuliers : Restructuration Urbaine et Régularisation

De nombreux quartiers à Abidjan et en Côte d'Ivoire se sont développés de manière informelle. L'État a mis en place des procédures pour intégrer ces zones au tissu urbain formel.

-   **Restructuration Urbaine** : Opération lourde visant à réaménager un quartier existant en y intégrant des voiries, des équipements et des services. Elle est souvent initiée par la puissance publique.
-   **Régularisation Foncière** : Procédure permettant aux occupants de parcelles dans des quartiers non lotis d'obtenir un **certificat foncier** puis un **titre foncier** (ACD), souvent après une opération de lotissement de régularisation.

Horizon Spatial possède une expertise reconnue dans les missions de **restructuration urbaine** et de **régularisation**, accompagnant les communautés et les autorités locales dans ces projets à fort impact social.

---

## 4. Plan d'Opération Immobilière et Promotion

Pour les promoteurs, le lotissement n'est souvent que la première étape d'un projet plus vaste.

-   **Plan d'Opération Immobilière** : Document stratégique qui définit l'ensemble d'un projet, incluant le phasage, le bilan financier, et le plan de commercialisation.
-   **Plan de Promotion Immobilière** : Se concentre sur la conception architecturale et la construction des bâtiments au sein d'un lotissement approuvé.

Notre **cabinet d'urbanisme agréé** vous accompagne au-delà du simple lotissement pour structurer votre **plan d'opération immobilière** et garantir sa viabilité technique et financière.

---

## FAQ : Questions Fréquentes sur les Lotissements en Côte d'Ivoire

**Q : Quelle est la différence entre un titre foncier et un certificat foncier ?**
A : Le **Titre Foncier** est le titre de propriété définitif et inattaquable. Le **Certificat Foncier** est un document intermédiaire qui constate un droit de propriété coutumier et constitue une étape vers l'obtention du Titre Foncier dans le cadre de la procédure d'immatriculation.

**Q : Combien de temps prend une procédure d'approbation de lotissement ?**
A : Les délais varient, mais il faut généralement compter entre 6 et 12 mois pour obtenir l'arrêté d'**approbation de lotissement** si le dossier est bien constitué par un **urbaniste agréé**.

**Q : Peut-on faire une demande d'ACD sur un lot dans un lotissement non approuvé ?**
A : Non. L'**approbation de lotissement** par le MCLU est un prérequis indispensable à toute **demande d'ACD**.

## Pourquoi choisir Horizon Spatial, votre Cabinet d'Urbanisme Agréé à Abidjan ?

Naviguer les complexités de l'urbanisme réglementaire en Côte d'Ivoire exige une expertise pointue et une connaissance parfaite des procédures. En choisissant Horizon Spatial, vous bénéficiez de l'accompagnement d'un **urbaniste agréé** et d'une équipe pluridisciplinaire.

-   **Expertise Complète** : De la conception du **plan de lotissement** à la coordination de votre **plan d'opération immobilière**.
-   **Sécurité Administrative** : Nous garantissons la conformité de vos dossiers pour une **approbation de lotissement** rapide et sécurisée.
-   **Accompagnement Stratégique** : Nous vous conseillons sur les meilleures stratégies de valorisation foncière, de la **restructuration urbaine** à la **promotion immobilière**.

**Contactez Horizon Spatial dès aujourd'hui pour discuter de votre projet de lotissement et sécuriser votre investissement foncier en Côte d'Ivoire.**
`;

// Simple parser pour le contenu
const parseContent = (content: string) => {
  const sections = content.split('\n---\n');
  return sections.map(section => {
    const lines = section.trim().split('\n');
    const title = lines[0].startsWith('#') ? lines.shift() : null;
    const body = lines.join('\n');
    return { title, body };
  });
};

const renderMarkdown = (text: string) => {
  // Remplace les **bold** par des balises <strong>
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Remplace les |...| par des tables
  if (text.includes('|')) {
    const lines = text.split('\n').filter(line => line.trim().startsWith('|'));
    if (lines.length > 1) {
      const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);
      const rows = lines.slice(2).map(line => line.split('|').map(c => c.trim()).filter(Boolean));
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-muted-foreground border-collapse">
            <thead className="text-xs text-foreground uppercase bg-muted/50">
              <tr>
                {headers.map((header, i) => <th key={i} className="px-6 py-3 border border-border">{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="bg-card border-b border-border">
                  {row.map((cell, j) => <td key={j} className="px-6 py-4 border border-border">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  // Remplace les listes
  text = text.replace(/\n- /g, '<br />- ');
  return <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />;
};

export default function UrbanismeCI() {
  const parsed = parseContent(markdownContent);

  return (
    <PageTransition>
      <div className="bg-background text-foreground">
        <Helmet>
          <title>Urbanisme & Lotissement en Côte d'Ivoire - Guide Complet | Horizon Spatial</title>
          <meta name="description" content="Le guide complet sur l'urbanisme en Côte d'Ivoire : procédure d'approbation de lotissement, demande d'ACD, titre foncier, et le rôle d'un cabinet d'urbanisme agréé à Abidjan." />
          <meta property="og:title" content="Urbanisme & Lotissement en Côte d'Ivoire - Guide Complet | Horizon Spatial" />
          <meta property="og:description" content="Tout savoir sur la procédure de lotissement, la demande d'ACD et la régularisation foncière en Côte d'Ivoire avec votre urbaniste agréé." />
          <meta property="og:url" content="https://www.horizonspatial.ci/urbanisme-cote-ivoire" />
          <link rel="canonical" href="https://www.horizonspatial.ci/urbanisme-cote-ivoire" />
        </Helmet>
        <Navigation />

        {/* Header Section */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="container text-center max-w-4xl mx-auto">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Guide Pratique</span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Urbanisme & Lotissements en Côte d&apos;Ivoire
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
              De la conception d&apos;un <strong className="text-primary">plan de lotissement</strong> à l&apos;obtention de l&apos;<strong className="text-primary">Arrêté de Concession Définitive (ACD)</strong>, découvrez les étapes clés pour sécuriser votre projet foncier.
            </p>
          </div>
        </section>

        <div className="container py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-8 space-y-12">
            {parsed.map((section, index) => (
              <section key={index}>
                {section.title && <h2 className="font-heading font-bold text-3xl mb-6 text-primary">{section.title.replace(/#+\s/, '')}</h2>}
                {renderMarkdown(section.body)}
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24 h-fit">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-heading font-bold text-xl mb-4">Pourquoi un Urbaniste Agréé ?</h3>
              <p className="text-sm text-muted-foreground mb-4">Faire appel à un cabinet d'urbanisme agréé est une obligation légale et votre meilleure garantie pour :</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500" /> Sécuriser votre investissement foncier</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-blue-500" /> Assurer la conformité de votre dossier</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Accélérer la procédure d'approbation</li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-4">Prêt à lancer votre projet ?</h3>
              <p className="text-primary-foreground/80 mb-6">Discutons de votre projet de lotissement, de régularisation foncière ou de promotion immobilière.</p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full font-bold">Contactez notre cabinet</Button>
              </Link>
            </div>
          </aside>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
