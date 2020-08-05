import React, { useState, useEffect } from "react";
import { getMovies, getPopularMovies } from "./search.api";
import { ModalContext } from "../../context/ModalContext";

export const useGetMovies = (term) => {
  const [results, setResults] = useState([]);
  const [busquedaActiva, setActiveSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  const { showModal } = React.useContext(ModalContext);
  const { setErrorMessage } = React.useContext(ModalContext);

  const setError = React.useCallback(() => {
    setErrorMessage(
      "Error al obtener los datos. Revise su conexión de Internet."
    );
    showModal();
  }, [setErrorMessage, showModal]);

  const getSearchMovies = () => {
    setLoading(true);
    console.log("Pedimos pelis por busqueda");
    getMovies(term)
      .then((movies) => {
        setActiveSearch(true);
        setResults(movies);
      })
      .catch((error) => {
        setError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (term === "") {
      console.log("Pedimos pelis populares");
      setActiveSearch(false);
      getPopularMovies(term)
        .then((movies) => {
          setResults(movies);
        })
        .catch((error) => {
          setError();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [term, setError]);

  return [getSearchMovies, results, busquedaActiva, loading];
};
