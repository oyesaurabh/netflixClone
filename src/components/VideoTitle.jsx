import { Button } from "./index";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-full px-12 text-white bg-gradient-to-r from-black pt-20 sm:pt-36 md:pt-42 lg:pt-64">
      <h1 className="text-3xl font-serif font-semibold w-1/2 md:w-1/3 md:text-6xl">
        {title}
      </h1>
      <p className="px-2 w-1/2 md:w-1/3 hidden lg:block">{overview}</p>
      <div className="flex gap-4 m-4">
        <Button variant="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          PLAY
        </Button>
        <Button variant="secondary" className="bg-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          More Info
        </Button>
      </div>
    </div>
  );
};
export default VideoTitle;
