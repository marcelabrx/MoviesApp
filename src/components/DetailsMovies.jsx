import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";


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
    fetch(`https://api.themoviedb.org/3/movie/635910`, options)
      .then((response) => response.json())
      .then((data) => setDetailsMovie(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}`}
        alt=""
        className="backgroundCard"
      />
      <div className="detailsCard">
        <section style={{ marginRight: "20px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${detailsMovie.backdrop_path}`}
            alt={detailsMovie.title}
            width="100%"
            height="450px"
            className="imgCard"
          />
        </section>
        <section style={{ color: "white" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>
              {detailsMovie.title}
              <span style={{ fontSize: "14px" }}>2002</span>
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
            </Link>
          </div>
          <article>
            <h3>General</h3>
            <p>{detailsMovie.overview}</p>
          </article>
          <article>
            <h3>Géneros</h3>
            <ul>
              {detailsMovie.genres &&
                detailsMovie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
