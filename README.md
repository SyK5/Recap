# Recap

1. Erstelle zu erst react project

## versuche folgende struktur einzuhalten :

```
my-fullstack-project/
├── client/                         # Frontend (React)
│   ├── public/                     # Statische Dateien (index.html, Icons, etc.)
│   ├── src/
│   │   ├── assets/                 # Bilder, Icons, Stylesheets
│   │   ├── components/             # Wiederverwendbare UI-Komponenten
│   │   │   ├── Layout.jsx          # Layout der seite, die Darstellung
│   │   │   ├── Topbar.jsx          # Obere Navigations fenster
│   │   ├── pages/                  # Seiten (Home, Login, Dashboard)
│   │   │   ├── Home.jsx            # Die Haubtseite
│   │   │   ├── Help.jsx            # Die Hilfeseite
│   │   │   ├── Login.jsx           # Die Loginseite
│   │   │   ├── NotFound.jsx        # Nicht gefundene Seite
│   │   │   ├── Profile.jsx         # Die Profilseite
│   │   │   ├── Register.jsx        # Die Seite zum Registrieren
│   │   │   ├── Search.jsx          # Die Suchseite
│   │   ├── hooks/                  # Custom Hooks (useFetch.js, useContext.jsx, useReducer.jsx)
│   │   │   ├── Context/            # Context Hooks
│   │   │   │   ├── mainContext.jsx # MainContext zum weitergeben
│   │   │   ├── reducer/            # Reducer Hooks
│   │   │   │   ├── userReducer.js  # UserReducer für den benutzter registrieren und login
│   │   ├── services/               # API-Aufrufe (Kommunikation mit Backend)
│   │   ├── styles/                 # Die Styles für die Componente
│   │   │   ├── app.css/            # App Styles
│   │   │   ├── main.css/           # main Syles
│   │   ├── App.jsx                 # Hauptkomponente
│   │   ├── main.jsx                # Einstiegspunkt für React
│   ├── .env                        # (optional) Umgebungsvariablen (z. B. API-URL)
│   ├── .gitignore                  # Damit sensible daten nicht veröffentlicht werden.
│   ├── eslint.config.js            # bin noch dabei herauszufinden wofür ich es nutzten kann.
│   ├── index.html                  # Projekt selbst bzw die seite.
│   ├── package-lock.json           # liste der dependencies
│   ├── package.json                # Abhängigkeiten & Scripts
│   ├── postcss.config.js           # postcss glaube war zum compilieren für tailwind. hilft einfach dass tailwind funktioniert
│   ├── tailwind.config.js          # tailwind config dateien. versuche es noch funktionsfähig zu kriegen
│   └── vite.config.js              # Falls Vite verwendet wird
│
├── server/                         # Backend (Node.js + Express)
│   ├── config/                     # Konfigurationsdateien (Datenbank, JWT, etc.)
│   │   ├── db.js                   # MongoDB connection
│   │   ├── jwt.js                  # Token ersteller
│   ├── controllers/                # Logik für API-Routen
│   │   ├── userController.js       # Controller um die Benutzter daten zu verarbeiten.
│   ├── middleware/                 # Middleware (Auth, Logging)
│   │   ├── asyncHandler.js         # ein globaler error handler damit nicht bei jedem fehler der code crashed
│   ├── models/                     # Datenbank-Modelle (MongoDB, PostgreSQL, etc.)
│   │   ├── userModel.js            # der Benutzter profil
│   ├── routes/                     # API-Routen
│   │   ├── userRoutes.js           # der benutzterroute
│   ├── .env                        # Umgebungsvariablen (DB-URL, API-Keys)
│   ├── .gitignore                  # Dateien, die nicht ins Repo gehören (node_modules, .env)
│   ├── main.js                     # Hauptserver (Express Setup)
│   ├── package-lock.json           # liste der dependencies
│   └── package.json                # Abhängigkeiten & Scripts
│
├── .gitignore                      # Dateien, die nicht ins Repo gehören (node_modules, .env)
├── README.md                       # Gesamte Projektbeschreibung

```