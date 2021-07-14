import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function Weather() {
  let [city, setCity] = useState();
  let [temp, setTemp] = useState();

  function showTemp(response) {
    setTemp(
      <div>
        <h2>Here are your weather details for {city} </h2>
        <ul>
          <li> Temperature: {Math.round(response.data.main.temp)} ℃ </li>
          <li> Description: {response.data.weather[0].description} </li>
          <li>Humidity: {response.data.main.humidity} % </li>
          <li>Wind: {response.data.wind.speed} km/h</li>
          <li>
            {" "}
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt={response.data.weather[0].description}
            />
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5423fee45fccae4c3cd5d7b43daf88ad";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container">
      <div className="weather">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Please enter a city..."
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
              <h3>{temp}</h3>
            </div>
          </div>
        </form>
        <div className="row align-items-center">
          <div className="col-8 d=flex align-items-center" id="weather">
            <img
              id="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="sunny weather"
            />
            <div>
              <span id="temperature"> 80 </span>
              <span id="units">
                <a href="#" id="fahr-link">
                  {" "}
                  °F
                </a>{" "}
                |
                <a href="#" id="celsius-link">
                  {" "}
                  °C{" "}
                </a>
              </span>
            </div>
            <ul>
              <li>
                {" "}
                Humidity: <span id="humidity"></span> 40%
              </li>
              <li>
                {" "}
                Wind: <span id="wind"></span> 20 mph
              </li>
            </ul>
          </div>
          <div className="col-4" id="city-name">
            <h3 className="city">Orlando</h3>
            <ul className="date-time">
              <li id="date">Wednesday, 14 July</li>
              <li id="description">Clear Sky</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
