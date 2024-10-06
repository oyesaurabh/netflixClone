import { Button } from "../../components";
const NoPageFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404: NOT FOUND</h1>
        <p className="text-xl mb-8">
          The page you are looking for does not exist.
        </p>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NoPageFound;
