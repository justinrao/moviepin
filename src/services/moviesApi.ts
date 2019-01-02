import axios from 'axios'

const commonParams = {
  api_key: "15d2ea6d0dc1d476efbca3eba2b9bbfb"
};

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const unwrapData = ({data}: {data: any}) => data;

const request = (name: string, params = {}) =>
  instance
    .get(`/${name}`, {
      params: {...commonParams, ...params}
    })
    .then(unwrapData);


export interface SearchParams {
  query: string,
  page: number
}

class MoviesApi {

  static search(params: SearchParams) {
    return request('search/movie', params);
  }

  static get(movieId: string) {
    return request('movie/' + movieId)
  }
}

export default MoviesApi
