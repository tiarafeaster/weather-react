import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function showTemp(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl: "http://openweathermap.org/img/wn/50d@2x.png",
      date: "Wed 14, July",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather">
          <form className="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Please enter a city..."
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="row align-items-center">
            <div className="col-8 d-flex align-items-center" id="weather">
              <img
                id="icon"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />
              <div>
                <span id="temperature"> {weatherData.temperature}</span>
                <span id="units">
                  <a href="#" id="fahr-link">
                    {" "}
                    F
                  </a>{" "}
                  |
                  <a href="#" id="celsius-link">
                    {" "}
                    C{" "}
                  </a>
                </span>
              </div>
              <ul>
                <li>
                  {" "}
                  Humidity: <span id="humidity"> {weatherData.humidity}</span> %
                </li>
                <li>
                  {" "}
                  Wind: <span id="wind">{weatherData.wind}</span> mph
                </li>
              </ul>
            </div>
            <div className="col-4" id="city-name">
              <h3 className="city">{weatherData.city}</h3>
              <ul className="date-time">
                <li id="date">{weatherData.date}</li>
                <li id="description">{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5423fee45fccae4c3cd5d7b43daf88ad";
    let city = "Paris";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showTemp);
  }
  return "Loading...";
}

export default Weather;
