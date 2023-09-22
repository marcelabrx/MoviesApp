import SearchMoviesCard from "./SearchMoviesCard";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../moviesAppConfig";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
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
        .then((data) => setSearchResults(data.results))
        .catch((err) => console.error(err));
    }
  }, [searchMovie]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </Search>
      <div style={{position:"fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "5" }}>
      {searchMovie.length > 0 ? (
    <SearchMoviesCard
      searchMovie={searchMovie}
      searchResults ={searchResults}
    />
    ) : null}
      </div>
    </>
  );
}
