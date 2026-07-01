import "../../styles/about.css";

import aboutImage from "../../assets/images/about.jpg";

import {
    FaLeaf,
    FaGlobeAmericas,
    FaUsers,
    FaAward,
} from "react-icons/fa";

function About() {
    return (
        <section className="about" id="about">

            <div className="container about-container">

                <div className="about-image">

                    <img
                        src={aboutImage}
                        alt="Turismo sostenible en Ecuador"
                    />

                </div>

                <div className="about-content">

                    <span className="section-tag">
                        SOBRE NOSOTROS
                    </span>

                    <h2>
                        Descubre Ecuador de una manera diferente
                    </h2>

                    <p>
                        EcoTravel Ecuador nace con el propósito de conectar a los viajeros
                        con los destinos naturales y culturales más representativos del
                        país, promoviendo un turismo responsable que contribuya a la
                        conservación del medio ambiente y al desarrollo de las comunidades
                        locales.
                    </p>

                    <div className="mission-vision">

                        <div>

                            <h3>Misión</h3>

                            <p>
                                Promover experiencias turísticas sostenibles que permitan
                                descubrir la riqueza natural y cultural del Ecuador.
                            </p>

                        </div>

                        <div>

                            <h3>Visión</h3>

                            <p>
                                Convertirnos en la plataforma digital referente del turismo
                                ecológico en Ecuador y Latinoamérica.
                            </p>

                        </div>

                    </div>

                    <div className="about-features">

                        <div className="feature">

                            <FaLeaf />

                            <span>Turismo sostenible</span>

                        </div>

                        <div className="feature">

                            <FaGlobeAmericas />

                            <span>Destinos únicos</span>

                        </div>

                        <div className="feature">

                            <FaUsers />

                            <span>Guías certificados</span>

                        </div>

                        <div className="feature">

                            <FaAward />

                            <span>Calidad garantizada</span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;