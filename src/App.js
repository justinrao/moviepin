import React, { Component } from 'react';
import './App.css';
import {Container} from 'gestalt';
import HeaderBar from "./components/HeaderBar";
import MovieFlow from "./components/MovieFlow";

class App extends Component {

  constructor() {
    super();
    this.state={search: 'Hero'};
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

export default App;
