import * as React from 'react';
import { useState, useEffect } from 'react';
import { ACCESS_TOKEN } from '../../moviesAppConfig';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Footer from './footer/Footer';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';


export default function PopularMovies() {

 const [popularMovies, setPopularMovies] = useState([]);
 const {getFavoriteMovie, addFavoritesMovies, removeFavoritesMovies}= useContext(FavoriteContext)

 
const apiUrl = 'https://api.themoviedb.org/3/movie/popular'
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      }
    };
  
    fetch(`${apiUrl}?language=es-Arg-US&page=1`, options)

      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
      .catch(err => console.error(err));
  }, []);


  return (    
    <div style={{width:"100%", height:"auto", backgroundColor:"#f4ebc3", paddingTop:"2em"}}>
    <h1 style={{margin:"0px", padding:"20px", marginBottom:"1em",  fontSize: '50px', textAlign: "center", color: "#bca297", fontFamily: "Luckiest Guy", borderBottom: "solid", borderTop: "solid"}}>Popular Movies</h1>
    <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
      {popularMovies && popularMovies.map(movie => (
        <Card key={movie.id} sx={{marginX: "2px", marginBottom:"1em", }}>
          <CardActionArea sx={{width:"260px"}}>
            <CardMedia
              component="img"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ab526b", textAlign:"center", height:"80px", marginTop:"1em"}}>
                {movie.title}
              </Typography>
              <CardContent sx={{width:"100%" ,display:"flex", alignItems:"center", justifyContent:"center", borderTop:"#ab526b solid 2px", height:"20px"}}>
                <Stack spacing={2} direction="row" sx={{marginTop:"15px"}}>
                <Link >
                <Button variant="contained" size="small" sx={{backgroundColor:"#ab526b"}}>
                <RemoveRedEyeOutlinedIcon className='bg-menu' sx={{color: "#c7ede8", fontSize:"2rem"}} />
                </Button>
                </Link>
                <Button variant="contained" size="small" sx={{backgroundColor:"#ab526b"}}>
                {getFavoriteMovie(movie.id)? <StarIcon  className='bg-menu' sx={{ color:"#e6d839", fontSize:"2rem" }} onClick={()=> removeFavoritesMovies(movie)}/> : <StarBorderIcon className='bg-menu' sx={{ color:"#e6d839", fontSize:"2rem" }} onClick={()=> addFavoritesMovies(movie)} />}
                </Button>
                </Stack>
                </CardContent>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
    <Footer/>
  </div>
  );
}