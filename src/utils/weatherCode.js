export const weatherDescription = (code) => {

    switch (code) {

        case 0:
            return "☀️ Despejado";

        case 1:
            return "🌤 Mayormente despejado";

        case 2:
            return "⛅ Parcialmente nublado";

        case 3:
            return "☁️ Nublado";

        case 45:
            return "🌫 Neblina";

        case 48:
            return "🌫 Neblina intensa";

        case 51:
            return "🌦 Llovizna";

        case 61:
            return "🌧 Lluvia";

        case 63:
            return "🌧 Lluvia moderada";

        case 65:
            return "🌧 Lluvia fuerte";

        case 71:
            return "❄ Nieve";

        case 80:
            return "🌦 Chubascos";

        case 95:
            return "⛈ Tormenta";

        default:
            return "Clima no disponible";

    }

};