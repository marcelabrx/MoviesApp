import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from "./components/Header";
import HomeMovies from "./components/HomeMovies"
import LastMovies from "./components/LastMovies";
import PopularMovies from "./components/PopularMovies";
import ErrorComponent from "./components/errorComponent/ErrorComponent"
import FavoritesContainer from "./components/FavoritesContainer"
import DetailsMovies from "./components/detailsMovies/DetailsMovies"
import FavoriteContextProvider from "./context/FavoriteContext";
import SearchMoviesContainer from "./components/SearchMoviesContainer";
import "./App.css";



function App() {
 
  return( 
    // <ThemeProvider theme={lightTheme}>
       <BrowserRouter>
       <FavoriteContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <HomeMovies/> }></Route> 
          <Route path="/lastMovies" element={<LastMovies />}></Route>
          <Route path="/popularMovies" element={<PopularMovies />}></Route>
          <Route path="/detailsMovies" element={<DetailsMovies />}></Route>
          <Route path="/searchMovies" element={<SearchMoviesContainer />}></Route> 
          <Route path="/favoritesMovies" element={<FavoritesContainer />}></Route> 
          <Route path="/*" element={<ErrorComponent />}></Route>
        </Routes>
        </FavoriteContextProvider>
      </BrowserRouter> 
      // </ThemeProvider>   
      )
}

export default App;
