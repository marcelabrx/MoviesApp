import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from "./components/Header";
import HomeMovies from "./components/HomeMovies"
import LastMovies from "./components/LastMovies";
import PopularMovies from "./components/PopularMovies";
import SearchMovies from "./components/SearchMovies"
import ErrorComponent from "./components/errorComponent/ErrorComponent"
import Favorites from "./components/Favorites";
import DetailsMovies from "./components/detailsMovies/DetailsMovies"

import "./App.css";

function App() {
 
  return( 
    // <ThemeProvider theme={lightTheme}>
       <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={ <HomeMovies/> }></Route> 
          <Route path="/lastMovies" element={<LastMovies />}></Route>
          <Route path="/popularMovies" element={<PopularMovies />}></Route>
          <Route path="/detailsMovies/:movieId" element={<DetailsMovies />}></Route>
          <Route path="/searchMovies" element={<SearchMovies />}></Route> 
          <Route path="/favoritesMovies" element={<Favorites />}></Route> 
          <Route path="/*" element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter> 
      // </ThemeProvider>
  )
}

export default App;
