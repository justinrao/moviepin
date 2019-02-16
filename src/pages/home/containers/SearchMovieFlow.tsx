import React, { useState } from 'react';
import { Movie } from '../../../models/movie';
import MoviesApi from '../../../services/movieApi';
import MovieFlow from '../../../shared/movie-flow/components/MovieFlow';
import SingleMessage from '../../../shared/layout/SingleMessage/SingleMessage';

interface Props {
  search: string
}

const SearchMovieFlow = ({ search }: Props) => {

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    const response: { results: Movie[] } = await MoviesApi.search({ query: search, page });
    const results = response.results.filter((i: Movie) => !!i.poster_path);
    setMovies([...movies, ...results]);
    setPage(page + 1);
  };

  return (
    <div>
      <MovieFlow {...{ movies, loadMovies }} />
      {movies.length === 0 && <SingleMessage>No movie found. Please search something else!</SingleMessage>}
    </div>
  )
}

export default SearchMovieFlow;
