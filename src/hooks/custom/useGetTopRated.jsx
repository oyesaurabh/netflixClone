import { addTopRated } from "../moviesSlice";
import { useGetMovies } from "../../utils";

const useGetTopRated = () => {
  useGetMovies(
    "https://api.themoviedb.org/3/movie/top_rated?include_adult=true&page=1",
    addTopRated
  );
};

export default useGetTopRated;
