import { useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";

const useMovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState({});

  const fetchMovieDetails = (movieId) => {
    const options = {
        method: 'GET',
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => setDetailsMovie(response))
        .catch(err => console.error(err))
  };

  return { detailsMovie, fetchMovieDetails };
};

export default useMovieDetails;
