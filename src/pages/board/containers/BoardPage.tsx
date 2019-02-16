import { Box, Heading } from 'gestalt';
import React, { useEffect, useState } from 'react';
import { Movie } from '../../../models/movie';
import MoviesApi from '../../../services/movieApi';
import { UserMovieApi } from '../../../services/userMovieApi';
import SingleMessage from '../../../shared/layout/SingleMessage/SingleMessage';
import MovieFlow from '../../../shared/movie-flow/components/MovieFlow';


export const BoardPage = () => {

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const loadUserMovieList = async () => {
    const userMovieList = await UserMovieApi.getUserMovieList();
    const movieList = await MoviesApi.getList(userMovieList.map(i => i.movieId));
    setMovieList(movieList);
  }

  useEffect(() => {
    loadUserMovieList()
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