import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App - React Version pt.1</h1>
        <Weather defaultCity="Paris" />
        <h5>
          This React project is{" "}
          <a
            href="https://github.com/tiarafeaster/weather-react"
            target="_blank"
            rel="noreferrer"
            title="link to github repo"
          >
            open source{" "}
          </a>{" "}
          and was coded by{" "}
          <a
            href="http://www.tiarajfeaster.com"
            target="_blank"
            rel="noreferrer"
            title="link to Tiara Feaster portfolio"
          >
            ✊🏾 Tiara Feaster 🏳️‍🌈{" "}
          </a>
        </h5>
      </header>
    </div>
  );
}

export default App;
