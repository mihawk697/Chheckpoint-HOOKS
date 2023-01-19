import React from 'react'
import Moviecard from '../Moviecard/MovieCard'
import "./movielist.css"



const MovieList = ({ movies, inputSearch }) => {
  return (
    <div className='movies'>
        {movies
        // .filter((movie) =>
        // movie.title.toLowerCase().includes (inputSearch.toLowerCase())
        // )
        .map((movie) => (<Moviecard movie = {movie} key ={movie.id}/>))}
    </div>
  )
}

export default MovieList