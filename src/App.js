import React, { Component, useState } from 'react';
import './App.css';
import AddMovie from './Component/Addmovie/AddMovie';
import { moviesData } from './Component/Data/Data (1)';
import FilterByName from './Component/Filterbyname/FilterByName';
import MovieList from './Component/Movielist/MovieList';
import Rating from './Component/Rating/Rating';
import FilterByRate from './Component/Rating/Rating'



const App = () => {
const [movies, setMovies] = useState(moviesData)
const [inputSearch,setInputSearch] = useState("")
const [rating, setRating] = useState(1)
const add = (newMovie) =>{
setMovies([...movies, newMovie])

}
return (
<div className="App">
  <h2>MOVIE APP</h2>

<div className='container'>
<FilterByName 
inputSearch={inputSearch} 
setInputSearch={setInputSearch}/>

<FilterByRate
isMovieRating={false}
rating={rating}
setRating={setRating} />
</div>
<AddMovie add={add}/>
<MovieList movies ={movies} inputSearch={inputSearch}/>
</div>
)
}
export default App;
