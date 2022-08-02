import React, { useState } from "react";
import Timestamp from "./Timestamp";
import Current from "./Current";
import axios from "axios";
import "./Header.css";

export default function Header(props) {
  const [city, setCity] = useState(props.city);
  const [report, setReport] = useState({ ready: false });
  function getReport(response) {
    setReport({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      timestamp: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
    });
  }
  function searchGeolocation(position) {
    console.log(position.coords);
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
      <div>
        <div className="Header">
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
                  className="search-button"
                  title="Search Location"
                />
                <button
                  className="location-button"
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
        <Current report={report} />
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
