import { Box, Masonry } from "gestalt";
import React from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { Movie } from '../../../models/movie';
import { UserMovieApi } from '../../../services/userMovieApi';
import MovieFlowPoster from '../components/MovieFlowPoster';
import SingleMessage from "../../../core/layout/SingleMessage/SingleMessage";

interface Props extends RouteComponentProps {
  movies: Movie[],
  loadMovies?: () => void;
  emptyMessage?: string;
}

const MovieFlow = ({ movies, loadMovies, history, emptyMessage }: Props) => {

  const handlePosterClicked = (movieId: number) => {
    history.push(`/movie/${movieId}`);
  };

  const handleFavoriateClicked = async (movieId: number) => {
    try {
      await UserMovieApi.rateMovie(movieId, 5);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box color="white" >
        <Masonry
          comp={(i: any) => (
            <MovieFlowPoster
              movie={i.data}
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
        { movies.length === 0 && emptyMessage && <SingleMessage>{emptyMessage}</SingleMessage>}
    </Box>
  )
}

export default withRouter(MovieFlow);
