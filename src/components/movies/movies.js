import React, { useState } from "react";
import { scroller } from "react-scroll";

import "./movies.css";
import MovieItem from "./movie-item/movie-item";
import MovieResume from "./movie-resume/movie-resume";

export default ({ busquedaActiva, results }) => {
  const [isMovieResumeOpen, setIsMovieResumeOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  const movieResumeHandler = (id) => {
    if (movieSelected === null) {
      setIsMovieResumeOpen(true);
      setMovieSelected(results.filter((movie) => movie.id === id)[0]);
      scroller.scrollTo("movie-resume");
    } else if (movieSelected.id !== id) {
      setMovieSelected(results.filter((movie) => movie.id === id)[0]);
    } else {
      setIsMovieResumeOpen(false);
      setMovieSelected(null);
    }
  };

  let title = null;
  if (busquedaActiva) {
    title = <p className="title">SEARCH RESULTS</p>;
  } else {
    title = <p className="title">POPULAR</p>;
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
