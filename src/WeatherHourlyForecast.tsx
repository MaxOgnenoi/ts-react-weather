// WeatherHourlyForecast.tsx
import React from "react";
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
            name?: string;
        }[];
    };
}



const WeatherHourlyForecast: React.FC<WeatherHourlyForecastProps> = ({
    hourlyForecastData,
}) => {

    const hourlyForecastList = hourlyForecastData.list.slice(0, 6);

    return (
        <div className="hourly-forecast-container">
            <div className="forecast-header">
                <h2>Hourly Forecast</h2>
            </div>
            <div className="hourly-forecast-cards">
                {hourlyForecastList.map((forecast) => (
                    <div className="hourly-time" key={forecast.dt}>
                        <HourlyWeatherCard weatherData={{ ...forecast, name: forecast.name || '' }} showTime />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherHourlyForecast;
