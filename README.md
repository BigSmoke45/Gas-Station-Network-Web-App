# AERO-OIL — Gas Station Network Web App ⛽

A user-oriented web application for a fictional gas station network. The app covers the full customer journey — from finding a nearby station on an interactive map to making a purchase in the online store with crypto payment.

The project uses a separate Node.js backend ([Backend-Aero-Oil](https://github.com/BigSmoke45/Backend-Aero-Oil)) deployed on Render.com to keep all API keys and Firebase credentials out of the client-side code.

---

## Live Demo

> Frontend hosted on GitHub Pages: [bigsmoke45.github.io/Gas-Station-Network-Web-App](https://bigsmoke45.github.io/Gas-Station-Network-Web-App)
>
> Testing login for personal cabinet - testpost1257@gmail.com, password - 1472SqL97.
>
> Note on First Request (Render Free Tier)
The backend is hosted on Render using a free instance.
Due to this, the server may spin down after a period of inactivity.
When the application sends the first request, the backend may still be waking up and might not respond immediately.
What to do:
If the login request fails on the first attempt, simply refresh the page (F5)
Then try logging in again — it should work normally
This behavior is expected and related to Render’s free-tier limitations.
> 
> Backend API: [backend-aero-oil.onrender.com](https://backend-aero-oil.onrender.com)

---

## Features

- 🗺️ **Interactive map** — Leaflet.js / OpenStreetMap with 6 station markers, fuel-type filters (A-95, A-92, Diesel, Gas), and Google Maps route integration
- 🔐 **Auth system** — Firebase Authentication; credentials fetched securely from backend at runtime (no keys in source code)
- 👤 **Personal cabinet** — order history table, fuel spending analytics (Chart.js pie chart), loyalty progress bars, bonus points system
- 🛒 **Online store** — product catalog with category switcher, dynamic cart (add/remove/quantity), toast notifications
- 💳 **TON crypto payment** — WalletConnect via TonConnect UI, live UAH→TON conversion via CoinGecko API, wallet balance via backend proxy, real on-chain transaction
- ⛽ **Fuel price calculator** — quick cost estimate on the home page
- 📱 **Responsive design** — Bootstrap 5, works on mobile and desktop

---

## Architecture

```
┌─────────────────────────────┐
│   Frontend (GitHub Pages)   │
│   HTML + CSS + JS (ES6+)    │
└────────────┬────────────────┘
             │ fetch() on page load
             ▼
┌─────────────────────────────┐
│  Backend (Render.com)       │
│  Node.js + Express          │
│                             │
│  GET /firebase-config  ───► │──► Firebase config from .env
│  GET /balance/:address ───► │──► TonCenter API (key hidden)
└─────────────────────────────┘
             │
             ▼
┌─────────────────────────────┐
│  Firebase                   │
│  Auth + Realtime Database   │
└─────────────────────────────┘
```

**Why a backend?** Firebase config and TonCenter API key are stored as environment variables on the server. The frontend fetches the config at runtime via `GET /firebase-config` — nothing sensitive is ever in the client source code.

---

## Tech Stack

| Area | Technologies |
|------|-------------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| UI Framework | Bootstrap 5 |
| Map | Leaflet.js, OpenStreetMap |
| Auth & Database | Firebase Authentication, Firebase Realtime Database |
| Charts | Chart.js |
| Crypto Payment | TonConnect UI (WalletConnect), CoinGecko API |
| Backend | Node.js, Express.js, node-fetch, dotenv |
| Deployment | GitHub Pages (frontend), Render.com (backend) |
| Fonts | Google Fonts (Roboto, Rock Salt) |

---

## Project Structure

```
/
├── index.html                 # Home page with fuel calculator
├── map.html                   # Interactive station map
├── market.html                # Online store with cart
├── ton-checkout.html          # TON crypto payment page
├── registration.html          # User registration
├── validation.html            # Login page
├── personal_cabinet.html      # User dashboard
├── news.html                  # News and promotions
├── about_company.html         # Company info
├── js/
│   ├── map.js                 # Leaflet map, markers, filters
│   ├── market.js              # Store cart, checkout, TON payment
│   ├── registerJS.js          # Firebase registration
│   └── validJS.js             # Firebase login
└── css/
    ├── homeCSS.css
    ├── navbarCSS.css
    ├── personal_cabinet.css
    └── ...
```

---

## Key Implementation Details

**Secure Firebase initialization**

Both `registerJS.js` and `validJS.js` fetch the Firebase config from the backend before initializing the SDK:
```js
async function initFirebase() {
  const res = await fetch('https://backend-aero-oil.onrender.com/firebase-config');
  const firebaseConfig = await res.json();
  app = initializeApp(firebaseConfig);
}
```
No API keys appear anywhere in the frontend source.

**User storage by UID**

Users are stored in Firebase Realtime Database under their Firebase UID (`Користувачі АЗС/${user.uid}`), not by username. This prevents key collisions and aligns with Firebase best practices.

**Personal cabinet data**

After login, all user fields (orders, fuel totals, bonus progress) are saved to `sessionStorage`. The personal cabinet reads from there to populate the orders table, Chart.js fuel breakdown pie chart, and loyalty progress bars — no extra database calls needed on that page.

**TON balance via backend proxy**

The TonCenter API key is stored as an env variable on the backend. The frontend calls `GET /balance/:address` on the Express server, which proxies the request to TonCenter and returns the result — keeping the API key hidden from the browser.

**Map with fuel-type filtering**

Stations are grouped into `L.layerGroup` objects by fuel type. Users switch between "All stations", "A-95/A-92", "Diesel", and "Gas" via Leaflet's built-in layer control. Each popup contains address, hours, fuel types, and a Google Maps route link.

---

## Screenshots

<img width="2538" height="1250" alt="image" src="https://github.com/user-attachments/assets/29354d56-c750-4aa4-bf25-a99e054b7424" />


<img width="2560" height="1253" alt="image" src="https://github.com/user-attachments/assets/f7e6a6de-478c-4660-ad3c-b23419632b4b" />


<img width="2538" height="1274" alt="image" src="https://github.com/user-attachments/assets/41425f36-d273-4a7e-9c2f-e058cd396d43" />


<img width="2534" height="1226" alt="image" src="https://github.com/user-attachments/assets/1ad3cb03-2938-4222-8f26-d4bedfca5548" />


<img width="2560" height="1260" alt="image" src="https://github.com/user-attachments/assets/da6ae097-2aac-4592-a1d8-344216cad0ee" />


<img width="2540" height="1262" alt="image" src="https://github.com/user-attachments/assets/9f3703ef-2876-4412-8b22-10840e94d4e1" />


<img width="1433" height="752" alt="image" src="https://github.com/user-attachments/assets/0f8b5dc9-87c1-4392-b995-7d1176121785" />

---

## Backend

The backend lives in a separate repository: [Backend-Aero-Oil](https://github.com/BigSmoke45/Backend-Aero-Oil)

---

## Notes

- Firebase Realtime Database rules should be properly configured before any real-world use.
- The map currently shows stations for Kharkiv only.
- Payments via TON are fully functional and processed in real time. The application uses a valid wallet address for transactions.

⚠️ Please note:
This project is intended for demonstration purposes only.
If you have accidentally made a payment through the application, please contact me immediately to request a refund.


---

## Author

**BigSmoke45** — Software Engineering (B.Sc.) + Computer Science (M.Sc.)

[![GitHub](https://img.shields.io/badge/GitHub-BigSmoke45-181717?logo=github)](https://github.com/BigSmoke45)
