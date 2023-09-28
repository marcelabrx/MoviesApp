import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useContext } from "react";
import styles from './DetailsMovies.module.css'
import useMovieDetails from "../useMoviesDetails";
import { useParams } from "react-router-dom";
import { FavoriteContext } from '../../context/FavoriteContext';

export default function DetailsMovies() {
  const {getFavoriteMovie, addFavoritesMovies, removeFavoritesMovies}= useContext(FavoriteContext)
  const { movieId } = useParams(); 
  const { detailsMovie, fetchMovieDetails } = useMovieDetails();

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);
  
  return (
    <div className={styles.detailsBody}
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${detailsMovie.poster_path})`}}>
    <section className={styles.card}>
    <Button size="small" sx={{backgroundColor:"transparent"}}>
                  {getFavoriteMovie(detailsMovie.id)? <StarIcon sx={{ color:"#e6d839", fontSize:"2rem" }} onClick={()=> removeFavoritesMovies(detailsMovie)}/> : <StarBorderIcon sx={{ color:"#e6d839", fontSize:"2rem" }} onClick={()=> addFavoritesMovies(detailsMovie)} />}
                </Button>   
    <div className={styles.imgCard}
    style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/w500${detailsMovie.poster_path})`}}>
      </div>
      <Link className={styles.trailerView}
              to={`https://www.youtube.com/watch?v=${detailsMovie.video}`}
            >
              <PlayCircleIcon sx={{fontSize:"3em", backgroundColor:"#f4ebc3", 
              borderRadius:"50%"
              }} />
            </Link>
      <section className={styles.informationDetails}>
          <div className={styles.detailsTitle}>
            <h1>
              {detailsMovie.title} -
              <span>{new Date(detailsMovie.release_date).getFullYear()}
              </span>
            </h1>
          </div>
          <section>
            <h3 className={styles.detailsSubTitle}>General information</h3>
            <p>{detailsMovie.overview}</p>
            <h3 className={styles.detailsSubTitle}>Genres</h3>
            <ul style={{display:"flex", justifyContent:"space-evenly"}}>
              {detailsMovie.genres &&
                detailsMovie.genres.map((genre) => (
                  <li key={genre.id}>* {genre.name}</li>
                ))}
            </ul>
          </section>
        </section>
        </section>
      </div>
  );
}
