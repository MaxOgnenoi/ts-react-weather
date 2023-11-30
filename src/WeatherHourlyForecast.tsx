// WeatherHourlyForecast.tsx
import React from "react";
import moment from "moment";
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy } from "react-icons/wi";
import HourlyWeatherCard from "./HourlyWeatherCard";
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
                description: string;
            }[];
            name?: string; // Adding optional name property
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
        <div className="hourly-forecast-container">
            <div className="forecast-header">
                <h2>Hourly Forecast</h2>
            </div>
            <div className="hourly-forecast-cards">
                {hourlyForecastData.list.map((forecast) => (
                    <div className="hourly-time" key={forecast.dt}>
                        <HourlyWeatherCard weatherData={{ ...forecast, name: forecast.name || '' }} showTime />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default WeatherHourlyForecast;
