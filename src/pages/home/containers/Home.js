import React, {Component} from 'react';
import {Container} from 'gestalt';
import HeaderBar from '../components/HeaderBar';
import MovieFlow from './MovieFlow';
import '../Home.css';

class Home extends Component {

  constructor() {
    super();
    this.state = {search: 'Hero'};
  }

  render() {
    return (
      <Container>
        <HeaderBar search={this.state.search}
                   onSearchChanged={search => this.setState({search})}/>
        <MovieFlow search={this.state.search}/>
      </Container>
    );
  }
}

export default Home;
