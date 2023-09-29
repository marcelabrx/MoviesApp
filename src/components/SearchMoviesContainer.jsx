import SearchMoviesCard from "./SearchMoviesCard";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";
import PaginationMovies from "./PaginationMovies";
import Footer from "./footer/Footer";
import useMovies from "../customHooks/useMovies";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  left: "35%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "30%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "30%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#bca297",
  fontWeight: "bold",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "30%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchMoviesContainer() {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    if (searchMovie) {
      const apiUrl = "https://api.themoviedb.org/3/search/movie";

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      };
      const searchUrl = `${apiUrl}?include_adult=false&language=en-US&page=1&query=${searchMovie}`;
      
      fetch(searchUrl, options)
        .then((response) => response.json())
        .then((data) => 
          setSearchResults(data.results))
        .catch((err) => console.error(err));

    }
  }, [searchMovie]);

  return (
    <div style={{ paddingTop: "2em" }}>
      <Search sx={{ border: "2px #bca297 solid" }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#bca297" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </Search>
      <SearchMoviesCard
        searchMovie={searchMovie}
        searchResults={searchResults}
      />
      <Footer />
    </div>
  );
}