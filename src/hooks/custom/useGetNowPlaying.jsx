import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeRequest } from "../../utils";
import { addNowPlaying } from "../moviesSlice";

const useGetNowPlaying = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await makeRequest(
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
    dispatch(addNowPlaying(res.results));
  };
  useEffect(() => {
    fetchData();
  }, []);
};
export default useGetNowPlaying;
