import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from "./components/Header";
import HomeMovies from "./components/HomeMovies"
import LastMovies from "./components/LastMovies";
import PopularMovies from "./components/PopularMovies";
import SearchMovies from "./components/SearchMovies"
import DetailsMovies from "./components/DetailsMovies";
import ErrorComponent from "./components/ErrorComponent"
import Favorites from "./components/Favorites";
import "./App.css";



const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#ab526b', // Color principal
    },
    secondary: {
      main: '#FFC107', // Color secundario
    },
    background: {
      default: '#FFFFFF', // Color de fondo predeterminado
      paper: '#F5F5F5', // Color del papel (fondos de componentes)
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#ab526b', // Color principal
    },
    secondary: {
      main: '#FFC107', // Color secundario
    },
    background: {
      default: '#121212', // Color de fondo predeterminado
      paper: '#1E1E1E', // Color del papel (fondos de componentes)
    },
    type: 'dark', // Indica que este es un tema oscuro
  },
});


function App() {
 
  return( 
    // <ThemeProvider theme={theme}>
       <BrowserRouter>
        <Header />
        {/* <HomeMovies/> */}
        <Routes>
        <Route path='/' element={ <HomeMovies/> }></Route> 
          <Route path="/lastMovies" element={<LastMovies />}></Route>
          <Route path="/popularMovies" element={<PopularMovies />}></Route>
          <Route path="/detailsMovies" element={<DetailsMovies />}></Route>
          <Route path="/searchMovies" element={<SearchMovies />}></Route> 
          <Route path="/favorites" element={<Favorites />}></Route> 
          <Route path="/*" element={<ErrorComponent />}></Route>
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter> 
      // </ThemeProvider>
  )
}

export default App;
