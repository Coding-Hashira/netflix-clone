import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Components/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({
  title,
  fetchUrl,
  isLarge = false,
  trailerUrl,
  setTrailerUrl,
  movieID,
  setMovieID,
}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (movieID !== movie.id) {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_title ||
          movie?.original_name
      )
        .then((url) => {
          console.log(url);

          let slug = url?.lastIndexOf("=");

          let result = url?.slice(slug + 1);

          console.log(result);

          setTrailerUrl(result);
          setMovieID(movie.id);
        })
        .catch((err) => console.log(err));
    } else {
      setTrailerUrl("");
      setMovieID("");
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="posters">
        {isLarge
          ? movies.map((movie) => (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className="lPoster"
                src={baseUrl.concat(movie.poster_path)}
                alt={movie.name}
              />
            ))
          : movies.map((movie) => (
              <div className="posterDiv" key={movie.id}>
                <img
                  onClick={() => handleClick(movie)}
                  className="poster"
                  src={baseUrl.concat(movie.backdrop_path)}
                  alt={movie.name}
                />
                <div className="movieName">
                  <span className="name">
                    {movie.name ? movie.name : movie.title}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Row;
