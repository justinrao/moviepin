import React from 'react';
import { Box } from 'gestalt';
import { Movie } from '../../../models/movie';
import './MoviePoster.css';

const POSTER_URL_PREFIX = 'http://image.tmdb.org/t/p/w500/';

interface Props {
  movie: Movie;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const MoviePoster = ({ movie, minWidth, maxWidth, maxHeight, minHeight, onClick }: Props) => (
  <div className="poster">
    <Box padding={2}>
      <img alt={movie.title}
        style={{ maxWidth, minHeight, minWidth, maxHeight }}
        src={POSTER_URL_PREFIX + movie.poster_path}
        onClick={onClick} />
    </Box>
  </div>

);

export default MoviePoster;
