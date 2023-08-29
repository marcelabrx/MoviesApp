import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import HomeMovies from "./components/HomeMovies"
import LastMovies from "./components/LastMovies";
import PopularMovies from "./components/PopularMovies";
// import SearchMovies from "./components/SearchMovies"
import DetailsMovies from "./components/DetailsMovies";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={ <HomeMovies/> }>

          </Route> */}
          <Route path="/lastMovies" element={<LastMovies />}></Route>
          <Route path="/popularMovies" element={<PopularMovies />}></Route>
          <Route path="/detailsMovies" element={<DetailsMovies />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
