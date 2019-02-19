import { Box, Masonry } from "gestalt";
import React from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { Movie } from '../../../models/movie';
import { UserMovieApi } from '../../../services/userMovieApi';
import MovieFlowPoster from '../components/MovieFlowPoster';
import SingleMessage from "../../../core/layout/SingleMessage/SingleMessage";
import { RootState } from "../../../store/reducers";
import { Dispatch } from "redux";
import { postUserMovie } from "../../../store/user-movie/actions";
import { connect } from "react-redux";
import { userMovies } from "../../../store/user-movie/reducer";
import { UserMovie } from "../../../models/userMovie";
import { selectFavoriteMovieIds } from "../../../store/user-movie/selectors";

interface Props extends RouteComponentProps {
  movies: Movie[];
  favoriteMovieIds: number[];
  loadMovies?: () => void;
  emptyMessage?: string;
  handleFavoriateClicked: (movieId: number, favoriate: boolean) => void;
}

const MovieFlow = ({ movies, loadMovies, favoriteMovieIds, history, emptyMessage, handleFavoriateClicked }: Props) => {

  const handlePosterClicked = (movieId: number) => {
    history.push(`/movie/${movieId}`);
  };

  return (
    <Box color="white" >
      <Masonry
        comp={(i: any) =>
          (<MovieFlowPoster
            movie={i.data}
            favoriate={favoriteMovieIds.includes(i.data.id)}
            onPosterClicked={handlePosterClicked}
            onFavoriateClicked={handleFavoriateClicked} />
          )}
          items={movies}
      loadItems={() => loadMovies && loadMovies()}
      scrollContainer={() => (window as unknown as HTMLElement)}
      minCols={1}
      flexible={true}
      gutterWidth={3}
      />
        {movies.length === 0 && emptyMessage && <SingleMessage>{emptyMessage}</SingleMessage>}
    </Box>
  )
}

const mapStateToProps = (state: RootState) => ({
  favoriteMovieIds: selectFavoriteMovieIds(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleFavoriateClicked: (movieId: number, favoriate: boolean) => dispatch(postUserMovie(movieId, favoriate? 5 : 0))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieFlow));

