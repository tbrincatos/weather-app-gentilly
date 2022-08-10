import React from "react";
import "./WeatherCurrentTemperature.css";
export default function WeatherCurrentTemperature(props) {
  {
    return (
      <div className="WeatherCurrentTemperature">
        <h2>{Math.round(props.celsiusTemperature)}</h2>
        <sup>°C</sup>
      </div>
    );
  }
}
