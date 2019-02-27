import React, { Component } from "react"
import { connect } from "react-redux"

import SampleMovies from "../components/movies/SampleMovies"
import { Header } from "../styles/generalStyles"

class Home extends Component {
  render() {
    return (
      <>
        <Header>
          <h1>Welcome to Binge Watch!</h1>
          <h2>
            Take a look at TV Shows and Movies people recommend, and add your
            favorites to the list.
          </h2>
        </Header>
        <SampleMovies movies={this.props.movies} />
        <h3>TV Shows</h3>
        {/* <SampleShows /> */}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(Home)
