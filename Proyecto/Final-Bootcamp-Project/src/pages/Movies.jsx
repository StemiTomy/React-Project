import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

const Movies = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Función para obtener la lista de películas
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es`
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error('Error al obtener la lista de películas:', error);
      }
    };

    // Llamada a la función para cargar las películas al montar el componente
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h1>Listado de Películas Populares</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
