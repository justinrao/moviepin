import React, { useState, useEffect } from 'react';
import { Heading, Box, Text } from 'gestalt';
import { UserMovieApi } from '../../../services/userMovieApi';
import { UserMovie } from '../../../models/userMovie';
import { Movie } from '../../../models/movie';
import MoviesApi from '../../../services/movieApi';
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
    <Box color="white" paddingX={6} >
      <Heading size="sm">My Favoriates</Heading>
      <MovieFlow movies={movieList}/>
    </Box>
  )
}