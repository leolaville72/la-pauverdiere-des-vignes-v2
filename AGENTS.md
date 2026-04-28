<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Contexte projet

- Projet de gites avec reservation en ligne.
- Stack: Next.js 16.2.4 (App Router), React 19.2.4, TypeScript strict, ESLint 9.
- Styling principal en CSS classique (pas de refacto massif vers Tailwind sans demande explicite).
- Alias TypeScript actif: @/\*.
- Langue du site: francais.

## Regles techniques obligatoires

- Considerer Next.js 16 comme source de verite, pas les anciennes conventions.
- Avant toute implementation touchant Next, verifier la doc locale dans `node_modules/next/dist/docs/`.
- Conserver les patterns existants du repo (structure App Router, CSS, composants).
- Ne pas faire de refactor global non demande.
- Ne pas casser les routes existantes ni le SEO de base (title, metadata, structure semantique).
- Preserver les performances front (images optimisees, chargement lazy quand pertinent).

## Organisation du code

- Pages et layouts: `app/` et `app/(site)/`.
- Composants UI reutilisables: `app/components/`.
- Donnees statiques: `app/data/`.
- Styles: `app/styles/` et `app/globals.css`.
- Assets: `public/assets/`.

## Conventions de developpement

- TypeScript strict: eviter `any`, typer les props et retours.
- Composants lisibles, decoupage simple, pas de logique metier lourde dans le JSX.
- Accessibilite minimale obligatoire: labels, `aria-*`, navigation clavier, contrastes corrects.
- Pas d'ajout de dependance sans justification claire.
- Eviter les changements hors perimetre de la tache.

## Priorites reservation

- D'abord fiabilite metier: disponibilite, anti double reservation, regles tarifaires.
- Ensuite API stable.
- Ensuite UI de reservation branchee sur API.
- Enfin ameliorations UX visuelles.

## Checklist avant livraison

- Lancer `npm run lint`.
- Lancer `npm run build` pour verifier l'integration.
- Verifier desktop et mobile.
- Verifier les regressions sur les pages gites existantes.

<!-- END:nextjs-agent-rules -->
