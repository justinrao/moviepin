import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/containers/Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Movie from './pages/movie/containers/Movie';
import 'gestalt/dist/gestalt.css';

class App extends Component {

  constructor(props: {}) {
    super(props);
    this.state = { search: 'Hero' };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:movieId" component={Movie} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
