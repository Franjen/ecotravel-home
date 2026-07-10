import "../../styles/services.css";
import { createElement } from "react";


function ServiceCard({

    icon,
    title,
    description

}) {

    return (

        <article
            className="service-card"
            data-aos="zoom-in"
        >

            <div className="service-icon">

                {createElement(icon)}

            </div>


            <h3>

                {title}

            </h3>


            <p>

                {description}

            </p>


        </article>

    );

}


export default ServiceCard;