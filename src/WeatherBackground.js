import React from "react";
import "./WeatherBackground.css";
import brokenOvercastClouds from "./img/brokenOvercastClouds.jpg";
import clearDay from "./img/clearDay.jpg";
import clearNight from "./img/clearNight.jpg";
import fewClouds from "./img/fewClouds.jpg";
import mist from "./img/mist.jpg";
import nightClouds from "./img/nightClouds.jpg";
import rain from "./img/rain.jpg";
import snow from "./img/snow.jpg";
import thunderstorm from "./img/thunderstorm.jpg";
export default function WeatherBackground(props) {
  const codeMapping = {
    "01d": { clearDay },
    "01n": "clearNight",
    "02d": "fewClouds",
    "02n": "nightClouds",
    "03d": "fewClouds",
    "03n": "nightClouds",
    "04d": "brokenOvercastClouds",
    "04n": "nightClouds",
    "09d": "rain",
    "09n": "rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "thunderstorm",
    "11n": "thunderstorm",
    "13d": "snow",
    "13n": "snow",
    "50d": "mist",
    "50n": "mist",
  };
  return (
    <div className="WeatherBackground">
      <img src={codeMapping[props.icon]} alt="weather" />
    </div>
  );
}
