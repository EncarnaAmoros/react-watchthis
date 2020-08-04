import React, { useState } from "react";

import "./movies.css";
import MovieItem from "./movie/movie-item";
import MovieResume from "./movie-resume/movie-resume";

export default ({ busquedaActiva, results }) => {
  const [isMovieResumeOpen, setIsMovieResumeOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  const movieResumeHandler = (id) => {
    if (movieSelected === null) {
      setIsMovieResumeOpen(true);
      setMovieSelected(results.filter((movie) => movie.id === id)[0]);
    } else if (movieSelected.id !== id) {
      setMovieSelected(results.filter((movie) => movie.id === id)[0]);
    } else {
      setIsMovieResumeOpen(false);
      setMovieSelected(null);
    }
  };

  let title = null;
  if (busquedaActiva) {
    title = <p className="title">RESULTADOS DE LA BÚSQUEDA</p>;
  } else {
    title = <p className="title">POPULARES</p>;
  }

  const movieList = results.map((item) => {
    return (
      <MovieItem
        movie={item}
        key={item.id.toString()}
        movieResumeHandler={movieResumeHandler}
      />
    );
  });

  let movieResume = null;
  if (isMovieResumeOpen === true) {
    movieResume = (
      <MovieResume movie={movieSelected} hideMovieResume={movieResumeHandler} />
    );
  } else {
    movieResume = null;
  }

  return (
    <div className="moviesListContainer">
      {title}
      <hr className="underlined" />
      <div className="moviesList">{movieList}</div>
      {movieResume}
    </div>
  );
};
