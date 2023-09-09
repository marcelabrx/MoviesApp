import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeMovies from "./components/HomeMovies"
import LastMovies from "./components/LastMovies";
import PopularMovies from "./components/PopularMovies";
// import SearchMovies from "./components/SearchMovies"
import DetailsMovies from "./components/DetailsMovies";
import ErrorComponent from "./components/ErrorComponent"

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', 
    },
    secondary: {
      main: '#ab526b', 
    },
  },
});

function App() {
 
  return( 
    <ThemeProvider theme={theme}>
       <BrowserRouter>
        <Header />
        <HomeMovies/>
        {/* <LastMovies/> */}
        <PopularMovies/>
        {/* <DetailsMovies/> */}
        <Routes>
          {/* <Route path='/' element={ <HomeMovies/> }>

          </Route> */}
          <Route path="/lastMovies" element={<LastMovies />}></Route>
          <Route path="/popularMovies" element={<PopularMovies />}></Route>
          <Route path="/detailsMovies" element={<DetailsMovies />}></Route>
          {/* <Route path="/*" element={<ErrorComponent />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter> 
      </ThemeProvider>
  )
}

export default App;
