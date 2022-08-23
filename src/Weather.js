import React, { useState } from "react";
import axios from "axios";

import Timestamp from "./Timestamp";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

import brokenOvercastClouds from "./img/brokenOvercastClouds.jpg";
import clearDay from "./img/clearDay.jpg";
import clearNight from "./img/clearNight.jpg";
import fewClouds from "./img/fewClouds.jpg";
import mist from "./img/mist.jpg";
import nightClouds from "./img/nightClouds.jpg";
import rain from "./img/rain.jpg";
import snow from "./img/snow.jpg";
import thunderstorm from "./img/thunderstorm.jpg";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [report, setReport] = useState({ ready: false });
  function getReport(response) {
    setReport({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      timestamp: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      backgroundImage: WeatherBackground(response.data.weather[0].icon),
    });
  }

  function WeatherBackground(icon) {
    const codeMapping = {
      "01d": clearDay,
      "01n": clearNight,
      "02d": fewClouds,
      "02n": nightClouds,
      "03d": fewClouds,
      "03n": nightClouds,
      "04d": brokenOvercastClouds,
      "04n": nightClouds,
      "09d": rain,
      "09n": rain,
      "10d": rain,
      "10n": rain,
      "11d": thunderstorm,
      "11n": thunderstorm,
      "13d": snow,
      "13n": snow,
      "50d": mist,
      "50n": mist,
    };
    return codeMapping[icon];
  }

  function searchGeolocation(position) {
    const apiKey = `62f780f73f5ee00aa0f4d27f32e096c2`;
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(getReport);
  }
  function handleGeolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchGeolocation);
  }
  function search() {
    const apiKey = `62f780f73f5ee00aa0f4d27f32e096c2`;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(getReport);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  if (report.ready) {
    return (
      <div
        className="card"
        style={{
          backgroundImage: `url(${report.backgroundImage})`,
        }}
      >
        <div className="Weather">
          <div className="d-flex justify-content-between">
            <div>
              <Timestamp timestamp={report.timestamp} />
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="search"
                  autoFocus="on"
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  value="🔍"
                  className="search-button d-none d-sm-inline-block"
                  title="Search Location"
                />
                <button
                  className="location-button d-none d-sm-inline-block"
                  title="Current location"
                  onClick={handleGeolocation}
                >
                  <span role="img" aria-label="location">
                    📍
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <WeatherCurrent report={report} />
        <WeatherForecast coords={report.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
}
