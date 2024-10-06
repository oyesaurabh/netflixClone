import { useSelector } from "react-redux";
import { VideoBackground, VideoTitle } from "../../../components";
const MainContainer = () => {
  const [mainMovie] = useSelector((store) => store.movies?.nowPlaying);
  if (!mainMovie) return; //early return

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
