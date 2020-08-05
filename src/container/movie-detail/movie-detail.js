import React from "react";
import Moment from "react-moment";

import "./movie-detail.css";
import { IMAGE_URL } from "../../api/urls";
import { useMovieDetail } from "./movie-detail.hook";
import Modal from "../../components/modal/modal";

export default (props) => {
  const [movie, error] = useMovieDetail(props.match.params.id);
  const url_image = IMAGE_URL.concat(movie["backdrop_path"]);

  console.log(movie);

  let image = null;
  if (movie["backdrop_path"] !== null) {
    image = <img className="image" src={url_image} alt={movie.title} />;
  } else {
    image = (
      <img
        className="image"
        src={require("../../assets/images/imageNotFound.png")}
        alt={movie.title}
      />
    );
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <div className="movie-info">
        {image}
        <div className="movie-text-info">
          <p>Rate: {movie.vote_average}</p>
          <p>{movie.overview}</p>

          <p className="release_date">
            Release date:{" "}
            <Moment format="DD/MM/YYYY">{movie.release_date}</Moment>
          </p>
        </div>
      </div>
      <Modal title="Error" message={error} />
    </div>
  );
};
