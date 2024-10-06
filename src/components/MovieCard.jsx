import { baseUrl } from "../data/const";

export default function MovieCard({ data }) {
  return (
    <div className="flex gap-2 w-40">
      {data.map((item) => (
        <img
          key={item.id}
          alt={item.original_title}
          src={baseUrl + "/w500" + item.poster_path}
        />
      ))}
    </div>
  );
}
