import React, { useState } from "react";

function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit("fahr");
  }

  function fahr() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span id="temperature"> {Math.round(props.celsius)}</span>
        <span id="units">
           °C |
          <a href="/" onClick={showFahr} id="fahr-link">
            {" "}
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span id="temperature"> {Math.round(fahr())}</span>
        <span id="units">
          <a href="/" onClick={showCelsius} id="celsius-link">
            {" "}
            °C |{" "}
          </a>
          °F
        </span>
      </div>
    );
  }
}

export default WeatherTemperature;
