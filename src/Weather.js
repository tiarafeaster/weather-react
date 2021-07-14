import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function Weather() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState();
  let [temp, setTemp] = useState(null);

  function showTemp(response) {
    setTemp(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
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
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="sunny weather"
              />
              <div>
                <span id="temperature"> {temp} </span>
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
                <li id="date">Wed, 14 July</li>
                <li id="description">Clear Sky</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5423fee45fccae4c3cd5d7b43daf88ad";
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showTemp);
  }
  return "Loading...";
}

export default Weather;
