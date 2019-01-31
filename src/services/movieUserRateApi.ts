import { API } from 'aws-amplify';

export class MovieUserRateApi {
  static rateMovie(movieId: number, rating: number) {
    const body = {
      movieId,
      rating
    };
    return API.post('rate', '/rate', {body });
  }
}