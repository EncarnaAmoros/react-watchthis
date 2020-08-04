import React from "react";
import { IMAGE_URL } from "../../../api/urls";

import "./movie-detail.css";

export default ({ movie }) => {
  const url_image = IMAGE_URL.concat(movie["backdrop_path"]);

  let image = null;
  if (movie["backdrop_path"] !== null) {
    image = <img className="image" src={url_image} alt={movie.title} />;
  } else {
    image = (
      <img
        className="image"
        src={require("../../../assets/images/imageNotFound.png")}
        alt={movie.title}
      />
    );
  }

  return (
    <div className="movieDetail">
      {image}
      <div className="movie-info">
        <p className="name">{movie.title}</p>
        <p className="vote">{movie.vote_average}</p>
      </div>
    </div>
  );
};
