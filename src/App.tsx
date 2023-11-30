import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
      <header>
        <h1>Max's Weather</h1>

        <div className="wrapper">
          <input
            type="checkbox"
            id="hide-checkbox"
            checked={isDarkMode}
            onChange={handleDarkModeChange}
          />
          <label htmlFor="hide-checkbox" className="toggle">
            <span className="toggle-button">
              <span className="crater crater-1"></span>
              <span className="crater crater-2"></span>
              <span className="crater crater-3"></span>
              <span className="crater crater-4"></span>
              <span className="crater crater-5"></span>
              <span className="crater crater-6"></span>
              <span className="crater crater-7"></span>
            </span>
            <span className="star star-1"></span>
            <span className="star star-2"></span>
            <span className="star star-3"></span>
            <span className="star star-4"></span>
            <span className="star star-5"></span>
            <span className="star star-6"></span>
            <span className="star star-7"></span>
            <span className="star star-8"></span>
          </label>
        </div>
      </header>
      <Weather />
    </div>
  );
}

export default App;
