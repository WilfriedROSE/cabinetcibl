# Deploy on Vercel

Pour le déploiement, j'ai utilisé Vercel comme moyen d'hébergement de mon site.
Le déploiement se fait de manière automatique sur Vercel chaque fois qu'un commit est poussé sur la branche principale. Voici les étapes pour déployer ton propre projet sur Vercel :
Se connecter à Vercel.
Importer le projet GitHub en sélectionnant le dépôt.
Vercel va automatiquement configurer le projet en fonction des paramètres détectés (Next.js).
Pusher les modifications via Git, et Vercel mettra à jour automatiquement le site de manière transparente.

## Projet de Site Web Next.js - Cabinet CIBL Thérapie

Bienvenue sur le projet Cabinet Cibl, un site web développée avec Next.js, un framework React, et utilise plusieurs fonctionnalités telles la prise de rendez-vous, l'intégration d'un formulaire de contact, un affichage dynamique des tarifs, une gestion de l'agenda via Web3Forms, ainsi que l'implémentation de Google Maps pour afficher des informations géographiques.


## À propos du projet

Le Cabinet Cibl est un site web créé pour un cabinet thérapeutique situé dans la ville du Havre. Il permet aux patients ou futurs patients de consulter des informations sur les services proposés du cabinet, de consulter les tarifs et de prendre un rendez-vous directement via un formulaire de contact.

## Technologies utilisées

Next.js (framework React)

Tailwind CSS (pour la gestion du style)

Vercel (pour le déploiement)

API Web3Forms (pour la gestion du formulaire de contact)

Google Maps API (pour afficher une carte interactive)

React Hook Form (pour la gestion des formulaires)

JavaScript

## Démarrage du Projet

## Cloner le Repository Git "le Dépot"

   git clone git@github.com:WilfriedROSE/cabinetcibl.git

## Instalation des dépendances

npm install

### Lancer le serveur de développement

npm run dev
Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir le site en développement.


Le projet a été initialement créé avec create-next-app et configuré avec Next.js. Les composants de base ont été créés pour afficher les différentes sections du site, telles que les informations pratiques, les tarifs, et un formulaire de contact.

## Fonctionnalités

## Page des Tarifs

J'ai créé des sections tarifaires pour les différents types de services (thérapie de couple, thérapie de famille, etc.) dans le fichier tarifs.js.
Ensuite, j'ai ajouté les composants CouplePrice, FamilyPrice, et TeamPrice pour chaque type de service, incluant les informations de prix et une section de réservation.

## Formulaire de Contact

J'ai intégré un formulaire de contact qui permet aux utilisateurs d'envoyer un message au cabinet (nom, email, message).
Les données du formulaire sont envoyées à un service externe via l'API Web3Forms. Un message de succès ou d'erreur est affiché après l'envoi.

## Intégration de Google Maps

J'ai intégré une API de Google Maps pour afficher l'emplacement du cabinet. le composant a été ajouté pour afficher une carte interactive à la section des informations pratiques.

Utilisation de l'API Google Maps pour intégrer une carte interactive responsive.

## Page de Réservation

Lorsqu'un utilisateur clique sur "Réservez un rendez-vous", il est redirigé vers un agenda ou un formulaire qui peut être configuré pour intégrer Google Calendar ou un autre service de prise de rendez-vous.




