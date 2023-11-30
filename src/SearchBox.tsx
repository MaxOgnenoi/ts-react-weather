import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Weather.css";

interface SearchBoxProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setCity }) => {
  const [city, setCityValue] = useState("");

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityValue(event.target.value);
  };

  const handleCitySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCity(city);
    setCityValue("");
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
    </form>
  );
};

export default SearchBox;
