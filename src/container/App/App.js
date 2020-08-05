import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";
import { Search } from "../search";
import Header from "../../components/header/header";
import { ModalProvider } from "../../context/ModalContext";
import MovieDetail from "../movie-detail/movie-detail";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <ModalProvider>
          <Route path="/" exact component={Search} />
          <Route path="/movie-detail/:id" exact component={MovieDetail} />
        </ModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
