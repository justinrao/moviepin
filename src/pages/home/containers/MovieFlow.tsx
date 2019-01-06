import React, { Component } from 'react';
import MoviePoster from '../../../shared/components/MoviePoster/MoviePoster';
import MoviesApi from '../../../services/moviesApi';
import { Masonry, Box, Card } from "gestalt";
import { RouteComponentProps, withRouter } from "react-router";
import { Movie } from '../../../shared/model/Movie.model';


interface Props extends RouteComponentProps {
  search: string
}

interface State {
  movies: Array<Movie>,
  page: number
}

class MovieFlow extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { movies: [], page: 0 };
    this.loadMovies(props.search);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState(
      { movies: [], page: 0 },
      () => this.loadMovies(nextProps.search)
    );
  }

  // to be move into service / side-effect
  loadMovies = (query: string) => {

    let page = this.state.page + 1;

    MoviesApi
      .search({
        query: query,
        page: page
      })
      .then((response: any) => {
        let results = response.results.filter((i: any) => !!i.poster_path);
        this.setState((prevState) => ({ movies: [...prevState.movies, ...results], page }))
      });
  };

  handleOnPosterClicked = (movieId: number) => {
    this.props.history.push(`/movie/${movieId}`);
  };

  handleLoadItems = () => {
    this.loadMovies(this.props.search);
  }

  render() {
    return (
      <Box color="white" padding={3}>
        <Masonry
          comp={(i: any) => (
            <Card image={<MoviePoster
              movie={i.data}
              maxWidth="100%"
              minHeight="400px"
              onClick={() => this.handleOnPosterClicked(i.data.id)} />}>
            </Card>
          )}
          items={this.state.movies}
          loadItems={this.handleLoadItems}
          scrollContainer={() => (window as unknown as HTMLElement)}
          minCols={1}
          flexible={true}
          gutterWidth={3}
        />
      </Box>
    );
  }
}

export default withRouter(MovieFlow);
