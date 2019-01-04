import React, {Component} from 'react';
import MoviePoster from '../components/MoviePoster';
import MoviesApi from '../../../services/moviesApi';
import {Masonry} from "gestalt";
import {RouteComponentProps, withRouter} from "react-router";

const POSTER_URL_PREFIX = 'http://image.tmdb.org/t/p/w500/';

interface Props extends RouteComponentProps {
  search: string
}

interface State {
  movies: Array<any>,
  page: number
}

class MovieFlow extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {movies: [], page: 0};
    this.loadMovies(props.search);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState(
      {movies: [], page: 0},
      () => this.loadMovies(nextProps.search)
    );
  }

// to be move into service / side-effect
  loadMovies = (query: string) => {

    let page = this.state.page + 1;

    MoviesApi
      .search({
        query: query,
        page: page
      })
      .then((response: any) => {
        let results = response.results.filter((i: any) => !!i.poster_path);
        this.setState((prevState) => ({movies: [...prevState.movies, ...results], page}))
      });
  };

  handleOnPosterClicked = (movieId: string) => {
    this.props.history.push(`/movie/${movieId}`);
  };

  render() {
    return (
      <Masonry
        comp={(i: any) => (<MoviePoster posterUrl={POSTER_URL_PREFIX + i.data.poster_path}
                                 title={i.data.title}
                                 onClick={() => this.handleOnPosterClicked(i.data.id)}/>)}
        items={this.state.movies}
        minCols={3}
        loadItems={() => this.loadMovies(this.props.search)}
        flexible={true}
        gutterWidth={3}
      />
    );
  }
}

export default withRouter(MovieFlow);
