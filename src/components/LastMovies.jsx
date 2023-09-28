import * as React from 'react';
import { useEffect, useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { FavoriteContext } from '../context/FavoriteContext';
import useMovies from '../customHooks/useMovies';

import Footer from './footer/Footer';
import PaginationMovies from './PaginationMovies';
import bannerMovies from '../assets/bannerMovies.svg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Button, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function LastMovies() {

  const { getFavoriteMovie, addFavoritesMovies, removeFavoritesMovies } = useContext(FavoriteContext)

  const { fetchMovies, movies, totalPages } = useMovies()

  const [ page, setPage ]  = useState(1)

  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`)
  }, [page])


  return (
    <div style={{width:"100%", height:"100%", paddingTop:"2em"}}>
    <h1 style={{margin:"0px", padding:"20px", marginBottom:"1em",  fontSize: '50px', textAlign: "center", color: "#bca297", fontFamily: "Luckiest Guy", borderBottom: "solid", borderTop: "solid"}}>Last Movies</h1>
    <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
      {movies.results && movies.results.map(movie => (
        <Card key={movie.id} 
              id={movie.id}
        sx={{marginX: "4px", marginBottom:"1em", backgroundColor: "#f4ebc3" }}>
          <CardActionArea sx={{width:"260px"}}>
            <CardMedia
              component="img"
              src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : bannerMovies }
              alt={movie.title}
              sx={{
                width: '100%',          
                height: '150px',          
                objectFit: 'cover',       
              }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: "#000", textAlign:"center", height:"80px", marginTop:"1em", fontFamily: 'Poppins', fontSize: '18px'}}>
                {movie.title}
              </Typography>
              <CardContent sx={{width:"100%" ,display:"flex", alignItems:"center", justifyContent:"center", borderTop:"#ab526b solid 2px", height:"20px"}}>
                <Stack spacing={2} direction="row" sx={{marginTop:"15px"}}>
                <Link to={`/detailsMovies/${movie.id}`}>
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
    
    <PaginationMovies page={page} setPage={setPage} totalPages={totalPages}/>
    <Footer/>
  </div>
  );
}