import "../../styles/services.css";

import services from "../../data/services";

import ServiceCard from "./ServiceCard";

function Services() {

    return (

        <section
            className="services"
            id="servicios"
        >

            <div className="container">

                <span className="section-tag">

                    NUESTROS SERVICIOS

                </span>

                <h2 className="title">

                    Todo lo que necesitas para vivir una experiencia inolvidable

                </h2>

                <p className="subtitle">

                    Ofrecemos soluciones integrales para que disfrutes cada viaje con seguridad, comodidad y respeto por la naturaleza.

                </p>

                <div className="services-grid">

                    {

                        services.map(service => (

                            <ServiceCard

                                key={service.id}

                                icon={service.icon}

                                title={service.title}

                                description={service.description}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Services;