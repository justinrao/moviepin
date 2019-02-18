import { Movie } from "./movie";

export interface UserMovie {
    movieId: string;
    rating: number;
    createdAt: number;
    movie   : Movie;
}