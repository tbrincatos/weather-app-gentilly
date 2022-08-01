import React, { useState } from "react";

import axios from "axios";
import "./Header.css";

export default function Header() {
  const apiKey = `62f780f73f5ee00aa0f4d27f32e096c2`;
  let unit = `metric`;
  let city = "Paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  const [ready, setReady] = useState(false);
  const [report, setReport] = useState({});
  function showReport(response) {
    setReport({
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
    setReady(ready);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    console.log(event.target.value);
  }
  if (ready) {
    return (
      <div>
        <div className="Header">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Wed 27 July 2022 10:37</h4>
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
                  className="search-button"
                  title="Search Location"
                />
                <button className="location-button" title="Current location">
                  <span role="img" aria-label="location">
                    📍
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <h1>{report.city}</h1>
        <h4>{report.description}</h4>
        <h5>{report.wind}km/h</h5>
        <h2>(Math.round{report.temperature})</h2>
        <sup>°C</sup>
      </div>
    );
  } else {
    axios.get(apiUrl).then(showReport);
    return (
      <div>
        <div className="Header">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Wed 27 July 2022 10:37</h4>
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
                  className="search-button"
                  title="Search Location"
                />
                <button className="location-button" title="Current location">
                  <span role="img" aria-label="location">
                    📍
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <h2>Loading</h2>
      </div>
    );
  }
}
