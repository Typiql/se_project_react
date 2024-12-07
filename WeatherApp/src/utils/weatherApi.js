import { APIKEY, coordinates } from "./constants";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then((res) => (res.json ? res.json() : Promise.reject(`Error: ${res.status}`)))
    .then((data) => {
      return data.main.temp;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
};

const degrees = document.querySelector(".weatherCard__temp");

getWeather(coordinates, APIKEY).then((temp) => {
  if (degrees && temp !== null) {
    degrees.textContent = `${temp}°F`;
  } else {
    console.error("Failed to update temperature or element not found.");
  }
});
