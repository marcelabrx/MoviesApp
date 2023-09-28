import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/Star';
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";

export default function searchMovies() {
  return (
    <div style={{width:"100%", height:"100%", paddingTop:"2em"}}>
      <h1 style={{margin:"0px", padding:"20px", marginBottom:"1em",  fontSize: '50px', textAlign: "center", color: "#bca297", fontFamily: "Luckiest Guy", borderBottom: "solid", borderTop: "solid"}}>Nombre de la pelicula</h1>
      <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
        {/* {popularMovies && popularMovies.map(movie => ( */}
          <Card 
          // key={movie.id} 
          sx={{marginX: "4px", marginBottom:"1em",  backgroundColor:"#f4ebc3" }}>
            <CardActionArea sx={{width:"260px"}}>
              <CardMedia
                component="img"
                // src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                // alt={movie.title}
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ab526b", textAlign:"center", height:"80px", marginTop:"1em"}}>
                  {/* {movie.title} */}
                </Typography>
                <CardContent sx={{width:"100%" ,display:"flex", alignItems:"center", justifyContent:"center", borderTop:"#ab526b solid 2px", height:"20px"}}>
                  <Stack spacing={2} direction="row" sx={{marginTop:"15px"}}>
                  <Link >
                  <Button variant="contained" size="small" sx={{backgroundColor:"#ab526b"}}>
                  <RemoveRedEyeOutlinedIcon className='bg-menu' sx={{color: "#c7ede8", fontSize:"2rem"}} />
                  </Button>
                  </Link>
                  <Button variant="contained" size="small" sx={{backgroundColor:"#ab526b"}}>
                  <StarBorderIcon className='bg-menu' sx={{ color:"#e6d839", fontSize:"2rem" }} />
                  </Button>
                  </Stack>
                  </CardContent>
              </CardContent>
            </CardActionArea>
          </Card>
        {/* ))} */}
      </div>
      <Footer/>
    </div>
  );
}

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';

// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));

//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
// }));

// function SearchMovies() {
//     return (
//         <Search>
//             <SearchIconWrapper>
//             <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//             placeholder="Search…"
//             inputProps={{ 'aria-label': 'search' }}
//             />
//         </Search>
//     )
// }

// export default SearchMovies
