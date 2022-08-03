import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Current.css";
export default function Current(props) {
  return (
    <div className="Current">
      <h1>{props.report.city}</h1>
      <div>
        {" "}
        <h4 className="text-capitalize">
          <WeatherIcon icon={props.report.icon} size={20} />
          {props.report.description}
        </h4>
      </div>
      <h5>{props.report.wind}m/s</h5>
      <WeatherTemperature celsiusTemperature={props.report.temperature} />
    </div>
  );
}
