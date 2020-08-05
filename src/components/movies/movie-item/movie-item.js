import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

import "./movie-item.css";
import { IMAGE_URL } from "../../../api/urls";

export default ({ movie, movieResumeHandler }) => {
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
    <React.Fragment>
      <div className="movie-item">
        <Link to={"/movie-detail/" + movie.id} key={movie.id}>
          {image}
        </Link>

        <div className="movie-info">
          <p className="name">{movie.title}</p>
          <p className="vote">{movie.vote_average}</p>
          <ExpandMoreIcon
            className="icon-expand"
            onClick={() => movieResumeHandler(movie.id)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
