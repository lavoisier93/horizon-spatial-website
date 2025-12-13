# Horizon Spatial — Site Web Officiel

Bienvenue sur le dépôt du site web officiel de **Horizon Spatial**, bureau d'études expert en urbanisme et géomatique basé en Côte d'Ivoire.

## ✨ Fonctionnalités
- Interface moderne, responsive et performante (React + Vite + Tailwind 4)
- Carte interactive des projets (Google Maps via proxy Forge)
- Formulaire de contact (EmailJS)
- Bouton WhatsApp flottant (prise de contact rapide)
- SEO basique (balises meta, Open Graph, Twitter)

## 🛠️ Stack Technique
- Frontend: `React 19`
- Build: `Vite 5`
- Styles: `Tailwind CSS 4` + utilitaires (class-variance-authority, tailwind-merge)
- Routing: `Wouter` (patch appliqué via pnpm)
- Cartographie: Google Maps JavaScript API
- Emailing: EmailJS
- Icônes: Lucide React

## ✅ Prérequis
- `Node` recommandé: `^20.19.0` ou `>=22.12.0`
- Gestionnaire de paquets: `pnpm` (recommandé et utilisé par le repo)
  ```bash
  npm i -g pnpm
  ```

## 📦 Installation
```bash
# Cloner
git clone https://github.com/lavoisier93/horizon-spatial-website.git
cd horizon-spatial-website

# Installer les dépendances
pnpm install
```

## 🔑 Configuration de l’environnement
Dupliquez `.env.example` en `.env` et renseignez vos valeurs:
```env
# EmailJS
VITE_EMAILJS_PUBLIC_KEY=votre_cle_publique
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id

# Google Maps via Frontend Forge
VITE_FRONTEND_FORGE_API_KEY=votre_cle_google_maps
# Optionnel (par défaut: https://forge.butterfly-effect.dev)
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev

# Analytics (Umami) — optionnel
VITE_ANALYTICS_ENDPOINT=https://analytics.votre-domaine.com
VITE_ANALYTICS_WEBSITE_ID=uuid-de-votre-site
```
- Si `VITE_ANALYTICS_*` n’est pas défini, le script d’analytics n’est pas injecté (aucune erreur au démarrage).

## ▶️ Démarrage
```bash
pnpm dev
```
- Application disponible sur `http://localhost:3000/`

## 📁 Structure du projet
```
/client
  ├─ index.html            # Injection conditionnelle du script analytics
  ├─ public/               # Assets publics
  └─ src/
     ├─ pages/             # Pages (Home, Expertise, Solutions, Projets, About)
     ├─ components/        # UI et composants applicatifs (WhatsApp, Map, etc.)
     ├─ contexts/          # Thème, providers
     ├─ hooks/             # Hooks utilitaires
     └─ main.tsx           # Entrée React
/server
  └─ index.ts              # Entrée serveur (bundle via esbuild)
/shared
  └─ const.ts              # Constantes partagées
vite.config.ts             # Config Vite + plugins
pnpm-lock.yaml             # Lockfile pnpm
patches/                   # Patch pnpm (wouter)
```

## 📜 Scripts utiles
```bash
pnpm dev       # Démarrer le serveur de dev
pnpm build     # Build frontend et bundle serveur (esbuild)
pnpm preview   # Prévisualiser le build Vite
pnpm start     # Démarrer le serveur Node en prod (dist/index.js)
pnpm check     # Vérifier TypeScript (tsc --noEmit)
pnpm format    # Formatter le code (Prettier)
```

## 🚀 Déploiement
- Build: `pnpm build`
- Variables d’environnement: renseignez les mêmes variables (`.env`) dans votre plateforme (Vercel, Netlify, etc.).
- Démarrage Node (si hébergement classique): `pnpm start`

## 🧩 Notes d’architecture
- `vite` est fixé en v5 pour compatibilité avec `@builder.io/vite-plugin-jsx-loc` et `@vitejs/plugin-react@^5`.
- `wouter` est patché via `pnpm.patchedDependencies` — assurez-vous d’utiliser `pnpm` pour que le patch s’applique.
- Tailwind 4 est activé via `@tailwindcss/vite`.

## 🩺 Dépannage
- Conflit de dépendances Vite (`ERESOLVE`): restez sur `vite@^5.x` (le plugin Builder ne supporte pas Vite 7).
- Avertissement `EBADENGINE` sur Node: mettez à jour Node vers `^20.19.0` ou `>=22.12.0`.
- Variables Analytics manquantes: le site démarre sans analytics (aucune requête cassée).
- `pnpm approve-builds`: si pnpm affiche des scripts ignorés (esbuild/oxide), utilisez cette commande pour approuver.

## 👤 Auteur
**Lavoisier Ousmane** — Urbaniste & Expert SIG
- Email: [ousmanedlavoisier@gmail.com](mailto:ousmanedlavoisier@gmail.com)
- Téléphone: +225 07 89 89 10 01

---
Fait avec passion pour le développement de l'Afrique.
