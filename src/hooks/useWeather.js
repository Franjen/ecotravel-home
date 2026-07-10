import { useEffect, useState } from "react";

import { getWeather } from "../services/weatherService";

/*
============================================
Hook personalizado para consultar el clima
============================================
*/

export const useWeather = (latitude, longitude) => {

    const [weather, setWeather] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        if (!latitude || !longitude) return;

        const loadWeather = async () => {

            try {

                setLoading(true);

                setError(null);

                const currentWeather = await getWeather(latitude, longitude);

                setWeather(currentWeather);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        };

        loadWeather();

    }, [latitude, longitude]);

    return {

        weather,

        loading,

        error

    };

};