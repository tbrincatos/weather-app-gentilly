import React from "react";
import "./Current.css";
export default function Current(props) {
  return (
    <div className="Current">
      <h1>{props.city}</h1>
      <h4>Cloudy</h4>
      <h5>33km/h</h5>
      <h2>25</h2>
      <sup>°C</sup>
    </div>
  );
}
