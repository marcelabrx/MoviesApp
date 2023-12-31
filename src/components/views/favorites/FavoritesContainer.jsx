import Footer from '../../footer/Footer';
import { useContext, useState, useEffect } from 'react';
import {FavoriteContext} from '../../../context/FavoriteContext';
import FavoritesCard from './FavoritesCard';
import notSearchMovie from '../../../assets/notSearchMovie.svg'
import LoaderMovies from "../../loader/LoaderMovies"


export default function FavoritesContainer(){

  const [loading, setLoading]= useState(true)
  const { favoritesMovies } = useContext(FavoriteContext)
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimeout);
  }, []); 

  return (
    <>
      {loading ? (
        <LoaderMovies />
      ) : (
        <div style={{ width: "100%", height: "100%", paddingTop: "2em" }}>
          <h1 style={{ margin: "0px", padding: "20px", marginBottom: "1em", fontSize: '50px', textAlign: "center", color: "#bca297", fontFamily: "Luckiest Guy", borderBottom: "solid", borderTop: "solid" }}>Favorites Movies</h1>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {favoritesMovies.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {favoritesMovies.map((movie, id) => (
                  <FavoritesCard key={id} movie={movie} />
                ))}
              </div>
            ) : (
              <div>
                <img src={notSearchMovie} alt="No favorite movies" />
                <p style={{ textAlign: 'center', fontSize: '24px', color: '#bca297', fontFamily: 'Luckiest Guy', marginTop: '20px' }}>No favorite movies found</p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}