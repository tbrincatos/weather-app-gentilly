import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function getForecastReport(response) {
    console.log(response.data);
  }
  function getForecast() {
    const apiKey = `62f780f73f5ee00aa0f4d27f32e096c2`;
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(getForecastReport);
  }
  getForecast();
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
