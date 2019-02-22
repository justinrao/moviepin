import React from 'react';
import { Heading, Box, Text, Icon, Button, Link } from 'gestalt';
import MovieDetailsItem from './MovieDetailsItem';
import MoviePoster from '../../../shared/poster/MoviePoster/MoviePoster';
import { Movie } from '../../../models/movie';


interface Props {
  movie: Movie;
}

const MovieDetails = ({ movie }: Props) => (
  <Box color="white" shape="roundedBottom" paddingX={2} display="flex" direction="column" alignItems="center" minHeight="650px">
    <Box display="flex" direction='row' width="100%">
      <Box dangerouslySetInlineStyle={{ __style: { flex: 1 } }}>
        <MoviePoster
          movie={movie}
          minHeight="450px"
          maxHeight="450px"
        ></MoviePoster>
      </Box>
      <Box paddingX={5} dangerouslySetInlineStyle={{ __style: { flex: 2 } }}>
        <Box padding={2}>
          <Heading size="sm" color="darkGray">{movie.title}</Heading>
        </Box>
        <MovieDetailsItem icon='globe' label='Language'>
          {movie.spoken_languages.map(l => l.name).join(', ')}
        </MovieDetailsItem>
        <MovieDetailsItem icon='clock' label='Release Date'>
          {movie.release_date}
        </MovieDetailsItem>
        <MovieDetailsItem icon='check-circle' label='Status'>
          {movie.status}
        </MovieDetailsItem>
        <MovieDetailsItem icon='face-happy' label='Genres'>
          {movie.genres.map(g => g.name).join(', ')}
        </MovieDetailsItem>
        <MovieDetailsItem icon='globe-checked' label='Country'>
          {movie.production_countries.map(l => l.name).join(', ')}
        </MovieDetailsItem>
        <MovieDetailsItem icon='shopping-bag' label='Production Company'>
          {movie.production_companies.map(l => l.name).join(', ')}
        </MovieDetailsItem>
        <Box display='flex' paddingY={2}>
          {movie.homepage &&
            <Box paddingX={2}>
              <Button text="Home Page" inline onClick={() => window.open(movie.homepage, '_blank')} />
            </Box>
          }
          {movie.imdb_id &&
            <Box paddingX={2}>
              <Button text="IMDB" inline onClick={() => window.open(`http://imdb.com/title/${movie.imdb_id}`, '_blank')} />
            </Box>
          }
        </Box>
      </Box>
    </Box>
    <Box paddingX={2} paddingY={3}>
      <Text size="lg" color='gray'>{movie.overview}</Text>
    </Box>
  </Box>
)

export default React.memo(MovieDetails);