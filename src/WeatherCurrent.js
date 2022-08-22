import React from "react";

import "./WeatherCurrent.css";
export default function WeatherCurrent(props) {
  return (
    <div className="WeatherCurrent">
      <h1>{props.report.city}</h1>
      <div>
        {" "}
        <h4 className="text-capitalize">{props.report.description}</h4>
      </div>
      <h5>{props.report.wind} m/s</h5>
      <div>
        <h2>{Math.round(props.report.temperature)}</h2>
        <sup>°C</sup>
      </div>
    </div>
  );
}
