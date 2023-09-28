
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

import {  Typography, Box } from "@mui/material";

import { Link } from 'react-router-dom';

import useMovies from '../customHooks/useMovies';

import { useEffect } from "react";

export default function CarouselPopularMovies() {

  const { movies, fetchMovies } = useMovies();

  useEffect (() => {
    fetchMovies("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
  }, []);


  return (
    <>
    <Box sx={{ marginTop: "50px", margin: "15px" }}>
      <Typography
        sx={{
          fontSize: '50px', textAlign: "left", color: "#bca297", fontFamily: "Luckiest Guy", borderBottom: "solid", borderTop: "solid", marginBottom: "10px", marginTop: "80px"
        }}
      >
        POPULAR MOVIES
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
      >
        {movies.results &&
          movies.results.map((movie) => (
            <SwiperSlide key={movie.id} style={{display:'flex', flexDirection: 'column'}}>
              <Link to={`/detailsMovies/${movie.id}`}>
                <img className=".swiper-slide img:hover"
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    borderRadius: 10,
                  }}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.name}
                />
              </Link>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  marginTop: "5px",
                  fontWeight: "bold",
                  background: "#bca297",
                  fontFamily: "Poppins",
                  width: "100%"
                }}
              >
                {movie.title}
              </Typography>
            </SwiperSlide>
          ))}

      </Swiper>
    </Box>
    </>
  );
}