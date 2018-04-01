import React, {Component} from 'react';
import axios from 'axios';
import {Masonry} from 'gestalt';


class MovieFlow extends Component {

    constructor(props) {
        super(props);
        this.state = {movies: []}
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=hero';
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.setState({movies: response.data.results})
            });
    }

    render() {
        return (
            <Masonry
                comp={i => (<span>{i.data.title}</span>)}
                items={this.state.movies}
                minCols={1}
            />
        );
    }
}

export default MovieFlow;
