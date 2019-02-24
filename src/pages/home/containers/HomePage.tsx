import React, { useState } from 'react';
import MovieFlow from '../../../shared/movie-flow/components/MovieFlow';
import { Movie } from '../../../models/movie';
import MoviesApi from '../../../services/movieApi';
import { RootState } from '../../../store/reducers';
import { Dispatch } from 'redux';
import { searchMovies } from '../../../store/movie-search/actions';
import { connect } from 'react-redux';
import { selectMoviesWithPoster } from '../../../store/movie-search/selectors';

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
