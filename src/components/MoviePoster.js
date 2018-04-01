import React from 'react';
import {Box} from "gestalt";


const MoviePoster = (props) => (
    <Box>
        <img alt={props.title} style={{'max-width': '100%'}} src={"http://image.tmdb.org/t/p/w500/" + props.posterPath}/>
    </Box>
);

export default MoviePoster;
