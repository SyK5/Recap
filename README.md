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
│   │   ├── pages/                  # Seiten (Home, Login, Dashboard)
│   │   │   ├── Home.jsx            # Die Haubtseite
│   │   ├── hooks/                  # Custom Hooks (useFetch.js)
│   │   ├── services/               # API-Aufrufe (Kommunikation mit Backend)
│   │   ├── App.jsx                 # Hauptkomponente
│   │   ├── main.jsx                # Einstiegspunkt für React
│   ├── .env                        # (optional) Umgebungsvariablen (z. B. API-URL)
│   ├── package.json                # Abhängigkeiten & Scripts
│   ├── README.md                   # Dokumentation
│   └── vite.config.js              # Falls Vite verwendet wird
│
├── server/                         # Backend (Node.js + Express)
│   ├── controllers/                # Logik für API-Routen
│   │   ├── userController.js
│   ├── models/                     # Datenbank-Modelle (MongoDB, PostgreSQL, etc.)
│   │   ├── userModel.js
│   ├── routes/                     # API-Routen
│   │   ├── userRoutes.js
│   ├── config/                     # Konfigurationsdateien (Datenbank, JWT, etc.)
│   │   ├── db.js
│   ├── middleware/                 # Middleware (Auth, Logging)
│   ├── api.js                      # API-Funktionen (optional)
│   ├── server.js                   # Hauptserver (Express Setup)
│   ├── .env                        # Umgebungsvariablen (DB-URL, API-Keys)
│   ├── package.json                # Abhängigkeiten & Scripts
│   ├── README.md                   # Backend Dokumentation
│   └── nodemon.json                # (optional) Nodemon-Konfiguration für Auto-Reload
│
├── .gitignore                      # Dateien, die nicht ins Repo gehören (node_modules, .env)
├── README.md                       # Gesamte Projektbeschreibung
└── package.json                    # (Optional: Monorepo-Management)

```