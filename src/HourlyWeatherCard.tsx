import React from "react";
import moment from "moment";
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy } from "react-icons/wi";
import "../styles/Weather.css";

interface HourlyWeatherCardProps {
  weatherData: {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
    dt: number;
  };
  showTime: boolean;
}

const getWeatherIcon = (weatherDescription: string) => {
  switch (weatherDescription) {
    case "Clear":
      return <WiDaySunny />;
    case "Rain":
      return <WiRain />;
    case "Clouds":
      return <WiCloudy />;
    default:
      return <WiDayCloudy />;
  }
};

const HourlyWeatherCard: React.FC<HourlyWeatherCardProps> = ({
  weatherData,
  showTime,
}) => {
  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        {showTime && (
          <div className="time-info">
            {moment.unix(weatherData.dt).format("HH:mm")}
          </div>
        )}
        <div className="icon">{getWeatherIcon(weather[0].main)}</div>
        <div className="temperature hourly-temperature">
          {Math.round(main.temp)}°C
        </div>
      </div>
      <div className="weather-clouds">
        <div className="clouds">{weather[0].description}</div>
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
