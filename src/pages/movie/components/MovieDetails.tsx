import React from 'react';
import MoviePoster from '../../../shared/components/MoviePoster/MoviePoster';
import { Movie } from '../../../shared/model/Movie.model';
import { Heading, Box, Text, Icon, Button, Link } from 'gestalt';
import MovieDetailsItem from './MovieDetailsItem';


interface Props {
    movie: Movie;
}

export default ({ movie }: Props) => (
    <span style={{ color: 'grey' }}>
        <Box color="white" shape="roundedBottom" paddingX={10} paddingY={4} display="flex" direction="column" alignItems="center">
            <Box padding={2} >
                <Heading size="sm" color="darkGray">{movie.title}</Heading>
            </Box>
            <Box display="flex" direction='row'>
                <Box dangerouslySetInlineStyle={{ __style: { flex: 2 } }}>
                    <MoviePoster
                        movie={movie}
                        maxWidth={'100%'}
                    ></MoviePoster>
                </Box>
                <Box padding={5} dangerouslySetInlineStyle={{ __style: { flex: 3 } }}>
                    <MovieDetailsItem icon='globe' label='Language'>
                        {movie.spoken_languages.map(l => l.name).join(', ')}
                    </MovieDetailsItem>
                    <MovieDetailsItem icon='align-top' label='Release Date'>
                        {movie.release_date}
                    </MovieDetailsItem>
                    <MovieDetailsItem icon='check-circle' label='Status'>
                        {movie.status}
                    </MovieDetailsItem>
                    <MovieDetailsItem icon='face-happy' label='Genres'>
                        {movie.genres.map(g => g.name).join(', ')}
                    </MovieDetailsItem>
                    <MovieDetailsItem icon='globe-checked' label='Production Country'>
                        {movie.production_countries.map(l => l.name).join(', ')}
                    </MovieDetailsItem>
                    <MovieDetailsItem icon='align-bottom-center' label='Production Company'>
                        {movie.production_companies.map(l => l.name).join(', ')}
                    </MovieDetailsItem>
                    <Box display='flex' paddingY={2}>
                        <Box paddingX={2}>
                            {movie.homepage &&
                                <Button text="Home Page" inline onClick={() => window.open(movie.homepage, '_blank')} />
                            }
                        </Box>
                        <Box paddingX={2}>
                            {movie.imdb_id &&
                                <Button text="IMDB" inline onClick={() => window.open(`http://imdb.com/title/${movie.imdb_id}`, '_blank')} />
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box paddingX={5} paddingY={3}>
                <Text size="lg">{movie.overview}</Text>
            </Box>
        </Box>
    </span>
)