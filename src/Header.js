import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <div className="d-flex justify-content-between">
        <div>
          <h4>Wed 27 July 2022 10:37</h4>
        </div>
        <div>
          <form>
            <input
              type="search"
              placeholder="Enter a city"
              className="search"
            />
            <input type="submit" value="🔍" className="search-button" />
            <button className="location-button">📍</button>
          </form>
        </div>
      </div>
    </div>
  );
}
