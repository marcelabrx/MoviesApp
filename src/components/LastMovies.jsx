import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ACCESS_TOKEN } from '../../moviesAppConfig';
import { useEffect, useState } from 'react';
import Footer from './Footer';

export default function LastMovies() {

  const [lastMovies, setLastMovies] = useState([]);

  const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing'
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };
  
  fetch(`${apiUrl}?language=en-US&page=`, options)

    .then(response => response.json())
    .then(data => setLastMovies(data.results))
    .catch(err => console.error(err));

}, [])

  return (
    <>
    <h1 style={{ fontSize: '50px', textAlign: "center", color: "#bca297", fontFamily: "Luckiest Guy", borderBottom: "solid", borderTop: "solid"}}>Last Movies</h1>
    <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
      {lastMovies && lastMovies.map(movie => (
        <Card key={movie.id} sx={{marginX: "2px", marginBottom:"20px", }}>
          <CardActionArea sx={{width:"260px"}}>
          <StarIcon sx={{position:"absolute", left:"220px", top:"5px", fontSize:"2.5em", color:"yellow" }}/>
            <StarBorderIcon sx={{position:"absolute", left:"220px", top:"5px", fontSize:"2.5em", color:"yellow" }}/>
            <CardMedia
              component="img"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f4ebc3", height:"100px" }}>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ab526b", textAlign:"center" }}>
                {movie.title}
              </Typography>
              <Link component="div">
                <RemoveRedEyeOutlinedIcon className='bg-menu' sx={{ color: "#5391f5", position:"absolute", bottom:"20px"}} />
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
    <Footer/>
  </>
  );
}