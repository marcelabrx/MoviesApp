import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
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


import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";


export default function PrevContainerHome() {
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
    <Container
        sx={{
          marginTop: "10%",
          display: "flex",
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
            <TableHead sx={{bgcolor: "#ab526b", fontFamily: "Luckiest Guy" }}>
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
                bgcolor: "background.paper",
                justifyContent: "space-between",
              }}
            >
              {popularMovies &&
                popularMovies.map((movie) => (
                  <TableRow sx={{overflowY: 'scroll' }} key={movie.id}>
                    <TableCell>
                      <ListItem sx={{ justifyContent: "space-between", height: '25px' }}>
                        <ListItemAvatar>
                          <Avatar
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          />
                        </ListItemAvatar>
                        <Link href="#" underline="none">
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
              {topRated &&
                topRated.map((movie) => (
                  <TableRow key={movie.id}>
                    <TableCell>
                      <ListItem sx={{ justifyContent: "space-between", height: '25px' }}>
                        <ListItemAvatar>
                          <Avatar
                            alt={movie.title}
                            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                          />
                        </ListItemAvatar>
                        <Link href="#" underline="none">
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
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  )
}
