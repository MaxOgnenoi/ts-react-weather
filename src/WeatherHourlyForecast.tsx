import React from "react";
import moment from "moment";
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy } from "react-icons/wi";
import "./WeatherHourlyForecast.css";

interface WeatherHourlyForecastProps {
  hourlyForecastData: {
    list: {
      dt: number;
      main: {
        temp: number;
      };
      weather: {
        main: string;
      }[];
    }[];
  };
}

const getHourlyWeatherIcon = (weatherDescription: string) => {
  switch (weatherDescription) {
    case "Clear":
      return <WiDaySunny size={32} />;
    case "Rain":
      return <WiRain size={32} />;
    case "Clouds":
      return <WiCloudy size={32} />;
    default:
      return <WiDayCloudy size={32} />;
  }
};

const WeatherHourlyForecast: React.FC<WeatherHourlyForecastProps> = ({
  hourlyForecastData,
}) => {
  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <div className="hourly-forecast-list">
        {hourlyForecastData.list.map((hour) => (
          <div key={hour.dt} className="hourly-forecast-item">
            <div className="hour">{moment.unix(hour.dt).format("HH:mm")}</div>
            <div className="weather-icon">
              {getHourlyWeatherIcon(hour.weather[0].main)}
            </div>
            <div className="temp">{Math.round(hour.main.temp)}&#8451;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherHourlyForecast;
