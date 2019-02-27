import React from "react"

import movieImage from "../../assets/images/movie.jpg"
import { MoviesWrapper, MovieWrapper } from "../../styles/movieStyles"

const Home = props => {
  return (
    <MoviesWrapper>
      <h3>Movies</h3>
      {props.movies.map(
        (movie, index) =>
          index < 3 && (
            <MovieWrapper key={movie.title}>
              <img src={movieImage} alt="movie" />
              <div>Title: {movie.title}</div>
              <div>Description: {movie.description}</div>
            </MovieWrapper>
          )
      )}
      <button>Show more</button>
    </MoviesWrapper>
  )
}

export default Home
