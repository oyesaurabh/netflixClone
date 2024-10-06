import { MovieCard } from "./index";
const MovieLists = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-2xl text-white">{title}</h2>
      <MovieCard data={data} />
    </div>
  );
};
export default MovieLists;
