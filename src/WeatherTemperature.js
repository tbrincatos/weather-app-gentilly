import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(props.celsiusTemperature)}</h2>
        <sup>
          °C |{" "}
          <a
            href="/"
            title="Show report in Fahrenheit"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </sup>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsiusTemperature * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(fahrenheitTemp)}</h2>
        <sup>
          <a href="/" title="Show report in Fahrenheit" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
          | °F
        </sup>
      </div>
    );
  }
}
