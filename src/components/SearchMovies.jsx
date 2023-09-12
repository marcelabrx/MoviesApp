import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";

export default function searchMovies() {
  return (
    <>
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          color: "#bca297",
          fontFamily: "Luckiest Guy",
          borderBottom: "solid",
          borderTop: "solid",
        }}
      >
        Letras que se escriben en el search
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* {lastMovies && lastMovies.map(movie => ( */}
        <Card sx={{ marginX: "2px", marginBottom: "20px" }}>
          <CardActionArea sx={{ width: "260px" }}>
            <CardMedia
              component="img"
              //   src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              //   alt={movie.title}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f4ebc3",
                height: "100px",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "#ab526b", textAlign: "center" }}
              >
                {/* {movie.title} */}
              </Typography>
              <Link component="div">
                <RemoveRedEyeOutlinedIcon
                  className="bg-menu"
                  sx={{
                    color: "#5391f5",
                    position: "absolute",
                    bottom: "20px",
                  }}
                />
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* ))} */}
      </div>
    </>
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
