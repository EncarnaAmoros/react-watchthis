import React, { useState, useEffect, useContext } from "react";
import { getMovies, getPopularMovies } from "./search.api";
import ModalContext from "../../context/ModalContext";

export const useGetMovies = (term) => {
  const [results, setResults] = useState([]);
  const [busquedaActiva, setActiveSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const modalContextRef = React.useRef(false);
  modalContextRef.current = useContext(ModalContext);

  useEffect(() => {
    if (error !== "") {
      modalContextRef.current.showModal();
    }
  }, [error]);

  useEffect(() => {
    if (term === "") {
      console.log("Pedimos pelis populares");
      setActiveSearch(false);
      getPopularMovies(term)
        .then((movies) => {
          setResults(movies);
          setLoading(false);
        })
        .catch((error) => {
          setError(
            "Error al obtener los datos. Revise su conexión de Internet."
          );
          setLoading(false);
        });
    }
  }, [term]);

  const getSearchMovies = () => {
    setLoading(true);
    console.log("Pedimos pelis por busqueda");
    getMovies(term)
      .then((movies) => {
        setActiveSearch(true);
        setResults(movies);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al obtener los datos. Revise su conexión de Internet.");
        setLoading(false);
      });
  };

  return [getSearchMovies, results, busquedaActiva, loading, error];
};
