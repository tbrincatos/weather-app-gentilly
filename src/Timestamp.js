import React from "react";
import "./Timestamp.css";
export default function Timestamp(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[props.timestamp.getDay()];
  let date = props.timestamp.getDate();
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.timestamp.getMonth()];
  let year = props.timestamp.getFullYear();

  return (
    <div className="Timestamp">
      <h4>
        {day} {date} {month} {year}{" "}
      </h4>
    </div>
  );
}
