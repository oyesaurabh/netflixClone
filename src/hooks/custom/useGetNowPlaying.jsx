// useGetNowPlaying.js
import { addNowPlaying } from "../moviesSlice";
import { useGetMovies } from "../../utils";

const useGetNowPlaying = () => {
  useGetMovies(
    "https://api.themoviedb.org/3/movie/now_playing?include_adult=true&page=1",
    addNowPlaying
  );
};

export default useGetNowPlaying;
