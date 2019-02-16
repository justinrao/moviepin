import { Box } from 'gestalt';
import React from 'react';
import '../HomePage.css';
import SearchMovieFlow from './SearchMovieFlow';

interface Props{
  search: string;
}

const HomePage = ({search}: Props) => (
    <SearchMovieFlow search={search}/>
);

export default HomePage;
