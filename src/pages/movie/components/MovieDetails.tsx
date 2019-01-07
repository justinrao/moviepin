import React from 'react';
import MoviePoster from '../../../shared/components/MoviePoster/MoviePoster';
import { Movie } from '../../../shared/model/Movie.model';
import { Heading, Box, Text, Icon, Button, Link } from 'gestalt';
import MovieDetailsItem from './MovieDetailsItem';


interface Props {
    movie: Movie;
}

export default ({ movie }: Props) => (
    <Box color="white" shape="roundedBottom" paddingX={10} paddingY={8} display="flex" direction="column" alignItems="center" minHeight="650px">
        <Box display="flex" direction='row'>
            <Box dangerouslySetInlineStyle={{ __style: { flex: 2 } }}>
                <MoviePoster
                    movie={movie}
                    maxWidth={'100%'}
                ></MoviePoster>
            </Box>
            <Box paddingX={5} dangerouslySetInlineStyle={{ __style: { flex: 3 } }}>
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