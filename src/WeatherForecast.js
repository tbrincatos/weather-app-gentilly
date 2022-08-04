import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);
  function getForecastReport(response) {
    setForecast(response.data.daily);
    setReady(true);
  }
  function getForecast() {
    const apiKey = `62f780f73f5ee00aa0f4d27f32e096c2`;
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let unit = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(getForecastReport);
  }
  if (ready) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay forecast={forecast[1]} />
      </div>
    );
  } else {
    getForecast();
    return null;
  }
}
