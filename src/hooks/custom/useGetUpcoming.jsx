import { addUpcoming } from "../moviesSlice";
import { useGetMovies } from "../../utils";

const useGetUpcoming = () => {
  useGetMovies(
    "https://api.themoviedb.org/3/movie/upcoming?include_adult=true&page=1",
    addUpcoming
  );
};

export default useGetUpcoming;
