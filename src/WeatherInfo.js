import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      <div className="row align-items-center">
        <div className="col-8 d-flex align-items-center" id="weather">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <ul>
            <li>
              {" "}
              Humidity: <span id="humidity"> {props.data.humidity}</span> %
            </li>
            <li>
              {" "}
              Wind: <span id="wind">{props.data.wind}</span> mph
            </li>
          </ul>
        </div>
        <div className="col-4" id="city-name">
          <h3 className="city">{props.data.city}</h3>
          <ul className="date-time">
            <li id="date">
              <FormattedDate date={props.data.date} />
            </li>
            <li id="description">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
