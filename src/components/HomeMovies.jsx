import * as React from "react";

import CarouselPopularMovies from "./CarouselPopularMovies";
import CarouselTopRatedMovies from "./CarouselTopRatedMovies";
import CarouselBannerMovies from "./CarouselBannerMovies";
import Footer from './footer/Footer';

function HomeMovies() {

  return (
    <>
      <CarouselBannerMovies/>
      <CarouselPopularMovies/>
      <CarouselTopRatedMovies/>
      <Footer/>
    </>
  );
}

export default HomeMovies;
