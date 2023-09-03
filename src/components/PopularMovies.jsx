import * as React from 'react';
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';



export default function PopularMovies() {

const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmIzODE5Ybca297YzFhNmQ5MmZmODJiM2Y0MWExY2ZkOSIsInN1YiI6IjY0ZWNjZDVjZTJiY2E4MDEzOWFjZDBmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.osVrC574RRN3DgJYM6opxTk70FIZkpL8ArggZYLYAH4'
      }
    };
  
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#bca297" }}>Popular Movies</h1>
      <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
        {popularMovies.map(movie => (
          <Card key={movie.id} sx={{ maxWidth: 250, marginX: "2px", marginBottom:"20px",maxHeight:"450px",  display:"flex", justifyContent:"center" }}>
            <CardActionArea sx={{height:"350px"}}>
              <CardMedia
                component="img"
                // height={280}
                
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                sx={{
                  // height:"220px"
                }}
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f4ebc3" }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ab526b" }}>
                  {movie.title}
                </Typography>
                <Link component="div">
                  <RemoveRedEyeOutlinedIcon className='bg-menu' sx={{ color: "#5391f5" }} />
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );




}