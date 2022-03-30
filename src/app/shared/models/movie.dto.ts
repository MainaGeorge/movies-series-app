import { Movie } from "./movie";

export interface MovieDto {
    page: number,
    results: Movie[],
    total_results: number,
    total_pages:number
}