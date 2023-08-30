import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
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
        sx={{ height: "100", width: "40%", backgroundSize: "cover", backgroundAttachment:"fixed" }}
        image="bannerGot.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5" sx={{ color:"white"}}>
            Titulo de la pelicula
            <Typography variant="subtitle1" color="text.secondary" component="span" sx={{color:"white", marginLeft:"2px"}}>
            2020
          </Typography>
          </Typography>
          <Link sx={{ textDecoration:"none"}} >
          <PlayCircleOutlineIcon sx={{color:"white"}}/> 
          <Box sx={{color:"white"}} component="span">Ver trailer</Box>
          </Link>
          <Box component="div" sx={{ flex: 1,  marginTop:"20px", display: 'flex', flexDirection: 'column',}}>
          <Typography component="div" variant="h5" sx={{ color:"white"}} >
            descripcion
            <Typography variant="body1" sx={{}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, cupiditate?
            </Typography>
          </Typography>
        </Box>
        </CardContent>
      
      </Box>
      
    </Card> 
    </div>
  );
}