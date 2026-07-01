import "../styles/footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaLeaf,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer" id="footer">

            <div className="container footer-container"
                data-aos="fade-up">

                {/* Columna 1 */}

                <div className="footer-column">

                    <div className="footer-logo">

                        <FaLeaf />

                        <h2>EcoTravel</h2>

                    </div>

                    <p>
                        Descubre los lugares más increíbles del Ecuador mediante
                        experiencias de turismo sostenible, naturaleza y aventura.
                    </p>

                </div>

                {/* Columna 2 */}

                <div className="footer-column">

                    <h3>Explorar</h3>

                    <ul>

                        <li>
                            <a href="#hero">Inicio</a>
                        </li>

                        <li>
                            <a href="#about">Nosotros</a>
                        </li>

                        <li>
                            <a href="#destinos">Destinos</a>
                        </li>

                        <li>
                            <a href="#servicios">Servicios</a>
                        </li>

                    </ul>

                </div>

                {/* Columna 3 */}

                <div className="footer-column">

                    <h3>Contacto</h3>

                    <p>

                        <FaMapMarkerAlt />

                        Guayaquil - Ecuador

                    </p>

                    <p>

                        <FaPhoneAlt />

                        +593988983854

                    </p>

                    <p>

                        <FaEnvelope />

                        info@ecotravel.com

                    </p>

                </div>

                {/* Columna 4 */}

                <div className="footer-column">

                    <h3>Síguenos</h3>

                    <div className="social-icons">

                        <a href="#">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaTwitter />
                        </a>

                        <a href="#">
                            <FaYoutube />
                        </a>

                    </div>

                </div>

            </div>

            <div className="footer-copy">

                © 2026 EcoTravel Ecuador | Todos los derechos reservados.

            </div>

        </footer>
    );
}

export default Footer;