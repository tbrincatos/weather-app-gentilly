import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

export default function Header() {
  let [city, setCity] = useState(" ");
  function handleData(response) {
    console.log(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let cityInput = city;
    cityInput = cityInput.trim().toLowerCase();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=celsius&appid=$62f780f73f5ee00aa0f4d27f32e096c2`;
    if (cityInput) {
      axios.get(apiUrl).then(handleData);
    }
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  return (
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
            <input type="submit" value="🔍" className="search-button " />
            <button className="location-button">
              <span role="img" aria-label="location">
                📍
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
