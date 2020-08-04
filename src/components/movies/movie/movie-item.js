import React from "react";

import "./movie-item.css";
import { IMAGE_URL } from "../../../api/urls";

export default ({ movie, movieResumeHandler }) => {
  const url_image = IMAGE_URL.concat(movie["backdrop_path"]);

  let image = null;
  if (movie["backdrop_path"] !== null) {
    image = (
      <img
        className="image"
        src={url_image}
        alt={movie.title}
        onClick={() => movieResumeHandler(movie.id)}
      />
    );
  } else {
    image = (
      <img
        className="image"
        src={require("../../../assets/images/imageNotFound.png")}
        alt={movie.title}
        onClick={() => movieResumeHandler(movie.id)}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="movie-item">
        {image}
        <div className="movie-info">
          <p className="name">{movie.title}</p>
          <p className="vote">{movie.vote_average}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
