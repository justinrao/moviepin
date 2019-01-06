import React, {Component} from 'react';
import {Container, Box} from 'gestalt';
import HeaderBar from '../../../shared/components/HeaderBar/HeaderBar';
import MovieFlow from './MovieFlow';
import '../HomePage.css';

interface State {
  search: string
}

class HomePage extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {search: 'Hero'};
  }

  handleSearchChanged = (search: string) => {
    this.setState({search});
  };

  render() {
    return (
      <Box color="lightGray" padding={3} >
      <Container>
      <HeaderBar search={this.state.search}
                 onSearchChanged={this.handleSearchChanged}/>
        <MovieFlow search={this.state.search}/>
        </Container>
     </Box>
    );
  }
}

export default HomePage;
