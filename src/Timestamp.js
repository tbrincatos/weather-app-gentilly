import React from "react";
import "./Timestamp.css";
export default function Timestamp(props) {
  console.log(props.timestamp);
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
  let hours = props.timestamp.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.timestamp.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="Timestamp">
      <h4>
        {day} {date} {month} {year} {hours}:{minutes}
      </h4>
    </div>
  );
}
