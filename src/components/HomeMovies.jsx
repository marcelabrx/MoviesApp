
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as React from "react";

import PrevContainerHome from "./PrevContainerHome";
import LoaderMovies from "./LoaderMovies";
import Footer from "./Footer";

import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";

function HomeMovies() {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => setNewMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* <LoaderMovies/> */}
      
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={false}
        centerMode={true}
        className="carrousel-container"
      >
        {newMovies &&
          newMovies.map((movie) => (
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
                <button className="see-more">See more...</button>
              </div>
            </div>
          ))}
      </Carousel>
      <PrevContainerHome/>
      <Footer/>
    </>
  );
}

export default HomeMovies;
