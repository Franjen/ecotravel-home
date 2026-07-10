import { useState } from "react";

import { useWeather } from "../../hooks/useWeather";

import WeatherCard from "../Weather/WeatherCard";

import DestinationModal from "../Modal/DestinationModal";

function CardDestination({

    image,

    title,

    description,

    latitude,

    longitude

}) {

    const [open, setOpen] = useState(false);

    const {

        weather,

        loading,

        error

    } = useWeather(latitude, longitude);

    const destination = {

        image,

        title,

        description,

        latitude,

        longitude

    };

    return (

        <>

            <div className="destination-card">

                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                />

                <div className="destination-content">

                    <h3>

                        {title}

                    </h3>

                    <p>

                        {description}

                    </p>

                    {

                        loading && <p>Consultando clima...</p>

                    }

                    {

                        error && <p>{error}</p>

                    }

                    {

                        weather &&

                        <WeatherCard

                            weather={weather}

                        />

                    }

                    <button

                        className="btn"

                        onClick={() => setOpen(true)}

                    >

                        Ver destino

                    </button>

                </div>

            </div>

            {

                open &&

                <DestinationModal

                    destination={destination}

                    weather={weather}

                    onClose={() => setOpen(false)}

                />

            }

        </>

    )

}

export default CardDestination;