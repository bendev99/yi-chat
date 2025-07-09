# Application de messagerie en ligne développée avec ReactJS, TailwindCSS, Express, NodeJS et MongoDB

Cette application de chat en temps réel utilise la puissance de **React**, **Tailwind CSS**, **Express** et **MongoDB** pour offrir une expérience de messagerie moderne, fluide et responsive. Les utilisateurs peuvent s'inscrire, se connecter et discuter instantanément avec d'autres membres, ce qui en fait une solution idéale pour créer des plateformes de communication (chat d'équipe, messagerie sociale, support client, etc.).

## **Fonctionnalités**

- **Authentification sécurisée** : Authentification des utilisateurs via **Express** et **MongoDB** avec gestion des comptes par email et mot de passe.
- **Messagerie texte en temps réel** : Les messages sont synchronisés instantanément entre tous les utilisateurs connectés.
- **Interface responsive** : Grâce à **Tailwind CSS**, l'application s'adapte à tous les écrans pour une expérience optimale sur mobile, tablette et ordinateur.
- **Interface intuitive** : UI simple et conviviale avec zone de saisie, fenêtre de chat et indicateurs de présence des utilisateurs.
- **Sécurité & évolutivité** : Les données utilisateurs et messages sont stockés de manière sécurisée dans MongoDB.

## **Installation et lancement**

1. **Cloner le projet**

   ```bash
   git clone https://github.com/nasolo99/koragna.git
   cd koragna
   ```

2. **Configurer les variables d'environnement**

   - Créez un fichier `.env` à la dossier racine et renseignez vos identifiants MongoDB et la clé secrète JWT.

3. **Installer les dépendances**

   - Pour le backend :
     ```bash
     npm install
     ```
   - Pour le frontend :
     ```bash
     cd frontend
     npm install
     ```

4. **Lancer le serveur backend**

   ```bash
   npm run server
   ```

5. **Lancer le serveur frontend**
   ```bash
   npm run dev
   ```

## **Technologies utilisées**

- **Frontend** : React, Tailwind CSS
- **Backend** : Express, Node.js, MongoDB (Mongoose)
- **Authentification** : JWT

---

Ce projet est idéal pour apprendre à construire une application de chat temps réel full-stack moderne
