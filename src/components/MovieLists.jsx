import { MovieCard } from "./index";
const MovieLists = ({ title, data }) => {
  return (
    <div className="px-6 py-4">
      <h2 className="text-m md:text-2xl text-white mb-4">{title}</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {data.map(({ original_title, poster_path, id }) => (
            <MovieCard
              key={id}
              original_title={original_title}
              poster_path={poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieLists;
