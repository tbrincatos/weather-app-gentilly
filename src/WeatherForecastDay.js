import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function returnDay() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="row ">
        <div className="col forecast-date">{returnDay()}</div>
        <div className="col forecast-temp">
          <strong className="forecast-temp-max">
            {Math.round(props.forecast.temp.max)}°
          </strong>
          <span className="forecast-temp-min">
            {" "}
            | {Math.round(props.forecast.temp.min)}°
          </span>
        </div>
        <div className="col forecast-icon">
          <WeatherIcon icon={props.forecast.weather[0].icon} size={25} />
        </div>
      </div>
    </div>
  );
}
