import React from "react";
import "./Current.css";
export default function Current(props) {
  return (
    <div className="Current">
      <h1>{props.report.city}</h1>
      <h4 className="text-capitalize">{props.report.description}</h4>
      <h5>{props.report.wind}km/h</h5>
      <h2>{Math.round(props.report.temperature)}</h2>
      <sup>°C</sup>
    </div>
  );
}
