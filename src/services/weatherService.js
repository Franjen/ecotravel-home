const BASE_URL = "https://api.open-meteo.com/v1/forecast";

/*
==================================================
Servicio para consultar el clima desde Open-Meteo
==================================================
*/

export const getWeather = async (latitude, longitude) => {

    try {

        const url =
            `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("No fue posible obtener el clima.");

        }

        const data = await response.json();

        return data.current;

    } catch (error) {

        throw new Error(error.message);

    }

};