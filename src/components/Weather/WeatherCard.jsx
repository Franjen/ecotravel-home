import "../../styles/weather.css";

import { weatherDescription } from "../../utils/weatherCode";

function WeatherCard({ weather }) {

    if (!weather) return null;

    return (

        <div className="weather-card">

            <h4>🌦 Clima en tiempo real</h4>

            <div className="weather-item">

                <span>Estado</span>

                <strong>

                    {weatherDescription(weather.weather_code)}

                </strong>

            </div>

            <div className="weather-item">

                <span>🌡 Temperatura</span>

                <strong>

                    {weather.temperature_2m} °C

                </strong>

            </div>

            <div className="weather-item">

                <span>💨 Viento</span>

                <strong>

                    {weather.wind_speed_10m} km/h

                </strong>

            </div>

            <div className="weather-item">

                <span>💧 Humedad</span>

                <strong>

                    {weather.relative_humidity_2m} %

                </strong>

            </div>

        </div>

    );

}

export default WeatherCard;