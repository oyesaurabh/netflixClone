import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeRequest } from "./index";

const useGetMovies = (endpoint, actionCreator) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await makeRequest(endpoint);
    dispatch(actionCreator(res.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useGetMovies;
