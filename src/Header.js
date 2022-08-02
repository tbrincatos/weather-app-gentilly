import React, { useState } from "react";

import axios from "axios";
import "./Header.css";

export default function Header(props) {
  const [report, setReport] = useState({ ready: false });
  function getReport(response) {
    setReport({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    console.log(event.target.value);
  }
  if (report.ready) {
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
        <h4 className="text-capitalize">{report.description}</h4>
        <h5>{report.wind}km/h</h5>
        <h2>{Math.round(report.temperature)}</h2>
        <sup>°C</sup>
      </div>
    );
  } else {
    const apiKey = `62f780f73f5ee00aa0f4d27f32e096c2`;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(getReport);
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
