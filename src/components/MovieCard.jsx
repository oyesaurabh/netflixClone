import { baseUrl } from "../data/const";
import { RadialProgress } from "./index";

export default function MovieCard({ original_title, poster_path, rating }) {
  return (
    <>
      <div className="relative w-28 md:w-40 flex-shrink-0">
        <div className="absolute bottom-0">
          <RadialProgress
            percentage={rating?.toFixed(2)}
            fgColor={rating > 8 ? "green" : rating < 5 ? "red" : "yellow"}
          />
        </div>
        <img
          alt={original_title}
          src={baseUrl + "/w500" + poster_path}
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
