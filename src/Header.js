import React, { useState } from "react";
import Current from "./Current";
import axios from "axios";
import "./Header.css";

export default function Header() {
  const [ready, setReady] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="Header">
      <div className="d-flex justify-content-between">
        <div>
          <h4>Wed 27 July 2022 10:37 Batix</h4>
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
      <Current city="Tokyo" />
    </div>
  );
}
