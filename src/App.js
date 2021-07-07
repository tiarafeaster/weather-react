import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App - React Version pt.1</h1>
        <Weather />
        <h5>
          This project is open source and was coded by{" "}
          <a
            href="https://github.com/tiarafeaster/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            ✊🏾 Tiara Feaster 🏳️‍🌈{" "}
          </a>
        </h5>
      </header>
    </div>
  );
}

export default App;
