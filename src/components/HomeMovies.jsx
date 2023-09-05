// export default function HomeMovies() {
//   return (

//     // <div className="content-camera">
//     //     <div className="film-camera">
//     //         <div className="film-camera-body">
//     //             <div className="film-camera-lens"></div>
//     //             <p className="film-camera-lens2"></p>
//     //             <div className="film-camera-handle"></div>
//     //         </div>
//     //         <div className="triangle"></div>
//     //         <div className="light"></div>
//     //     </div>
//     // </div>

//   )
// }
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { border } from "@mui/system";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";

function HomeMovies() {
  const [newMovies, setNewMovies] = useState([]);

  const [popularMovies, setPopularMovies] = useState([]);

  const [topRated, setTopRated] = useState([]);
  const apiUrl = "https://api.themoviedb.org/3/movie/popular";
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => setNewMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    fetch(`${apiUrl}?language=es-Arg-US&page=1`, options)
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => setTopRated(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          dynamicHeight={false}
          className="carrousel-container"
        >
          {newMovies &&
            newMovies.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />

                <div
                  className="legend"
                  style={{
                    backgroundColor: "#ebeb",
                    color: "black",
                    padding: "10px",
                    fontSize: "30px",
                  }}
                >
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <button className="see-more">See more...</button>
                </div>
              </div>
            ))}
        </Carousel>
      </div>

      <Container
        sx={{
          marginTop: "20%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ border: "solid", borderColor: "#ab526b", marginRight: "15px" }}
        >
          <Table>
            <TableHead sx={{ bgcolor: "#ab526b", fontFamily: "Luckiest Guy" }}>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "Luckiest Guy",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    Popular Movies
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                width: "100%",
                maxWidth: "450px",
                bgcolor: "background.paper",
                justifyContent: "space-between",
              }}
            >
              {popularMovies &&
                popularMovies.map((movie) => (
                  <TableRow>
                    <TableCell>
                      <ListItem sx={{ justifyContent: "space-between" }}>
                        <ListItemAvatar>
                          <Avatar
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          />
                        </ListItemAvatar>
                        <Link href="#" underline="none">
                          <Typography
                            sx={{
                              fontSize: "20px",
                              color: "#666666",
                              fontWeight: 700,
                              textAlign: "start",
                            }}
                          >
                            {movie.title}
                          </Typography>
                        </Link>
                        <IconButton>
                          <PlayCircleFilledIcon
                            sx={{
                              bgcolor: "#4169E1",
                              color: "white",
                              marginInline: "5px",
                              borderRadius: "50%",
                              padding: "10px",
                            }}
                          />
                        </IconButton>
                      </ListItem>
                    </TableCell>
                  </TableRow>
                ))}
              {/* <TableRow> */}

              {/* <TableCell>
              <ListItem sx={{justifyContent:'space-between'}}>
                  <ListItemAvatar>
                    <Avatar alt="movie-app" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <Link href="#" underline="none">
                    <Typography sx={{fontSize: '20px', color: '#666666', fontWeight: 700, textAlign: 'start'}}>Brunch this weekend</Typography>
                  </Link>
                  <IconButton>
                    <PlayCircleFilledIcon sx={{bgcolor: '#4169E1', color: 'white', marginInline: '5px', borderRadius: '50%', padding: '10px' }}/>
                  </IconButton>
                </ListItem>
              </TableCell> */}
              {/* </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer
          component={Paper}
          sx={{ border: "solid", borderColor: "#ab526b" }}
        >
          <Table>
            <TableHead sx={{ bgcolor: "#ab526b" }}>
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "Luckiest Guy",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    Top-rated movies
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                width: "100%",
                maxWidth: "450px",
                bgcolor: "background.paper",
                justifyContent: "space-between",
              }}
            >
              {topRated &&
                topRated.map((movie) => (
                  <TableRow sx={{ height: 50 }}>
                    <TableCell>
                      <ListItem sx={{ justifyContent: "space-between" }}>
                        <ListItemAvatar>
                          <Avatar
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          />
                        </ListItemAvatar>
                        <Link href="#" underline="none">
                          <Typography
                            sx={{
                              fontSize: "20px",
                              color: "#666666",
                              fontWeight: 700,
                              textAlign: "start",
                            }}
                          >
                            {movie.title}
                          </Typography>
                        </Link>
                        <IconButton>
                          <PlayCircleFilledIcon
                            sx={{
                              bgcolor: "#4169E1",
                              color: "white",
                              marginInline: "5px",
                              borderRadius: "50%",
                              padding: "10px",
                            }}
                          />
                        </IconButton>
                      </ListItem>
                    </TableCell>
                  </TableRow>
                ))}
              {/* <TableRow sx={{height: 50 }}>
              <TableCell>
              <ListItem sx={{justifyContent:'space-between'}}>
                  <ListItemAvatar>
                    <Avatar alt="movie-app" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <Link href="#" underline="none">
                    <Typography sx={{fontSize: '20px', color: '#666666', fontWeight: 700, textAlign: 'start'}}>Brunch this weekend</Typography>
                  </Link>
                  <IconButton>
                    <PlayCircleFilledIcon sx={{bgcolor: '#4169E1', color: 'white', marginInline: '5px', borderRadius: '50%', padding: '10px' }}/>
                  </IconButton>
                </ListItem>
              </TableCell>
            </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default HomeMovies;
