# Interactive Maps App 🌍

A React application that lets users search for locations, explore them on an interactive map, and save their favorite places.

Built to practice component-based development, API integration, client-side routing, and state management.

## Features

- Search for locations using the OpenStreetMap Nominatim API.
- Display search results as markers on an interactive map.
- View location details, including addresses and coordinates.
- Save and remove favorite places with localStorage persistence.
- Switch between light and dark themes.
- Display loading indicators and error messages during API requests.
- Navigate between pages using React Router.

## Tech Stack

- **Frontend:** React 18, JavaScript, HTML, CSS
- **Routing:** React Router
- **Maps:** Leaflet and React Leaflet
- **API:** OpenStreetMap Nominatim
- **Storage:** Browser localStorage
- **Build tool:** Vite

## Getting Started

Install Node.js and npm, then run:

```bash
git clone https://github.com/Dayron-Encarnacion-Arias/App-Web-React-Maps.git
cd App-Web-React-Maps/maps-portfolio
npm install
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── components/   # Reusable UI and map components
├── context/      # Theme context
├── hooks/        # API request and localStorage hooks
├── pages/        # Home, search, favorites, and location details
├── services/     # Nominatim API integration
├── styles/       # Shared styles
├── App.jsx       # Routing and shared application state
└── main.jsx      # Application entry point
```

## Implementation Highlights

- Created reusable components for search, place cards, maps, and feedback messages.
- Built a custom hook to manage asynchronous requests and loading/error states.
- Managed favorites through shared React state and a localStorage hook.
- Integrated geographic search results with map markers and camera movement.
- Used dynamic routes to display individual location details.

## Current Limitations

- Favorites are stored in the current browser and do not sync across devices.
- Location detail pages rely on navigation state or locally saved favorites; opening an unsaved location URL directly may not display its details.
- Search and map tiles require an internet connection and depend on external services.
- This project uses an external API and does not include a custom backend.

## Planned Improvements

- Add automated tests for search and favorites.
- Improve accessibility and mobile layouts.
- Improve handling of direct links to location details.
- Publish a live demo.

## Credits

Location search is provided by OpenStreetMap Nominatim.
Map data © OpenStreetMap contributors.

## Author

**Dayron Encarnación Arias**
