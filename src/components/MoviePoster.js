import React from 'react';
import {Box} from "gestalt";


const MoviePoster = (props) => (
  <Box>
    <img alt={props.title} style={{maxWidth: '100%', minHeight:400}} src={"http://image.tmdb.org/t/p/w500/" + props.posterPath}/>
  </Box>
);

export default MoviePoster;
