import React, {Component} from 'react';
import axios from 'axios';
import {Masonry} from 'gestalt';
import MoviePoster from './MoviePoster';



class MovieFlow extends Component {

  constructor(props) {
    super(props);
    this.state = {movies: []}
    this.loadMovies(props.search);
  }

  componentWillReceiveProps(nextProps) {
    this.loadMovies(nextProps.search)
  }

// to be move into service / side-effect
  loadMovies = (query) => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=' + encodeURI(query);
    axios.get(url)
      .then(response => {
        console.log(response.data);
        this.setState({movies: response.data.results})
      });
  };

  render() {
    return (
      <Masonry
        comp={i => (<MoviePoster posterPath={i.data.poster_path} title={i.data.title}/>)}
        items={this.state.movies}
        minCols={1}
        flexible={true}
        gutterWidth={3}
      />
    );
  }
}

export default MovieFlow;
