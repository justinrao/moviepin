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
    <Box padding={0} marginBottom={3} mdDisplay="none">
          <Heading size="md"  color="darkGray">{movie.title}</Heading>
        </Box>
    <Box display="flex" direction='row' width="100%" wrap={true} alignItems="start">
      <Box flex="none" column={12} mdColumn={5} lgColumn={4} alignSelf="center">
        <MoviePoster
          movie={movie}
          maxHeight="400px"
        ></MoviePoster>
      </Box>
      <Box paddingX={5} flex="none" column={12} mdColumn={7} lgColumn={8} >
        <Box padding={0} marginBottom={3} display="none" mdDisplay="block">
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
    <Box paddingX={2} paddingY={3} >
      <Text size="lg" color='gray'>{movie.overview}</Text>
    </Box>
  </Box>
)

export default React.memo(MovieDetails);