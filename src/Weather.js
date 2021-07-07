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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Please enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
      <h3>{temp}</h3>
    </form>
  );
}

export default Weather;
