import { Box, Heading } from 'gestalt';
import React, { useEffect, useState } from 'react';
import { Movie } from '../../../models/movie';
import MoviesApi from '../../../services/movieApi';
import { UserMovieApi } from '../../../services/userMovieApi';
import SingleMessage from '../../../shared/layout/SingleMessage/SingleMessage';
import MovieFlow from '../../../shared/movie-flow/components/MovieFlow';
import { connect } from 'react-redux';
import { Store, Dispatch } from 'redux';
import { loadUserMovies } from '../../../store/user-movie/actions';
import { UserMovie } from '../../../models/userMovie';
import { UserMoviesState } from '../../../store/user-movie/reducer';
import { RootState } from '../../../store/reducers';

interface Props {
  userMovies: UserMovie[];
  onLoadMovies: () => void;
};

const BoardPage = ({userMovies, onLoadMovies}: Props) => {

  const movieList: Movie[] 
    = userMovies
      .map(i => i.movie)
      .filter(m => m !== undefined);

  useEffect(() => {
    onLoadMovies()
  }, []);

  return (
    <Box>
      <Box marginBottom={3}>
        <Heading size="sm">My Favorites</Heading>
      </Box>

      {movieList.length > 0 ? <MovieFlow movies={movieList} />
        : <SingleMessage>Please like a movie to add it to your Favorite Board!</SingleMessage>}
    </Box>
  )
}


const mapStateToProps = (state: RootState) => ({
  userMovies: state.userMovies.userMovies
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoadMovies: () => dispatch(loadUserMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);

