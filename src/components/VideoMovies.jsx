import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ACCESS_TOKEN } from "../../moviesAppConfig";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";


export default function VideoMovies (){

  const { movieId } = useParams(); 
  const [showTrailer, setShowTrailer] = useState(false); 
  const [trailerKey, setTrailerKey] = useState("")

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
          }
        });
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de los trailers');
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

  return(
    <div>
  <PlayCircleIcon sx={{fontSize:"3em", backgroundColor:"#f4ebc3", 
                      borderRadius:"50%"
                      }} 
                      onClick={handlePlayClick} />
                          {showTrailer && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Trailer"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></iframe>
            )}
    </div>
  )


}


/* div style={{margin: auto}}>
  <PlayCircleIcon sx={{fontSize:"3em", backgroundColor:"#f4ebc3", 
  borderRadius:"50%"
  }} />
  </div>
} */
/* <Link onClick={handleVideoClick}
// className={styles.trailerView}
              // to={`https://www.youtube.com/watch?v=${movies.video}`}
            >
              <PlayCircleIcon sx={{fontSize:"3em", backgroundColor:"#f4ebc3", 
              borderRadius:"50%"
              }} />
            </Link>
            // )} */