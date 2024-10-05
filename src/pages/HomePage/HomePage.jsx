import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components";
import { makeRequest } from "../../utils";
import { addNowPlaying } from "../../hooks/moviesSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) navigate("/login");

    const fetchData = async () => {
      setIsLoading(false);
      const res = await makeRequest(
        "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      );
      dispatch(addNowPlaying(res.results));
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      {}
    </>
  );
};

export default HomePage;
