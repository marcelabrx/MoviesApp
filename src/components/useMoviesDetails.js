import { useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";

const useMovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState({});

  const fetchMovieDetails = (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(response => setDetailsMovie(response))
        .catch(err => console.error(err))
  };

  return { detailsMovie, fetchMovieDetails };

};
// `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
// const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing'
// useEffect(()=>{
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${ACCESS_TOKEN}`
//     }
//   };
  
//   fetch(`${apiUrl}?language=en-US&page=`, options)

//     .then(response => response.json())
//     .then(data => setLastMovies(data.results))
//     .catch(err => console.error(err));

// }, [])
export default useMovieDetails;
