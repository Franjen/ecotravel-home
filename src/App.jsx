import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Destinations from "./components/Destinations/Destinations";

function App() {

  useEffect(() => {

    AOS.init({

      duration: 1000,

      once: true,

      offset: 120

    });

  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Footer />
    </>
  );
}

export default App;