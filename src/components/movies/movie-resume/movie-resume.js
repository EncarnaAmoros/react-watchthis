import React, { useEffect, useState } from "react";

import { IMAGE_URL } from "../../../api/urls";
import { getUrlMovieById } from "../../../api/urls";
import "./movie-resume.css";

import CloseIcon from "@material-ui/icons/Close";
import Moment from "react-moment";
import Button from "react-bootstrap/Button";

const getMovie = (id) => {
  const url = getUrlMovieById(id);

  return fetch(url)
    .then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        console.log(data);
      } else {
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      throw error;
    });
};

export default ({ movie, hideMovieResume }) => {
  const [claseMovieResume, setClaseMovieResume] = useState("movie-resume");
  const url_image = IMAGE_URL.concat(movie["backdrop_path"]);

  useEffect(() => {
    setTimeout(function () {
      setClaseMovieResume("movie-resume movie-resume-animated");
    }, 50);
  }, []);

  let image = null;
  if (movie["backdrop_path"] !== null) {
    image = (
      <img
        className="image"
        src={url_image}
        alt={movie.title}
        onClick={() => getMovie(movie.id)}
      />
    );
  } else {
    image = (
      <img
        className="image"
        src={require("../../../assets/images/imageNotFound.png")}
        alt={movie.title}
        onClick={() => getMovie(movie.id)}
      />
    );
  }

  return (
    <div className={claseMovieResume}>
      <p className="name">{movie.title}</p>
      <CloseIcon
        className="icon-close"
        onClick={() => hideMovieResume(movie.id)}
      />
      <div className="movie-resume-info">
        {image}
        <div className="movie-info">
          <p className="vote">Score: {movie.vote_average}</p>
          <p className="overview">{movie.overview}</p>

          <p className="release_date">
            Release date:{" "}
            <Moment format="DD/MM/YYYY">{movie.release_date}</Moment>
          </p>
          <Button variant="light">Details</Button>
        </div>
      </div>
    </div>
  );
};
