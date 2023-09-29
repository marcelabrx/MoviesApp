import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeMovies from "./components/views/homecarousels/HomeMovies"
import LastMovies from "./components/views/LastMovies";
import PopularMovies from "./components/views/PopularMovies";
import ErrorComponent from "./components/errorComponent/ErrorComponent"
import FavoritesContainer from "./components/views/favorites/FavoritesContainer"
import DetailsMovies from "./components/views/detailsMovies/DetailsMovies"
import FavoriteContextProvider from "./context/FavoriteContext";
import SearchMoviesContainer from "./components/views/search/SearchMoviesContainer";
import "./App.css";

function App() {
 
  return( 
       <BrowserRouter>
       <FavoriteContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <HomeMovies/> }></Route> 
          <Route path="/lastMovies" element={<LastMovies />}></Route>
          <Route path="/popularMovies" element={<PopularMovies />}></Route>
          <Route path="/detailsMovies/:movieId" element={<DetailsMovies />}></Route>
          <Route path="/searchMovies" element={<SearchMoviesContainer />}></Route> 
          <Route path="/favoritesMovies" element={<FavoritesContainer />}></Route> 
          <Route path="/*" element={<ErrorComponent />}></Route>
        </Routes>
        </FavoriteContextProvider>
      </BrowserRouter> 
  )
}

export default App;
