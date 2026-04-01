# Projet Étudiants Management

Une application full-stack moderne pour la gestion d'étudiants, combinant une **API REST Spring Boot** robuste et une **application mobile interactive** développée avec **Expo/React Native**.

---

## 🏗️ Architecture du Projet

Le projet est divisé en deux parties principales :

*   **`api-spring-boot`** : Le backend fournissant une interface RESTful sécurisée connectée à une base de données PostgreSQL.
*   **`mobile-app`** : L'interface utilisateur mobile permettant de visualiser et d'interagir avec les données des étudiants.

---

## 🛠️ Stack Technique

### Backend (API)
*   **Framework** : Spring Boot 4.0.5
*   **Langage** : Java 21
*   **Persistance** : Spring Data JPA
*   **Base de Données** : PostgreSQL 15-alpine
*   **Outils** : Lombok, Maven

### Mobile (Frontend)
*   **Framework** : Expo 54 / React Native 0.81.5
*   **Langage** : TypeScript
*   **Navigation** : Expo Router (Tabs Layout)
*   **Styling** : StyleSheet (Native)

### DevOps & Outils
*   **Containerisation** : Docker & Docker Compose
*   **Gestion de Versions** : Git

---

## 🚀 Installation et Démarrage

### 0. Prérequis
Assurez-vous d'avoir installé :
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/)
*   [Java 21 JDK](https://adoptium.net/temurin/releases/?version=21)
*   [Node.js](https://nodejs.org/) (v18+)

### 1. Base de Données & Infrastructure
La base de données PostgreSQL est gérée via Docker Compose.
```bash
docker-compose up -d db
```

### 2. Démarrage de l'API Backend
Naviguez dans le dossier de l'API et lancez le serveur :
```bash
cd api-spring-boot
./mvnw spring-boot:run
```
L'API sera accessible sur : `http://localhost:8080/api/etudiants`

### 3. Démarrage de l'Application Mobile
Naviguez dans le dossier mobile et lancez Expo :
```bash
cd mobile-app
npm install
npm start
```
Vous pouvez ensuite scanner le QR code avec l'application Expo Go sur votre téléphone ou lancer un émulateur iOS/Android.

---

## 📂 Structure des fichiers

```text
projet-etudiants/
├── api-spring-boot/        # Backend Java/Spring Boot
│   ├── src/
│   │   ├── main/java/.../  # Code source (Entities, Controllers, Services)
│   │   └── main/resources/ # Configuration (application.properties)
│   ├── pom.xml             # Dépendances Maven
│   └── Dockerfile          # Image Docker Backend
├── mobile-app/             # Application Expo
│   ├── app/                # Screens & Navigation (Expo Router)
│   ├── components/         # Composants réutilisables
│   ├── types/              # Definitions TypeScript
│   └── package.json        # Dépendances NPM
└── docker-compose.yml       # Orchestration Database + API
```

---

## 🔗 Endpoints API Principaux

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/etudiants` | Récupérer la liste complète des étudiants |

> [!NOTE]
> L'API est configurée avec `@CrossOrigin(origins = "*")` pour faciliter le développement avec l'application mobile.

---

## ✨ Fonctionnalités implémentées
- ✅ Liste des étudiants avec rendu optimisé (`FlatList`)
- ✅ Gestion d'état de chargement et d'erreur
- ✅ Containerisation de la base de données
- ✅ Communication Backend/Frontend temps réel
