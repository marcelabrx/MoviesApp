import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';



export default function PopularMovies() {
  return (
    <>
    <h1 style={{textAlign:"center", color:"#bca297"}}>Popular Movies</h1>
    <div style={{display:"flex"}}>
    <Card sx={{ maxWidth: 280, marginX:"2px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/vite.svg"
          alt="imagen película"
          sx={{  objectFit: "cover",
            }}
        />
        <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"#f4ebc3"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ab526b"}}>
            Título película
          </Typography>
          <Link component="div">
          <RemoveRedEyeOutlinedIcon className='bg-menu'  sx={{color:"#5391f5"}}/>
           </Link>        
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}