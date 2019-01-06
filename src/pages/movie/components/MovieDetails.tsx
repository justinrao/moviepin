import React from 'react';
import MoviePoster from '../../../shared/components/MoviePoster';
import { Movie } from '../../../shared/model/Movie.model';


interface Props {
    movie: Movie;
}

export default ({movie}: Props) => (
    <span>
        <MoviePoster
            movie={movie} 
            maxWidth={'200px'}
            ></MoviePoster>
        {JSON.stringify(movie)};
    </span>
)