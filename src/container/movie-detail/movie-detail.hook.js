import { useState, useEffect } from "react";

import { getMovie } from "./movie-detail.api";

export const useMovieDetail = (id) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getMovie(id)
      .then((movies) => {
        setMovie(movies);
      })
      .catch((error) => {
        setError("Error al obtener los datos. Revise su conexión de Internet.");
      }, []);
  });

  return [movie, error];
};
