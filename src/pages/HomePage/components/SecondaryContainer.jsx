import { useSelector } from "react-redux";
import { MovieLists } from "../../../components";
const SecondaryContainer = () => {
  const { nowPlaying, popularMovies, topRated, upcoming } = useSelector(
    (store) => store.movies
  );
  return (
    <div className="absolute mt-[-300px] bg-black">
      {nowPlaying.length && (
        <MovieLists title={"Now Playing"} data={nowPlaying} />
      )}
      {popularMovies.length && (
        <MovieLists title={"popular Movies"} data={popularMovies} />
      )}
      {topRated.length && <MovieLists title={"top Rated"} data={topRated} />}
      {upcoming.length && <MovieLists title={"upcoming"} data={upcoming} />}
    </div>
  );
};
export default SecondaryContainer;
