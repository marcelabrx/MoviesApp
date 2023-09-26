
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as React from "react";

import PrevContainerHome from "./PrevContainerHome";
import LoaderMovies from "./loader/LoaderMovies";
import Footer from './footer/Footer';
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";
import useMovies from "./useMovies"

function HomeMovies() {

  const [newMovies, setNewMovies] = useState([]);
  const { detailsMovie, fetchMovieDetails } = useMovies();

  useEffect(() => {
    fetchMovieDetails("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1");
    // const options = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     Authorization: `Bearer ${ACCESS_TOKEN}`,
    //   },
    // };

    // fetch(
    //   "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((data) => setNewMovies(data.results))
    //   .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* <LoaderMovies/> */}
      
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={false}
        centerMode={true}
      >
        {detailsMovie.results &&
          detailsMovie.results.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />

              <div
                className="legend"
                style={{
                  backgroundColor: "#bca297",
                  color: "#fff",
                  padding: "10px",
                  fontSize: "15px",
                }}
              >
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <Link to={`/detailsMovies/${movie.id}`}>
                <button className="see-more">See more...</button>
                </Link>
              </div>
            </div>
          ))}
      </Carousel>
      <PrevContainerHome/>
      <Footer/>
      </div>
  );
}

export default HomeMovies;
