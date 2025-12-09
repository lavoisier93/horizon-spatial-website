# Horizon Spatial - Site Web Officiel

Bienvenue sur le dépôt du site web officiel de **Horizon Spatial**, un bureau d'études expert en urbanisme et géomatique basé en Côte d'Ivoire. Ce projet vitrine présente l'expertise, les solutions et les réalisations de l'entreprise.

![Horizon Spatial Banner](/client/public/logo-web.jpg)

## 🚀 À propos

Horizon Spatial combine l'expertise urbanistique et les technologies géospatiales les plus avancées pour transformer durablement les territoires africains. Ce site web a été conçu pour refléter cette vision "Futurisme Organique", alliant technologie de pointe et développement durable.

### Fonctionnalités Clés

*   **Design Moderne & Responsive :** Interface utilisateur soignée, adaptée à tous les écrans (mobile, tablette, desktop).
*   **Carte Interactive des Projets :** Intégration de Google Maps pour géolocaliser les réalisations à travers la Côte d'Ivoire.
*   **Formulaire de Contact Fonctionnel :** Connecté via EmailJS pour une réception instantanée des messages.
*   **Bouton WhatsApp Flottant :** Pour une prise de contact rapide et directe.
*   **Optimisation SEO :** Balises méta complètes, Open Graph et structure sémantique pour un meilleur référencement.
*   **Pages Dédiées :** Accueil, Expertise, Solutions, Projets, À Propos.

## 🛠️ Stack Technique

Ce projet est construit avec des technologies web modernes pour assurer performance et maintenabilité :

*   **Frontend :** [React 19](https://react.dev/)
*   **Build Tool :** [Vite](https://vitejs.dev/)
*   **Styling :** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Routing :** [Wouter](https://github.com/molefrog/wouter)
*   **Cartographie :** Google Maps JavaScript API
*   **Emailing :** [EmailJS](https://www.emailjs.com/)
*   **Icônes :** [Lucide React](https://lucide.dev/)

## 📦 Installation et Démarrage

Pour lancer ce projet localement, suivez ces étapes :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/lavoisier93/horizon-spatial-website.git
    cd horizon-spatial-website
    ```

2.  **Installer les dépendances :**
    ```bash
    pnpm install
    # ou
    npm install
    ```

3.  **Configurer les variables d'environnement :**
    Créez un fichier `.env` à la racine du projet et ajoutez vos clés API (voir `.env.example` si disponible) :
    ```env
    VITE_EMAILJS_PUBLIC_KEY=votre_cle_publique
    VITE_EMAILJS_SERVICE_ID=votre_service_id
    VITE_EMAILJS_TEMPLATE_ID=votre_template_id
    VITE_FRONTEND_FORGE_API_KEY=votre_cle_google_maps
    ```

4.  **Lancer le serveur de développement :**
    ```bash
    pnpm dev
    ```
    Le site sera accessible à l'adresse `http://localhost:3000`.

## 🚀 Déploiement

Le projet est prêt à être déployé sur des plateformes comme Vercel, Netlify ou GitHub Pages.
Assurez-vous de configurer les variables d'environnement dans les paramètres de votre hébergeur.

## 👤 Auteur

**Lavoisier Ousmane**
*   *Urbaniste & Expert SIG*
*   Email : [ousmanedlavoisier@gmail.com](mailto:ousmanedlavoisier@gmail.com)
*   Téléphone : +225 07 89 89 10 01

---
*Fait avec passion pour le développement de l'Afrique.*
