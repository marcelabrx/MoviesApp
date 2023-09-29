import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../../../../moviesAppConfig";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../../../context/FavoriteContext";
import styles from "./SearchMoviesDetails.module.css";
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
import LoaderMovies from "../../loader/LoaderMovies";
import bannerMovies from "../../../assets/bannerMovies.svg";

export default function SearchMoviesCard({ searchMovie, searchResults }) {
  const { getFavoriteMovie, addFavoritesMovies, removeFavoritesMovies } =
    useContext(FavoriteContext);

  const [rankingOfDay, setRankingOfDay] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiUrl = "https://api.themoviedb.org/3/trending/movie/day";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    setTimeout(() => {
      fetch(`${apiUrl}?language=en-US&page=1`, options)
        .then((response) => response.json())
        .then((data) => {
          setRankingOfDay(data.results);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, 2000);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", paddingTop: "2em" }}>
      {loading ? (
        <LoaderMovies />
      ) : (
        <div>
          <div className={styles.searchMovieDiv}>
            <h1 className={styles.searchTitle}>
              {searchMovie.length > 0 ? `${searchMovie}` : "Today's ranking"}
            </h1>
          </div>
          <div className={styles.searchContainCard}>
            {(searchMovie.length > 0 ? searchResults : rankingOfDay).map(
              (movie) => (
                <Card
                  key={movie.id}
                  className={styles.searchCard}
                  sx={{
                    backgroundColor: "#f4ebc3",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src={
                        movie.backdrop_path
                          ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                          : bannerMovies
                      }
                      sx={{ width: "260px" }}
                      alt={movie.title}
                      className={styles.cardMedia}
                    />
                    <CardContent className={styles.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        className={styles.searchTypography}
                      >
                        {movie.title}
                      </Typography>
                      <CardContent className={styles.searchCardContet}>
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
                                className={styles.searchStarIcon}
                                onClick={() => removeFavoritesMovies(movie)}
                              />
                            ) : (
                              <StarBorderIcon
                                className={styles.searchStarIcon}
                                onClick={() => addFavoritesMovies(movie)}
                              />
                            )}
                          </Button>
                        </Stack>
                      </CardContent>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
