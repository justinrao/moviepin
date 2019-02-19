import { Box, Heading } from 'gestalt';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import withLoading from '../../../core/hoc/withLoading/withLoading';
import { Movie } from '../../../models/movie';
import { UserMovie } from '../../../models/userMovie';
import MovieFlow from '../../../shared/movie-flow/components/MovieFlow';
import { RootState } from '../../../store/reducers';
import { loadUserMovies } from '../../../store/user-movie/actions';

interface Props {
  userMovies: UserMovie[];
  onLoadMovies: () => void;
  loading: boolean;
};

const BoardPage = ({userMovies, loading, onLoadMovies}: Props) => {

  const movieList: Movie[] 
    = userMovies
      .map(i => i.movie)
      .filter(m => m !== undefined);

  useEffect(() => {
    onLoadMovies()
  }, []);

  const MovieFlowWithLoading = withLoading(MovieFlow);

  return (
    <Box>
      <Box marginBottom={3}>
        <Heading size="sm">My Favorites</Heading>
      </Box>
      <MovieFlowWithLoading 
        movies={movieList} 
        loading={loading}
        emptyMessage="Please like a movie to add it to your Favorite Board!"/>
    </Box>
  )
}




const mapStateToProps = (state: RootState) => ({
  userMovies: state.userMovies.userMovies,
  loading: state.userMovies.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoadMovies: () => dispatch(loadUserMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);

