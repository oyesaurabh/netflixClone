import { addPopularMovies } from "../moviesSlice";
import { useGetMovies } from "../../utils";

const useGetPopular = () => {
  useGetMovies(
    "https://api.themoviedb.org/3/movie/popular?include_adult=true&page=1",
    addPopularMovies
  );
};

export default useGetPopular;
