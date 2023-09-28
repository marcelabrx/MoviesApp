import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PrevContainerHome from "./PrevContainerHome";
import LoaderMovies from "./loader/LoaderMovies";
import Footer from './footer/Footer';
import { Link } from "react-router-dom";

import { useEffect } from "react";

import useMovies from "../customHooks/useMovies"

function HomeMovies() {

  const { movies, fetchMovies, loading } = useMovies();

  useEffect (() => {
    fetchMovies("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1");
  }, []);

  return (
    <div style={{width:"100%", height:"100%", paddingTop:"2em"}}>
     {loading && <LoaderMovies/>}
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={false}
        centerMode={true}
      >
        {movies.results &&
          movies.results.map((movie) => (
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
