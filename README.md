# NoteProApp

Il s'agit d'un plateforme sur laquelle les apprentis ont la possibilité d'entrer leurs notes scolaires,
ce qui leurs permet d'avoir une vue d'ensemble sur la progression de leurs apprentissage,
le calcule des différentes moyennes se fait dynamiquement ce qui garanti 

## — 🚀 Fonctionnalités —
### Globale
- ✅ Calcul des moyennes par groupes
- ✅ Calcul de la moyenne générale
- ✅ Vue individuelle pour chaque note

### Pour les apprentis
- ✅ Ajout de notes
  - Envoit un mail au formateur et au coach
- ✅ Ajout PDF (si existant)
- ✅ Modification de notes
- ✅ Ajout de bulletin

### Pour les formateurs / coach
- ✅ Création de compte d'un apprenti
  - Envoie un mail à l'apprenti en question
- ✅ Suppression de compte d'un apprenti
  - Supprime toutes ses données
- ✅ Enregistrement des PDF
- ✅ Affichage des notes de l'apprenti souhaité
- ✅ Partage d'accès avec un formateur / coach

## — 🛠️ Technologies utilisées —

- Langage : `JavaScript` / `PHP`
- Framework : `React` / `Laravel`
- Base de données : `PostgreSQL`
- Autres : `Tailwind CSS`

## — 📦 Installation—

```bash
# Cloner le dépôt
git clone https://github.com/ColinRgm/NoteProApp

# Se déplacer dans le dossier
cd NoteProApp

# Installer les dépendances
npm install

# Installer Laravel
composer install

# Lancer le projet
composer run dev

# Créer une clé de cryptage
php artisan key:generate

```

## — Base de données —

```bash
# Faire les migrations
php artisan migrate

# Ajout des données essentielles
php artisan db:seed
```
