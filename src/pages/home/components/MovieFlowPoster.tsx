import React, { useState, ReactNode } from 'react';
import { Box, Card, IconButton } from 'gestalt';
import MoviePoster from '../../../shared/components/MoviePoster/MoviePoster';
import { Movie } from '../../../shared/model/Movie.model';

interface Props {
  movie: Movie;
  onPosterClicked: (movieId: number) => void;
  onFavoriateClicked: (movieId: number) => void;
}

export default ({ movie, onPosterClicked, onFavoriateClicked }: Props) => {

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Box>
      <Card image={<MoviePoster
        movie={movie}
        maxWidth="100%"
        minHeight="400px"
        onClick={() => onPosterClicked(movie.id)} />}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {mouseOver && <Box position='absolute' bottom right paddingX={6} paddingY={8}>
          <IconButton
            accessibilityLabel="Love"
            bgColor="white"
            icon="heart"
            iconColor="red"
            onClick={() => onFavoriateClicked(movie.id)}
          />
        </Box>}
      </Card>
    </Box>)
}
