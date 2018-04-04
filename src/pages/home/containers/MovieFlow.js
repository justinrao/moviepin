import React, {Component} from 'react';
import {Masonry} from 'gestalt';
import MoviePoster from '../components/MoviePoster';
import MoviesApi from '../../../services/moviesApi';

const POSTER_URL_PREFIX = 'http://image.tmdb.org/t/p/w500/';

class MovieFlow extends Component {

  constructor(props) {
    super(props);
    this.state = {movies: [], page: 0};
    this.loadMovies(props.search);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps:", nextProps);
    this.setState(
      {movies: [], page: 0},
      () => this.loadMovies(nextProps.search)
    );

  }

// to be move into service / side-effect
  loadMovies = (query) => {

    let page = this.state.page + 1;

    MoviesApi
      .search({
        query: query,
        page: page
      })
      .then(response => {
        let results = response.results.filter(i => !!i.poster_path);
        this.setState((prevState) => ({movies: [...prevState.movies, ...results], page}))
      });
  };

  render() {
    return (
      <Masonry
        comp={i => (<MoviePoster posterUrl={POSTER_URL_PREFIX + i.data.poster_path} title={i.data.title}/>)}
        items={this.state.movies}
        minCols={3}
        loadItems={() => this.loadMovies(this.props.search)}
        flexible={true}
        scrollContainer={() => window}
        gutterWidth={3}
      />
    );
  }
}

export default MovieFlow;
