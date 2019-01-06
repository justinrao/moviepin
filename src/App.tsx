import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home/containers/HomePage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MoviePage from './pages/movie/containers/MoviePage';
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
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:movieId" component={MoviePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
