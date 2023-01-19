import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './moviecard.css'
import MovieRating from '../Rating/Rating'

const Moviecard = ({movie}) => {
  return (
    <div className='movie-card'> 
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterUrl} /><Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text> {movie.description}</Card.Text>
      <MovieRating isMovieRating={true} movieRating={movie.rate} />
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Moviecard