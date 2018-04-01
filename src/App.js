import React, { Component } from 'react';
import './App.css';
import {Container} from 'gestalt';
import HeaderBar from "./components/HeaderBar";
import MovieFlow from "./components/MovieFlow";

class App extends Component {
  render() {
    return (
      <Container>
          <HeaderBar/>
          <MovieFlow/>
      </Container>
    );
  }
}

export default App;
