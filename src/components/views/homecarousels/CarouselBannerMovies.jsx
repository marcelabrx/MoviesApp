import * as React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Link } from "react-router-dom";

import { useEffect } from "react";

import useMovies from "../../../customHooks/useMovies"
import LoaderMovies from "../../loader/LoaderMovies";
import CarouselPopularMovies from "./CarouselPopularMovies";
import CarouselTopRatedMovies from "./CarouselTopRatedMovies";
export default function CarouselBannerMovies() {

    const { movies, fetchMovies, loading } = useMovies();

    useEffect (() => {
        fetchMovies("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1");
    }, []);

    return (
      <>
        {loading ? ( 
          <LoaderMovies loading={loading} />
        ) : (
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            dynamicHeight={false}
            centerMode={true}
          >
            {!movies.results ? null : movies.results.map((movie) => (
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
                  <h1 className="title-home">{movie.title}</h1>
                  <p className="text-home">{movie.overview}</p>
                  <Link to={`/detailsMovies/${movie.id}`}>
                    <button className="see-more">See more...</button>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        )} 
        <CarouselPopularMovies />
        <CarouselTopRatedMovies />
      </>
    );
}
