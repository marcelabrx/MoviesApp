import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
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


import { useEffect } from "react";

import useMovies from "../customHooks/useMovies";


export default function PrevContainerHome() {

    const { movies, fetchMovies } = useMovies();

    useEffect (() => {
      fetchMovies("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
    }, []);
    
    useEffect (() => {
      fetchMovies("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1");
    }, []);

  return (
    <Container
        sx={{
          marginTop: "10%",
          justifyContent: "space-between",
          display: { xs: 'flex', md: 'flex' },
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        
        <TableContainer
          component={Paper}
          sx={{ border: "solid", borderColor: "#ab526b", marginRight: { md: "30px" }, maxHeight: { xs: '300px', md: '500px' }, marginBottom: '10px' }}
        >
          <Table sx={{}}>
            <TableHead sx={{bgcolor: "#ab526b", fontFamily: "Luckiest Guy"}}>
              <TableRow >
                <TableCell >
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
                bgcolor: "background.paper",
                justifyContent: "space-between",
              }}
            >
              {movies.results &&
                movies.results.map((movie) => (
                  <TableRow sx={{overflowY: 'scroll'}} key={movie.id}>
                    <TableCell>
                      <Link to={`/detailsMovies/${movie.id}`}>
                      <ListItem sx={{ justifyContent: "space-between", height: '25px' }}>
                        <ListItemAvatar>
                          <Avatar
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          />
                        </ListItemAvatar>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              color: "#666666",
                              fontWeight: 700,
                              textAlign: "start",
                            }}
                          >
                            {movie.title}
                          </Typography>
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
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer
          component={Paper}
          sx={{ border: "solid", borderColor: "#ab526b", maxHeight: { xs: '300px', md: '500px' }, marginBottom: '10px' }}
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
              {movies.results &&
                movies.results.map((movie) => (
                  <TableRow key={movie.id}>
                    <TableCell>
                    <Link to={`/detailsMovies/${movie.id}`}>
                      <ListItem sx={{ justifyContent: "space-between", height: '25px' }}>
                        <ListItemAvatar>
                          <Avatar
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          />
                        </ListItemAvatar>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              color: "#666666",
                              fontWeight: 700,
                              textAlign: "center",
                            }}
                          >
                            {movie.title}
                          </Typography>
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
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  )
}
