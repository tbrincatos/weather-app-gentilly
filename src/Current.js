import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Current.css";
export default function Current(props) {
  return (
    <div className="Current">
      <h1>{props.report.city}</h1>
      <div>
        {" "}
        <h4 className="text-capitalize">
          <WeatherIcon icon={props.report.icon} />
          {props.report.description}
        </h4>
      </div>
      <h5>{props.report.wind}km/h</h5>
      <h2>{Math.round(props.report.temperature)}</h2>
      <sup>°C</sup>
    </div>
  );
}
