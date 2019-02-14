import React, {Component} from 'react';
import {Container, Box} from 'gestalt';
import MovieFlow from '../../../shared/movie-flow/components/MovieFlow';
import '../HomePage.css';
import SearchMovieFlow from './SearchMovieFlow';

interface State {
  // search: string
}

interface Props{
  search: string;
}

class HomePage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // this.state = {search: 'Hero'};
  }

  // handleSearchChanged = (search: string) => {
  //   this.setState({search});
  // };

  render() {
    return (
      <Box color="lightGray" >
        <SearchMovieFlow search={this.props.search}/>
     </Box>
    );
  }
}

export default HomePage;
