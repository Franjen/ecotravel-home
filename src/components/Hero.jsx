import "../styles/hero.css";
import { FaMapMarkedAlt, FaUsers, FaLeaf } from "react-icons/fa";

function Hero() {
    return (
        <section className="hero" id="hero">

            <div className="overlay"></div>

            <div className="container hero-container">

                <div className="hero-content"
                    data-aos="fade-right">

                    <span className="hero-tag">
                        🌿 Turismo Responsable en Ecuador
                    </span>

                    <h1>
                        Explora la belleza natural del
                        <span> Ecuador</span>
                    </h1>

                    <p>
                        Vive experiencias inolvidables recorriendo playas, montañas,
                        volcanes, selvas y ciudades patrimoniales mientras contribuyes
                        al turismo sostenible.
                    </p>

                    <div className="hero-buttons">

                        <button className="btn">
                            Explorar Destinos
                        </button>

                        <button className="btn-outline">
                            Conocer Más
                        </button>

                    </div>

                </div>

                <div className="hero-cards"
                    data-aos="fade-left">

                    <div className="card">

                        <FaMapMarkedAlt />

                        <h2>150+</h2>

                        <p>Destinos</p>

                    </div>

                    <div className="card">

                        <FaUsers />

                        <h2>5000+</h2>

                        <p>Turistas felices</p>

                    </div>

                    <div className="card">

                        <FaLeaf />

                        <h2>100%</h2>

                        <p>Turismo sostenible</p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;