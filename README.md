# Unydex — le site en ligne (dépôt public)

**Ce dépôt ne contient pas le code source d'Unydex**, qui est privé. Il contient uniquement
l'application **déjà compilée**, prête à être servie, et il sert à deux choses.

## 1. Utiliser l'appli dans un navigateur

GitHub Pages publie ce dépôt à l'adresse :

### → <https://gls13600.github.io/unydex/>

C'est l'appli complète, utilisable sans rien installer : Living Dex et boîtes PC, Pokédex,
équipes, collection de cartes, classeurs, scan.

- **Sur iPhone** : ouvrir le lien dans Safari, puis *Partager → Sur l'écran d'accueil*.
  Elle s'ouvre alors en plein écran comme une vraie application, et ne vous demande ni
  compte ni certificat.
- **Sur Android ou ordinateur** : le lien dans Chrome, Edge ou Firefox.
- Elle se met à jour toute seule au rechargement de la page.
- La version en service est affichée dans l'appli : Profil → Version.

## 2. Installer l'appli iPhone avec SideStore

Les [releases](https://github.com/GLS13600/unydex/releases) de ce dépôt portent le
fichier `Unydex.ipa` (l'application iPhone « Unydex Dev »). SideStore propose ses mises à
jour, sans câble, depuis la source :

```
https://gls13600.github.io/unydex/source.json
```

À ajouter une fois dans SideStore (Sources → +).

## Ce que contient ce dépôt

| Fichier ou dossier | Rôle |
|---|---|
| `index.html`, `assets/`, `fonts/`, `icon.svg` | l'application compilée et minifiée, sa police et son icône |
| `sprites/`, `cries/`, `wallpapers/`, `types/`, `items/` | images et sons des Pokémon |
| `visuels-cartes/`, `logos-cartes/` | visuels de cartes et logos d'extensions absents du catalogue en ligne |
| `scan/`, `scan-cartes/` | modèles de reconnaissance du Scan (tout le calcul se fait sur l'appareil) |
| `legal/` | politique de confidentialité, conditions d'utilisation, mentions légales, crédits |
| `source.json` | le manifeste lu par SideStore |
| `sw.js` | le service worker : l'appli fonctionne aussi hors ligne |

**Ne pas modifier ce dépôt** : son contenu est remplacé automatiquement à chaque nouvelle
version.

## Contact et demandes de retrait

- **Une question, un problème, ou une demande de retrait d'un contenu** : ouvrez une
  [*issue*](https://github.com/GLS13600/unydex/issues) sur ce dépôt, ou écrivez à
  **unydexapp@gmail.com**.
- Tout contenu dont le titulaire des droits demande le retrait est retiré promptement.

## Droits

Application **non officielle**, sans lien avec Nintendo, Creatures, GAME FREAK ou The Pokémon
Company, ni approuvée par eux. Pokémon et les noms des Pokémon sont des marques de
Nintendo. ©1995–2026 Nintendo / Creatures Inc. / GAME FREAK inc. / The Pokémon Company : tous
droits réservés sur les illustrations, sprites, cris et visuels de cartes, qui ne sont
affichés qu'à titre d'identification. Les crédits complets sont dans l'application
(Profil → Légal → Crédits et droits).

© 2026 Guillaume LEPINAY-SALVETAT — tous droits réservés sur l'application elle-même.
Aucune licence n'est accordée sur le contenu de ce dépôt.

*Unofficial fan project, not affiliated with or endorsed by Nintendo, Creatures Inc., GAME
FREAK inc. or The Pokémon Company. This repository only hosts the compiled web app; its
source code is private.*
