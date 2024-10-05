import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components";
import { useGetNowPlaying } from "../../hooks/custom";

const HomePage = () => {
  const navigate = useNavigate();
  useGetNowPlaying();

  const user = useSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) navigate("/login");
    setIsLoading(false);
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
