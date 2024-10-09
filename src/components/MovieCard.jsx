import { baseUrl } from "../data/const";

export default function MovieCard({ original_title, poster_path }) {
  return (
    <div className="w-28 md:w-40 flex-shrink-0">
      <img
        alt={original_title}
        src={baseUrl + "/w500" + poster_path}
        className="w-full h-auto"
      />
    </div>
  );
}
