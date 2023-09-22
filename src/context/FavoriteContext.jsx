import { createContext, useState } from "react";

export const FavoriteContext = createContext()

export default function FavoriteContextProvider({children}){

    const [favoritesMovies, setFavoritesMovies]= useState(JSON.parse(localStorage.getItem("favorites")) || [])

    function addFavoritesMovies(favMovie){
        setFavoritesMovies([...favoritesMovies, favMovie])
        localStorage.setItem("favorites", JSON.stringify([...favoritesMovies, favMovie]))
    }

    function removeFavoritesMovies (favMovie) {
        const favoritesFilter= favoritesMovies.filter(movie=> movie.id !== favMovie.id)
        setFavoritesMovies(favoritesFilter)
        localStorage.setItem("favorites", JSON.stringify(favoritesFilter))
    }

    function getFavoriteMovie (id){
        return favoritesMovies.some(movie => movie.id === id)
    }


    const data={
        favoritesMovies,
        addFavoritesMovies,
        removeFavoritesMovies,
        getFavoriteMovie
    }
    return <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
}