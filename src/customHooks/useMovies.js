import { useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";

const useMovies = () => {

  const [movies, setMovies] = useState({});
  
  const [totalPages, setTotalPages] = useState()

  const [loading, setLoading] = useState(true)


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
          setTimeout(() => {
            setLoading(false);
          }, 1500)
          
        } )
        .catch(err => console.error(err))
  };

  return { movies, fetchMovies, totalPages, loading };

};

export default useMovies;
