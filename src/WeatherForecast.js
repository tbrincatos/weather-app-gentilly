import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row ">
        <div className="col forecast-date">Thursday</div>
        <div className="col forecast-temp">
          <strong className="forecast-temp-max">20°</strong>
          <span className="forecast-temp-min"> | 15°</span>
        </div>
        <div className="col forecast-icon">
          <WeatherIcon icon="01d" size={20} />
        </div>
      </div>
    </div>
  );
}
