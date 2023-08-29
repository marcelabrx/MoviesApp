import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from 'react-router-dom';
export default function DetailsMovies() {
  const theme = useTheme();

  return (
    <div className='backgroundCard'>
            
    <Card className='detailsCard' 
    sx={{backgroundColor:"transparent"}}>
    <CardMedia
        component="img"
        sx={{ height: 250, width: 200 }}
        image="bannerGot.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{ color:"white"}}>
            Titulo de la pelicula
            <Typography variant="subtitle1" color="text.secondary" component="span" sx={{color:"white", marginLeft:"2px"}}>
            2020
          </Typography>
          </Typography>
          <Link sx={{ textDecoration:"none"}} >
          <PlayCircleOutlineIcon sx={{color:"white"}}/> 
          <Box sx={{color:"white"}} component="span">Ver trailer</Box>
          </Link>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Typography component="div" variant="h5" sx={{ color:"white"}} >
            descripcion
            <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, cupiditate?
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Card> 
    </div>
  );
}