import { API } from 'aws-amplify';
import { UserMovie } from '../models/userMovie';

const ENDPOINT_NAME = 'userMovie';

export class UserMovieApi {
  static async rateMovie(movieId: number, rating: number) {
    const body = {
      movieId,
      rating
    };
    return await API.post(ENDPOINT_NAME, '/rate', { body });
  }

  static async getUserMovieList(): Promise<UserMovie[]> {
    return await API.get(ENDPOINT_NAME, '/user-movie-list', {});
  }
}