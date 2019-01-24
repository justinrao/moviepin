import { API } from 'aws-amplify';

export class MovieUserRateApi {
  static rateMovie(movieId: number, rating: number) {
    return API.post('rate', '/rate', {
      movieId,
      rating
    });
  }
}