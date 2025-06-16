
# 🔧 Guide de Configuration de l'Interface d'Administration

## 📋 Prérequis

1. Un compte Firebase (gratuit)
2. Node.js installé sur votre ordinateur

## 🚀 Étapes de Configuration

### 1. Configuration Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez **Authentication** :
   - Allez dans "Authentication" > "Sign-in method"
   - Activez "Email/Password"
4. Activez **Firestore Database** :
   - Allez dans "Firestore Database" > "Create database"
   - Choisissez "Start in test mode" (vous pourrez sécuriser plus tard)

### 2. Obtenir la Configuration Firebase

1. Dans Firebase Console, allez dans "Project Settings" (⚙️)
2. Dans l'onglet "General", trouvez "Your apps"
3. Cliquez sur "Web app" (</>) pour créer une app web
4. Copiez la configuration qui ressemble à :

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet-id",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

### 3. Mettre à Jour la Configuration

1. Ouvrez le fichier `src/lib/firebase.ts`
2. Remplacez les valeurs dans `firebaseConfig` par vos vraies valeurs

### 4. Créer votre Compte Administrateur

1. Allez dans Firebase Console > Authentication > Users
2. Cliquez sur "Add user"
3. Ajoutez votre email et mot de passe

## 🎯 Utilisation

### Accéder à l'Administration

1. Allez sur votre site : `votre-site.com/admin`
2. Connectez-vous avec l'email/mot de passe créé dans Firebase

### Gérer les Articles

- **Créer** : Cliquez sur "Nouvel article"
- **Modifier** : Cliquez sur l'icône crayon
- **Supprimer** : Cliquez sur l'icône poubelle

## 🔐 Sécurité

### Changer votre Mot de Passe

1. Firebase Console > Authentication > Users
2. Cliquez sur votre utilisateur
3. Utilisez les options pour réinitialiser le mot de passe

### Règles Firestore Sécurisées

Dans Firebase Console > Firestore Database > Rules, remplacez par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Seuls les utilisateurs authentifiés peuvent accéder aux articles
    match /articles/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🚀 Déploiement avec Firebase Hosting

### Installation

```bash
npm install -g firebase-tools
firebase login
```

### Configuration

```bash
firebase init hosting
```

Choisissez :
- Use existing project → votre projet
- Public directory → `dist`
- Single-page app → `Yes`
- Set up automatic builds → `No`

### Déploiement

```bash
npm run build
firebase deploy
```

Votre site sera disponible sur : `votre-projet.web.app`

## 🎨 Personnalisation

### Couleurs et Styles

Les couleurs sont définies dans `src/index.css`. Modifiez les variables CSS :

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... autres couleurs */
}
```

### Logo et Branding

- Remplacez `public/favicon.ico` par votre logo
- Modifiez le titre dans `index.html`

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez que Firebase est bien configuré
2. Vérifiez que les règles Firestore permettent l'accès
3. Vérifiez la console du navigateur pour les erreurs

## 📝 Structure des Fichiers

```
src/
├── components/
│   ├── ArticleForm.tsx      # Formulaire de création/édition
│   ├── ArticlesList.tsx     # Liste des articles
│   └── ProtectedRoute.tsx   # Protection des routes admin
├── contexts/
│   └── AuthContext.tsx      # Gestion de l'authentification
├── hooks/
│   └── useArticles.ts       # Gestion des articles
├── pages/
│   ├── Admin.tsx           # Page d'administration
│   └── AdminLogin.tsx      # Page de connexion
├── types/
│   └── article.ts          # Types TypeScript
└── lib/
    └── firebase.ts         # Configuration Firebase
```
