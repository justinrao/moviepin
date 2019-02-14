import React, { Component, useState } from 'react';
import MoviesApi from '../../../services/movieApi';
import { Masonry, Box, Card, IconButton } from "gestalt";
import { RouteComponentProps, withRouter } from "react-router";
import MovieFlowPoster from '../components/MovieFlowPoster';
import {UserMovieApi} from '../../../services/userMovieApi';
import { Movie } from '../../../models/movie';

interface Props extends RouteComponentProps {
  movies: Movie[],
  loadMovies?: () => void
}

const MovieFlow = ({movies, loadMovies, history}: Props) => {

  const handlePosterClicked = (movieId: number) => {
    history.push(`/movie/${movieId}`);
  };

  const handleFavoriateClicked = async (movieId: number) => {
    try {
      await UserMovieApi.rateMovie(movieId, 5);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <Box color="white" paddingX={2} >
      <Masonry
        comp={(i: any) => (
          <MovieFlowPoster 
            movie={i.data} 
            onPosterClicked={handlePosterClicked}
            onFavoriateClicked={handleFavoriateClicked}/>
        )}
        items={movies}
        loadItems={() => loadMovies && loadMovies()}
        scrollContainer={() => (window as unknown as HTMLElement)}
        minCols={1}
        flexible={true}
        gutterWidth={3}
      />
    </Box>
  )
}

export default withRouter(MovieFlow);
