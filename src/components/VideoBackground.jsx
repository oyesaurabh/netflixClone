import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useGetTitleMovie } from "../hooks/custom";
import Loading from "./Loading";

const VideoBackground = ({ movieId }) => {
  useGetTitleMovie({ movieId }); // this will store title movie data into store.
  const titleMovie = useSelector((store) => store.movies?.titleMovie);
  const [videoKey, setVideoKey] = useState(null);
  useEffect(() => {
    if (titleMovie) {
      setVideoKey(titleMovie.key);
    }
  }, [titleMovie]);
  return (
    <>
      {videoKey ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube-nocookie.com/embed/${videoKey}?autoplay=1&controls=0&loop=1&mute=1`}
          title="YouTube video player"
        ></iframe>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default VideoBackground;
