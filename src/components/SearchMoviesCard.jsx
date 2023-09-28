import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../../moviesAppConfig";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import Footer from "./footer/Footer";

export default function SearchMoviesCard({ searchMovie, searchResults }) {
  const { getFavoriteMovie, addFavoritesMovies, removeFavoritesMovies } =
    useContext(FavoriteContext);

  const [rankingOfDay, setRankingOfDay] = useState([]);
  useEffect(() => {
    const apiUrl = "https://api.themoviedb.org/3/trending/movie/day";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    fetch(`${apiUrl}?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((data) => setRankingOfDay(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "2em" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "0px",
          marginBottom: "0.5em",
          borderBottom: "solid #bca297",
          borderTop: "solid #bca297",
        }}
      >
        <h1
          style={{
            fontSize: "3em",
            color: "#bca297",
            fontFamily: "Luckiest Guy",
          }}
        >
          {searchMovie.length > 0 ? `${searchMovie}` : "Today's ranking"}
        </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {(searchMovie.length > 0 ? searchResults : rankingOfDay).map(
          (movie) => (
            <Card
              key={movie.id}
              sx={{
                marginX: "2px",
                marginBottom: "1em",
                backgroundColor: "#f4ebc3",
              }}
            >
              <CardActionArea sx={{ width: "260px" }}>
                <CardMedia
                  component="img"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#ab526b",
                      textAlign: "center",
                      height: "80px",
                      marginTop: "1em",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <CardContent
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "#ab526b solid 2px",
                      height: "20px",
                    }}
                  >
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{ marginTop: "15px" }}
                    >
                      <Link to={`/detailsMovies/${movie.id}`}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ backgroundColor: "#ab526b" }}
                        >
                          <RemoveRedEyeOutlinedIcon
                            className="bg-menu"
                            sx={{ color: "#c7ede8", fontSize: "2em" }}
                          />
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ backgroundColor: "#ab526b" }}
                      >
                        {getFavoriteMovie(movie.id) ? (
                          <StarIcon
                            className="bg-menu"
                            sx={{ color: "#e6d839", fontSize: "2em" }}
                            onClick={() => removeFavoritesMovies(movie)}
                          />
                        ) : (
                          <StarBorderIcon
                            className="bg-menu"
                            sx={{ color: "#e6d839", fontSize: "2em" }}
                            onClick={() => addFavoritesMovies(movie)}
                          />
                        )}
                      </Button>
                    </Stack>
                  </CardContent>
                </CardContent>
                -
              </CardActionArea>
            </Card>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
