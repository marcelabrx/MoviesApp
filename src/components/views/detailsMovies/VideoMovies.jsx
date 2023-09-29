import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ACCESS_TOKEN } from "../../../../moviesAppConfig";
import styles from "./DetailsMovies.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function VideoMovies() {
  const { movieId } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la información de los trailers");
        }

        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setTrailerKey(data.results[0].key);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrailers();
  }, [movieId]);

  const handlePlayClick = () => {
    setShowTrailer(true);
  };

  const handleCloseClick = () => {
    setShowTrailer(false);
  };

  return (
    <div>
      <PlayCircleIcon
        className={styles.circleIconTrailer}
        sx={{ fontSize: "3em" }}
        onClick={handlePlayClick}
      />
      {showTrailer && (
        <div className={styles.showTrailerDiv}>
          <button onClick={handleCloseClick}>
            <CancelIcon
              className={styles.cancelIconTrailer}
              sx={{
                fontSize: "2em",
              }}
            />
          </button>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            allowFullScreen
            className={styles.iframeTrailer}
          ></iframe>
        </div>
      )}
    </div>
  );
}
