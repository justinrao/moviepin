import React, {Component} from 'react';
import './App.css';
import Home from './pages/home/containers/Home';
import {Route, Switch} from 'react-router-dom';
import Movie from './pages/movie/containers/Movie';
import 'gestalt/dist/gestalt.css';

class App extends Component {

  constructor(props: {}) {
    super(props);
    this.state={search: 'Hero'};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/movie/:movieId" component={Movie}/>
      </Switch>
    );
  }
}

export default App;
