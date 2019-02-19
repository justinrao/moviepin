import React, { useState, ReactNode } from 'react';
import { Box, Card, IconButton } from 'gestalt';
import { Movie } from '../../../models/movie';
import MoviePoster from '../../poster/MoviePoster/MoviePoster';

interface Props {
  movie: Movie;
  favoriate: boolean;
  onPosterClicked: (movieId: number) => void;
  onFavoriateClicked: (movieId: number, favoriate: boolean) => void;
}

export default ({ movie, favoriate, onPosterClicked, onFavoriateClicked }: Props) => {

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Box>
      <Card image={<MoviePoster
        movie={movie}
        maxWidth="100%"
        minHeight="350px"
        onClick={() => onPosterClicked(movie.id)} />}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {mouseOver && <Box position='absolute' bottom right paddingX={6} paddingY={8}>
          <IconButton
            accessibilityLabel="Love"
            bgColor="white"
            icon="heart"
            iconColor={favoriate ? 'red' : 'gray'}
            onClick={() => onFavoriateClicked(movie.id, !favoriate)}
          />
        </Box>}
      </Card>
    </Box>)
}
