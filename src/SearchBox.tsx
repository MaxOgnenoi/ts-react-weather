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

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city.');
      }

      const data = await response.json();

      // Check if the API response contains a valid name property
      if (data.name && data.sys && data.sys.country) {
        // City exists, update the state
        setCity(`${data.name}, ${data.sys.country}`);
        setCityValue("");
        setError("");
      } else {
        // City doesn't exist, show an error message
        throw new Error(`City not found: ${city}`);
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
