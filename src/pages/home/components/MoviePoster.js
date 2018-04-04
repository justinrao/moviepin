import React from 'react';
import {Box} from "gestalt";


const MoviePoster = ({title, posterUrl}) => (
  <Box>
    <img alt={title} style={{maxWidth: '100%', minHeight:400}} src={posterUrl}/>
  </Box>
);

export default MoviePoster;
