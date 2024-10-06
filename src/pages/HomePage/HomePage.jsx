import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Header, Loading } from "../../components";
import { SecondaryContainer, MainContainer } from "./components";
import {
  useGetNowPlaying,
  useGetPopular,
  useGetTopRated,
  useGetUpcoming,
} from "../../hooks/custom";

const HomePage = () => {
  const navigate = useNavigate();
  useGetNowPlaying();
  useGetPopular();
  useGetUpcoming();
  useGetTopRated();

  const user = useSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) navigate("/login");
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="h-svh">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default HomePage;
