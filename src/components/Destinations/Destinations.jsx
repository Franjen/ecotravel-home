import "../../styles/destinations.css";

import destinations from "../../data/destinations";

import CardDestination from "./CardDestination";

function Destinations() {
    return (
        <section className="destinations" id="destinos">

            <div className="container">

                <span className="section-tag">
                    DESTINOS DESTACADOS
                </span>

                <h2 className="title">
                    Explora los lugares más increíbles del Ecuador
                </h2>

                <p className="subtitle">
                    Descubre algunos de los destinos turísticos más representativos
                    del país y vive experiencias inolvidables.
                </p>

                <div className="destinations-grid">

                    {destinations.map((destination) => (

                        <CardDestination
                            key={destination.id}
                            image={destination.image}
                            title={destination.title}
                            description={destination.description}
                            latitude={destination.latitude}
                            longitude={destination.longitude}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Destinations;