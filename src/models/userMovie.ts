import { Movie } from "./movie";

export interface UserMovie {
    movieId: number;
    rating: number;
    createdAt: number;
    movie   : Movie;
}