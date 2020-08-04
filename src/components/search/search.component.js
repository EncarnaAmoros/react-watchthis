import React, { useState } from "react";

import "./search.css";
import SearchBar from "./search-bar/search-bar";
import { useGetMovies } from "./search.hook";
import Movies from "../movies/movies";
import Spinner from "../Spinner/spinner";
import AuxComponent from "../../hoc/aux-component";
import Modal from "../modal/modal";

export const Search = (props) => {
  const [term, setTerm] = useState("");
  const [getSearchMovies, results, activeSearch, loading, error] = useGetMovies(
    term
  );

  let resultView = null;
  if (loading === true) {
    resultView = <Spinner></Spinner>;
  } else {
    resultView = (
      <AuxComponent>
        <p className="resultsCount">{results.length} results</p>
        <Movies busquedaActiva={activeSearch} results={results} />
        <Modal title="Error" message={error} />
      </AuxComponent>
    );
  }

  //console.log("Vemos que valor tendría");
  //console.log(showModal);

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
