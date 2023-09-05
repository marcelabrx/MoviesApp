import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ACCESS_TOKEN } from '../../moviesAppConfig';
import { useEffect, useState } from 'react';


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
    <h1 style={{ textAlign: "center", color: "#bca297" }}>Last Movies</h1>
    <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
      {lastMovies && lastMovies.map(movie => (
        <Card key={movie.id} sx={{marginX: "2px", marginBottom:"20px", }}>
          <CardActionArea sx={{width:"260px"}}>
            <CardMedia
              component="img"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
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
  </>
  );
}