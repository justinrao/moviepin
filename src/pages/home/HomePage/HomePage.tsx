import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Movie } from '../../../models/movie';
import MovieFlow from '../../../shared/MovieFlow/MovieFlow';
import { searchMovies } from '../../../store/movie-search/actions';
import { selectMoviesWithPoster } from '../../../store/movie-search/selectors';
import { RootState } from '../../../store/reducers';

interface Props {
  movies: Movie[],
  loading: boolean,
  searchMovies: () => void;
}

const HomePage = ({ movies, loading, searchMovies }: Props) => {

  const emptyMessage = "No movie found. Please search something else!";

  return (
    <MovieFlow {...{ movies, loadMovies: searchMovies, emptyMessage, loading }} />
  )
}

const mapStateToProps = (state: RootState) => ({
  movies: selectMoviesWithPoster(state),
  loading: state.movieSearch.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchMovies: () => dispatch(searchMovies())
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
