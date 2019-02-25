import { Box } from 'gestalt';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from "react-router";
import MoviesApi from '../../../services/movieApi';
import MovieDetails from '../components/MovieDetails';

interface RouteParams {
  movieId: string
}

interface Props extends RouteComponentProps<RouteParams> {
}

const MoviePage = ({ match }: Props) => {

  const movieId = match.params.movieId;
  const [movie, setMovie] = useState(null);

  const loadMovie = async () => {
    setMovie(await MoviesApi.get(Number(movieId)));
  };
  useEffect(() => { loadMovie() }, []);

  return (
    <Box color="lightGray">
      {movie && <MovieDetails movie={movie}></MovieDetails>}
    </Box>
  );
}

export default MoviePage;
