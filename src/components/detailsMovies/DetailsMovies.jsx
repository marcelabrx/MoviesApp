import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import styles from './DetailsMovies.module.css'
import useMovies from "../../customHooks/useMovies";
import { useParams } from "react-router-dom";

export default function DetailsMovies() {

  const { movieId } = useParams(); 
  const { movies, fetchMovies } = useMovies();

  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`);
  }, [movieId]);
  
  return (
    <div 
    style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${movies.poster_path})`,backgroundSize: 'cover', backgroundPosition: 'center',  height:"100vh"}}
    >

      <div className={styles.detailsCard} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundSize: 'cover', backgroundPosition: 'center', height:"100vh" }}>
        <section style={{ marginLeft: "10px", marginRight: '15px'}}>
          <img
            src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
            alt={movies.title}
            className={styles.imgCard}
          />
        </section>
        <section>
          <div className={styles.detailsTitle}>
            <h1>
              {movies.title} -
              <span style={{ fontSize: "20px", marginLeft: "10px", padding:"10px" }}>
                {new Date(movies.release_date).getFullYear()}
              </span>
            </h1>
            <Link
              to={`https://www.youtube.com/watch?v=${movies.video}`}
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
              }}
            >
              <PlayCircleOutlineIcon />
              Trailer
            </Link>
          </div>
          <section className={styles.detailsText}>
            <h3>General</h3>
            <p style={{fontSize: '20px', marginTop: '10px', marginBottom: '10px'}}>{movies.overview}</p>
            <h3>Géneros</h3>
            <ul>
              {movies.genres &&
                movies.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}
