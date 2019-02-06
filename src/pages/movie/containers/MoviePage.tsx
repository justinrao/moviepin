import { Box } from 'gestalt';
import * as React from 'react';
import { RouteComponentProps } from "react-router";
import { Movie } from '../../../models/movie';
import MoviesApi from '../../../services/movieApi';
import MovieDetails from '../components/MovieDetails';

interface RouteParams {
  movieId: string
}

interface Props extends RouteComponentProps<RouteParams> {
}

interface State {
  movie?: Movie
}

class MoviePage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    MoviesApi
      .get(movieId)
      .then((response: Movie) => this.setState({ movie: response }));

  }

  render() {

    const movie = this.state.movie;
    return (
      <Box color="lightGray">
          {movie && <MovieDetails movie={movie}></MovieDetails>}
      </Box>
    );
  }
}

export default MoviePage;
