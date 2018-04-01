import React, { Component } from 'react';
import './App.css';
import {Container} from 'gestalt';
import HeaderBar from "./components/HeaderBar";

class App extends Component {
  render() {
    return (
      <Container>
          <HeaderBar></HeaderBar>
      </Container>
    );
  }
}

export default App;
