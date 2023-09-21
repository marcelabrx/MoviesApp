import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../../moviesAppConfig";
import styles from './DetailsMovies.module.css'

export default function DetailsMovies() {
  const [detailsMovie, setDetailsMovie] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    fetch(`https://api.themoviedb.org/3/movie/69523`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.overview) {
          const overviewWords = data.overview.split(" ");
          data.overview = overviewWords.slice(0, 50).join(" ");
          if (overviewWords.length > 50) {
            data.overview += " ...";
          }
        }
        setDetailsMovie(data);
      })
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <div 
    style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${detailsMovie.poster_path})`,backgroundSize: 'cover', backgroundPosition: 'center',  height:"100vh"}}
    >

      <div className={styles.detailsCard} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundSize: 'cover', backgroundPosition: 'center', height:"100vh" }}>
        <section style={{ marginLeft: "10px", marginRight: '15px'}}>
          <img
            src={`https://image.tmdb.org/t/p/original${detailsMovie.backdrop_path}`}
            alt={detailsMovie.title}
            className={styles.imgCard}
          />
        </section>
        <section>
          <div className={styles.detailsTitle}>
            <h1>
              {detailsMovie.title} -
              <span style={{ fontSize: "20px", marginLeft: "10px", padding:"10px" }}>
                {new Date(detailsMovie.release_date).getFullYear()}
              </span>
            </h1>
            <Link
              to={`https://www.youtube.com/watch?v=${detailsMovie.video}`}
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
            <p style={{fontSize: '20px', marginTop: '10px', marginBottom: '10px'}}>{detailsMovie.overview}</p>
            <h3>Géneros</h3>
            <ul>
              {detailsMovie.genres &&
                detailsMovie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}
