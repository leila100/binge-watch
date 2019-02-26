import React, { Component } from "react"

import Navbar from "./components/navigation/Navbar"

import { Container } from "./styles/generalStyles"

class App extends Component {
  render() {
    /*
      Routes:
        <Home />     - Route to show the Welcome page - Shows list of current movies and shows
        <Movies />   - Route to show list of movies, add movie, can add reviews for a movie
        <Shows />    - Route to show list of tv shows, add  a tv show, can add reviews for a tv show
        <Search />   - Route for searching a movie/tv show
        <Members />  - Route to see all users (with all the movies/tv shows they added - no personal info as email) and modify profile
        <Login />    - Route for login form
        <Sign Up />  - Route for sign up form
    */
    return (
      <Container>
        <Navbar />
        {/* <h1>Welcome to Binge Watch!</h1> */}
      </Container>
    )
  }
}

export default App
