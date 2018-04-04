import React, {Component} from 'react';
import {Container} from 'gestalt';
import MoviesApi from '../../../services/moviesApi';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const movieId = this.props.match.params['movieId'];
    MoviesApi
      .get(movieId)
      .then(response => this.setState({movie: response}));

  }

  render() {

    return (
      <Container>
        <span>{JSON.stringify(this.state.movie)}</span>
      </Container>
    );
  }
}

export default Movie;
