import { Box } from 'gestalt';
import React from 'react';
import '../HomePage.css';
import SearchMovieFlow from './SearchMovieFlow';

interface Props{
  search: string;
}

const HomePage = ({search}: Props) => (
  <Box color="lightGray" >
    <SearchMovieFlow search={search}/>
 </Box>
);

export default HomePage;
