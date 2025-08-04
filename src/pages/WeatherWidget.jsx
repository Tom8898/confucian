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
    return <div className="absolute top-4 right-4 px-4 py-2 rounded shadow-lg text-sm text-gray-800">Weather Forecast Error: {error}</div>;
  }

  if (!weather) {
    return <div className="absolute top-4 right-4 px-4 py-2 rounded shadow-lg text-sm text-gray-800">Loading Weather Forecast...</div>;
  }

  return (
    <div className="absolute top-4 right-4 px-4 py-2 rounded shadow-lg text-sm text-gray-800">
      <h2 className="font-serif text-sm font-light mb-2">Current Weather in {weather.name}</h2>
      <p className="font-serif">Temperature: {weather.main.temp} °C</p>
      <p className="font-serif">Condition: {weather.weather[0].description}</p>
      <p className="font-serif">Humidity: {weather.main.humidity}%</p>
      <p className="font-serif">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}