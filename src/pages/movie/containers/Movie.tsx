import * as React from 'react';
import {Container} from 'gestalt';
import MoviesApi from '../../../services/moviesApi';
import {RouteComponentProps} from "react-router";

interface RouteParams {
   movieId: string
}

interface Props extends RouteComponentProps<RouteParams>{
}

interface State {
  movie?: any
}

class Movie extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    MoviesApi
      .get(movieId)
      .then((response:any) => this.setState({movie: response}));

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
