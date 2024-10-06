import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeRequest } from "../../utils";
import { addTitleMovie } from "../moviesSlice";

const useGetTitleMovie = ({ movieId }) => {
  const dispatch = useDispatch();

  const fetchVideo = async (url) => {
    const { results } = await makeRequest(url);
    let videoObj;
    videoObj = results?.find((item) => item.type.toLowerCase() == "trailer");
    if (!videoObj) videoObj = results[0];

    dispatch(addTitleMovie(videoObj));
  };

  useEffect(() => {
    fetchVideo(`https://api.themoviedb.org/3/movie/${movieId}/videos`);
  }, []);
};
export default useGetTitleMovie;
