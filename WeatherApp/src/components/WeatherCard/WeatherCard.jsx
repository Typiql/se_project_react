import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <div className="weatherCard">
      <p className="weatherCard__temp">{Math.round(weatherData.temp)}°F</p>
    </div>
  );
}

export default WeatherCard;
