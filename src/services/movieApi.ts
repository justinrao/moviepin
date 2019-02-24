import axios from 'axios'

export const FIRST_PAGE_NUMBER = 1;

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


export interface MovieSearchParams {
  query: string,
  page: number
}

class MoviesApi {

  static search(params: MovieSearchParams) {
    return request('search/movie', params);
  }

  static get(movieId: string) {
    return request('movie/' + movieId)
  }

  static getList(movieIds: string[]) {
    return Promise.all(movieIds.map(MoviesApi.get));
  }
}

export default MoviesApi
