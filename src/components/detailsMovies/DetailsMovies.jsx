import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useContext, useState } from "react";
import styles from './DetailsMovies.module.css'
import { ACCESS_TOKEN } from "../../../moviesAppConfig";
import useMovies from "../../customHooks/useMovies";
import { useParams } from "react-router-dom";
import { FavoriteContext } from '../../context/FavoriteContext';
import bannerMovies from '../../assets/bannerMovies.svg'
import LoaderMovies from "../loader/LoaderMovies"
import VideoMovies from "../VideoMovies";

export default function DetailsMovies() {
  const {getFavoriteMovie, addFavoritesMovies, removeFavoritesMovies}= useContext(FavoriteContext)
  const { movieId } = useParams(); 
  const { movies, fetchMovies, loading } = useMovies();


  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`);  
    // fetchTrailers() 
  }, [movieId]);
  

  return (
      <>
        {loading ? <LoaderMovies/> : (
            <div className={styles.detailsBody}
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movies.poster_path})`}}>
              
            <section className={styles.card}>
            <Button size="small" sx={{backgroundColor:"transparent"}}>
                          {getFavoriteMovie(movies.id)? <StarIcon sx={{ color:"#e6d839", fontSize:"2rem" }} onClick={() => removeFavoritesMovies(movies)}/> : <StarBorderIcon sx={{ color:"#e6d839", fontSize:"2rem" }} onClick={()=> addFavoritesMovies(movies)} />}
                        </Button>   
            <div className={styles.imgCard}
            style={{
              backgroundImage: movies.poster_path
                ? `url(https://image.tmdb.org/t/p/w500${movies.poster_path})`
                : `url(${bannerMovies})`       
            }}>
              </div>
            <VideoMovies/>
              <section className={styles.informationDetails}>
                  <div className={styles.detailsTitle}>
                    <h1>
                      {movies.title} -
                      <span>{new Date(movies.release_date).getFullYear()}
                      </span>
                    </h1>
                  </div>
                  <section>
                    <h3 className={styles.detailsSubTitle}>General information</h3>
                    <p>{movies.overview}</p>
                    <h3 className={styles.detailsSubTitle}>Genres</h3>
                    <ul style={{display:"flex", flexWrap: "wrap", justifyContent:"center"}}>
                      {movies.genres &&
                        movies.genres.map((genre) => (
                          <li key={genre.id} style={{marginRight:'5px'}}>- {genre.name}</li>
                        ))}
                    </ul>
                  </section>
                </section>
                </section>
              </div>
        )}
      </>
  );
}
