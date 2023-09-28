import { useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";

const useMovies = () => {

  const [movies, setMovies] = useState({});
  
  const [totalPages, setTotalPages] = useState()

  const fetchMovies = (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          setMovies(data)
          setTotalPages(data.total_pages)
        } )
        .catch(err => console.error(err))
  };

  return { movies, fetchMovies, totalPages };

};

export default useMovies;
