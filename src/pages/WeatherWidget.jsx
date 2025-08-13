import { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-36.84854&lon=174.7633&appid=32ce84506796ad11d4d4930d5312fad1&units=metric');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return (
      <div className="absolute top-4 right-4 px-4 py-3 rounded-lg shadow-lg text-sm text-white bg-black/30 backdrop-blur-sm border border-white/20">
        Weather Forecast Error: {error}
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="absolute top-4 right-4 px-4 py-3 rounded-lg shadow-lg text-sm text-white bg-black/30 backdrop-blur-sm border border-white/20">
        Loading Weather Forecast...
      </div>
    );
  }

  return (
    <div className="absolute top-4 right-4 px-4 py-3 rounded-lg shadow-lg text-sm text-white bg-black/30 backdrop-blur-sm border border-white/20">
      <h2 className="font-serif text-sm font-semibold mb-2">Current Weather in {weather.name}</h2>
      <p className="font-serif text-xs mb-1">Temperature: {weather.main.temp} °C</p>
      <p className="font-serif text-xs mb-1">Condition: {weather.weather[0].description}</p>
      <p className="font-serif text-xs mb-1">Humidity: {weather.main.humidity}%</p>
      <p className="font-serif text-xs">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}