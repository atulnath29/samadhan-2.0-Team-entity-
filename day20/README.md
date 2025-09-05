# Day 20: Weather App with Interactive Maps 🌦️

👨‍💻 Today, I built a dynamic, client-side weather forecast application. This project integrates multiple third-party APIs to fetch real-time weather data based on the user's current location and display it on an interactive map. It also includes a search feature to check the weather for any city in the world.

---

## ✨ Key Features & Concepts

1.  **Third-Party API Integration:** Fetches live weather data from the **OpenWeatherMap API**, providing up-to-date temperature, conditions, and weather icons.
2.  **Browser Geolocation:** Utilizes the browser's built-in `navigator.geolocation` API to request the user's current latitude and longitude for an instant, localized forecast upon loading the app.
3.  **Interactive Maps:** Implemented a dynamic map using the open-source **Leaflet** library and **OpenStreetMap** tiles (via the `react-leaflet` wrapper). The map displays a marker at the current weather location.
4.  **City Search:** Added functionality for users to search for the weather in any city worldwide, updating both the weather display and the map's location.
5.  **Client-Side Application:** This entire application runs in the browser. It's built with **React** which manages all the application state and API calls directly to the external services.

---

## ▶️ How to Run the Project

### Prerequisites

You will need a free API key from **OpenWeatherMap**.
1.  Sign up on the [OpenWeatherMap website](https://openweathermap.org/appid).
2.  Get your API key from your account dashboard.

### Setup Instructions

```bash
# Navigate to the frontend folder
cd frontend

# Create a .env file in the 'frontend' directory
# Add your OpenWeatherMap API key to it:
# REACT_APP_OPENWEATHER_API_KEY=your_api_key_goes_here

# Install all necessary dependencies
npm install

# Start the development server
npm start
# The application will open and run on http://localhost:3000
