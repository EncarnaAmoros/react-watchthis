import React, { useState } from "react";

import "./search.css";
import SearchBar from "../../components/search-bar/search-bar";
import { useGetMovies } from "./search.hook";
import Movies from "../../components/movies/movies";
import Spinner from "../../components/spinner/spinner";
import AuxComponent from "../../hoc/aux-component";
import Modal from "../../components/modal/modal";

export const Search = (props) => {
  const [term, setTerm] = useState("");
  const [getSearchMovies, results, activeSearch, loading] = useGetMovies(term);

  let resultView = null;
  if (loading === true) {
    resultView = <Spinner></Spinner>;
  } else {
    resultView = (
      <AuxComponent>
        <p className="resultsCount">{results.length} results</p>
        <Movies busquedaActiva={activeSearch} results={results} />
        <Modal />
      </AuxComponent>
    );
  }

  return (
    <div className="searchScreen">
      <SearchBar
        term={term}
        onTermChange={(event) => {
          setTerm(event.target.value);
        }}
        onTermSubmit={getSearchMovies}
      />
      {resultView}
    </div>
  );
};
