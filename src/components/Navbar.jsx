import { useEffect, useState } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

import "../styles/navbar.css";

import menu from "../data/menu";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const cambiarColor = () => {
            setScroll(window.scrollY > 70);
        };

        window.addEventListener("scroll", cambiarColor);

        return () => window.removeEventListener("scroll", cambiarColor);
    }, []);

    return (
        <header className={scroll ? "header active" : "header"}>
            <div className="container navbar">

                <div className="logo">

                    <FaLeaf />

                    <h2>EcoTravel</h2>

                </div>

                <nav className={menuOpen ? "nav active" : "nav"}>
                    {menu.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.nombre}
                        </a>
                    ))}
                </nav>

                <div
                    className="menu-mobile"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </header>
    );
}

export default Navbar;