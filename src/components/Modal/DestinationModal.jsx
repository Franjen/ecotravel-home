import "./DestinationModal.css";

import { weatherDescription } from "../../utils/weatherCode";

function DestinationModal({

    destination,

    weather,

    onClose

}) {

    if (!destination) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <button

                    className="close-btn"

                    onClick={onClose}

                >

                    ✕

                </button>

                <img
                    src={destination.image}
                    alt={destination.title}
                    loading="lazy"
                />

                <h2>

                    {destination.title}

                </h2>

                <p>

                    {destination.description}

                </p>

                {

                    weather && (

                        <>

                            <h3>

                                Clima actual

                            </h3>

                            <p>

                                {weatherDescription(weather.weather_code)}

                            </p>

                            <p>

                                🌡 {weather.temperature_2m} °C

                            </p>

                            <p>

                                💨 {weather.wind_speed_10m} km/h

                            </p>

                            <p>

                                💧 {weather.relative_humidity_2m} %

                            </p>

                        </>

                    )

                }

                <a

                    className="map-btn"

                    target="_blank"

                    href={`https://www.google.com/maps?q=${destination.latitude},${destination.longitude}`}

                >

                    🗺 Abrir en Google Maps

                </a>

            </div>

        </div>

    );

}

export default DestinationModal;