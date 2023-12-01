import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Weather.css";

interface SearchBoxProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setCity }) => {
  const [city, setCityValue] = useState("");
  const [error, setError] = useState("");

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityValue(event.target.value);
  };

  const handleCitySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Your OpenWeatherMap API key
    const apiKey = "YOUR_API_KEY";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city.');
      }

      const data = await response.json();

      // Check if the API response contains a valid name property
      if (data.name) {
        // City exists, update the state
        setCity(city);
        setCityValue("");
        setError("");
      } else {
        // City doesn't exist, show an error message
        throw new Error(`City not found: ${data.message}`);
      }
    } catch (error: any) {
      // Handle errors
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleCitySubmit} className="search-box">
      <FiSearch />
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Search for a city..."
      />
      <button className="searchBtn" type="submit">
        Search
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default SearchBox;
