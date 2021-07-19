import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-date">Thursday</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">82</span>{" "}
            <span className="forecast-temperature-min">71</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
