import React from "react";

import "./search-bar.css";

import { FormControl } from "react-bootstrap";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <div className="searchBar">
      <FormControl
        autoCapitalize="none"
        autoCorrect="false"
        className="input"
        placeholder="Search"
        defaultValue={term}
        onChange={onTermChange}
        onKeyPress={(target) => {
          if (target.charCode === 13) {
            onTermSubmit();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
