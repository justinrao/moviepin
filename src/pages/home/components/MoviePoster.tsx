import React from 'react';
import {Box} from 'gestalt';


interface Props {
  title: string,
  posterUrl: string,
  onClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

const MoviePoster = ({title, posterUrl, onClick}: Props) => (
  <div className="poster">
    <Box>
      <img alt={title}
           style={{maxWidth: '100%', minHeight: 400}}
           src={posterUrl}
           onClick={onClick}/>
    </Box>
  </div>

);

export default MoviePoster;
