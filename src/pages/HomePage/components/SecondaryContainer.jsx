import { useSelector } from "react-redux";
import { MovieLists } from "../../../components";
const SecondaryContainer = () => {
  const { nowPlaying, popularMovies, topRated, upcoming } = useSelector(
    (store) => store.movies
  );
  return (
    <div className="bg-black md:px-2">
      {nowPlaying.length > 0 && (
        <div className="relative mt-[-20px] md:mt-[-50px] lg:mt-[-300px]">
          <MovieLists title={"Now Playing"} data={nowPlaying} />
        </div>
      )}
      {popularMovies.length > 0 && (
        <MovieLists title={"Popular Movies"} data={popularMovies} />
      )}
      {topRated.length > 0 && (
        <MovieLists title={"Top Rated"} data={topRated} />
      )}
      {upcoming.length > 0 && <MovieLists title={"Upcoming"} data={upcoming} />}
    </div>
  );
};
export default SecondaryContainer;
