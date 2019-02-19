import { Box, Heading } from 'gestalt';
import React from 'react';
import { connect } from 'react-redux';
import withLoading from '../../../core/hoc/withLoading/withLoading';
import { Movie } from '../../../models/movie';
import { UserMovie } from '../../../models/userMovie';
import MovieFlow from '../../../shared/movie-flow/components/MovieFlow';
import { RootState } from '../../../store/reducers';

interface Props {
  userMovies: UserMovie[];
  loading: boolean;
};

const BoardPage = ({userMovies, loading}: Props) => {

  const movieList: Movie[] 
    = userMovies
      .map(i => i.movie)
      .filter(m => m !== undefined);

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

export default connect(mapStateToProps)(BoardPage);

