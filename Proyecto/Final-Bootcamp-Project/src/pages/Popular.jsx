import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Popular = ({ apiKey }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`
                );

                setMovies(response.data.results);
            } catch (error) {
                console.error('Error al obtener las películas populares:', error);
            }
        };

        fetchPopularMovies();
    }, []);

    return (
        <div>
            <h2>Popular Movies</h2>
            {/* Renderiza la lista de películas aquí */}
        </div>
    );
};

export default Popular;
