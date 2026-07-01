function CardDestination({ image, title, description }) {
    return (
        <div className="destination-card">
            <img src={image} alt={title} />

            <div className="destination-content">
                <h3>{title}</h3>

                <p>{description}</p>

                <button className="btn">
                    Ver destino
                </button>
            </div>
        </div>
    );
}

export default CardDestination;