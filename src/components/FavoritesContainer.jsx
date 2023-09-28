import Footer from './footer/Footer';
import { useContext } from 'react';
import {FavoriteContext} from '../context/FavoriteContext';
import FavoritesCard from './FavoritesCard';


export default function FavoritesContainer(){
  const { favoritesMovies } = useContext(FavoriteContext)
    return (

      <div style={{width:"100%", height:"100%", paddingTop:"2em"}}>
      <h1 style={{margin:"0px", padding:"20px", marginBottom:"1em",  fontSize: '50px', textAlign: "center", color: "#bca297", fontFamily: "Luckiest Guy", borderBottom: "solid", borderTop: "solid"}}>Favorites Movies</h1>
      <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
      {favoritesMovies.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {favoritesMovies.map((movie, id) => (
            <FavoritesCard key={id} movie={movie} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '24px', color: '#ff0000' }}>No favorite movies found.</p>
      )}
      </div>
      <Footer/>
    </div>
    )
}