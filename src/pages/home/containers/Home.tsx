import React, {Component} from 'react';
import {Container} from 'gestalt';
import HeaderBar from '../components/HeaderBar';
import MovieFlow from './MovieFlow';
import '../Home.css';

interface State {
  search: string
}

class Home extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {search: 'Hero'};
  }

  handleSearchChanged = (search: string) => {
    this.setState({search});
  };

  render() {
    return (
      <Container>
        <HeaderBar search={this.state.search}
                   onSearchChanged={this.handleSearchChanged}/>
        <MovieFlow search={this.state.search}/>
      </Container>
    );
  }
}

export default Home;