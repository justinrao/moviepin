import { Box, Masonry } from "gestalt";
import React from 'react';
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { Dispatch } from "redux";
import SingleMessage from "../../../core/layout/SingleMessage/SingleMessage";
import { Movie } from '../../../models/movie';
import { RootState } from "../../../store/reducers";
import { postUserMovie } from "../../../store/user-movie/actions";
import { selectFavoriteMovieIds } from "../../../store/user-movie/selectors";
import MovieFlowPoster from '../components/MovieFlowPoster';
import { selectUser } from "../../../store/auth/selectors";
import { User } from "../../../models/user";
import { openAuthLoginDialog } from "../../../store/ui/auth-dialog/actions";

interface Props extends RouteComponentProps {
  movies: Movie[];
  favoriteMovieIds: number[];
  loadMovies?: () => void;
  emptyMessage?: string;
  handleFavoriateClicked: (movieId: number, favoriate: boolean) => void;
  handleLogin: () => void;
  user?: User;
}

const MovieFlow = ({
    movies, 
    loadMovies, 
    favoriteMovieIds, 
    history, 
    emptyMessage, 
    handleFavoriateClicked,
    handleLogin,
    user }: Props) => {

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
            onFavoriateClicked={user ? handleFavoriateClicked : handleLogin}
          />)}
        items={movies}
        loadItems={() => loadMovies && loadMovies()}
        scrollContainer={() => (window as unknown as HTMLElement)}
        minCols={1}
        gutterWidth={3}
        virtualize={true}
      />
      {movies.length === 0 && emptyMessage && <SingleMessage>{emptyMessage}</SingleMessage>}
    </Box>
  )
}

const mapStateToProps = (state: RootState) => ({
  favoriteMovieIds: selectFavoriteMovieIds(state),
  user: selectUser(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleFavoriateClicked: (movieId: number, favoriate: boolean) => dispatch(postUserMovie(movieId, favoriate ? 5 : 0)),
  handleLogin: () => dispatch(openAuthLoginDialog())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieFlow));


