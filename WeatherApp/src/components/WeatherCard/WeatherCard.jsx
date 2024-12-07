import React from "react";
import "./WeatherCard.css";

function WeatherCard({ temperature }) {
  return (
    <div className="weatherCard">
      <p className="weatherCard__temp">{temperature ? `${temperature}°F` : "Loading..."}</p>
    </div>
  );
}

export default WeatherCard;
