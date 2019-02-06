import React, { Component } from 'react';
import MoviePoster from '../../../shared/components/MoviePoster/MoviePoster';
import MoviesApi from '../../../services/movieApi';
import { Masonry, Box, Card, IconButton } from "gestalt";
import { RouteComponentProps, withRouter } from "react-router";
import { Movie } from '../../../shared/model/Movie.model';
import MovieFlowPoster from '../components/MovieFlowPoster';
import {MovieUserRateApi} from '../../../services/movieUserRateApi';

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

  handlePosterClicked = (movieId: number) => {
    this.props.history.push(`/movie/${movieId}`);
  };


  handleFavoriateClicked = async (movieId: number) => {
    try {
      await MovieUserRateApi.rateMovie(movieId, 5);
    } catch(e) {
      alert(e);
      console.log(e);
    }
    
    console.log('movieId', movieId);
  }

  handleLoadItems = () => {
    this.loadMovies(this.props.search);
  }
  

  render() {
    return (
      <Box color="white" paddingX={2} >
        <Masonry
          comp={(i: any) => (
            <MovieFlowPoster 
              movie={i.data} 
              onPosterClicked={this.handlePosterClicked}
              onFavoriateClicked={this.handleFavoriateClicked}/>
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
