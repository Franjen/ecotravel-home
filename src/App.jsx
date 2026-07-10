import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


import ScrollProgress from "./components/ScrollProgress/ScrollProgress";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import About from "./components/About";

import Destinations from "./components/Destinations/Destinations";

import Services from "./components/Services/Services";

import Footer from "./components/Footer";


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


      <ScrollProgress />


      <Navbar />


      <Hero />


      <About />


      <Destinations />


      <Services />


      <Footer />


    </>

  );

}


export default App;