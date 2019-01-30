import * as React from 'react';
import { Container, Box } from 'gestalt';
import MoviesApi from '../../../services/movieApi';
import { RouteComponentProps } from "react-router";
import MovieDetails from '../components/MovieDetails';
import { Movie } from '../../../shared/model/Movie.model';
import HeaderBar from '../../../shared/components/HeaderBar/HeaderBar';

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
