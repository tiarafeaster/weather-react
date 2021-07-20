import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemp()}</span>{" "}
        <span className="forecast-temperature-min">{minTemp()}</span>{" "}
      </div>
    </div>
  );
}

export default WeatherForecastDay;
