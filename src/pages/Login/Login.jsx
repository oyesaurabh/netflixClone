import { useState } from "react";
import { Header } from "../../components";
import { BG_URL } from "../../data/const";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <div
        className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black sm:bg-cover sm:bg-center sm:bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${BG_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full sm:max-w-md">
          <div className="bg-black bg-opacity-75 p-8 sm:p-10 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            <form className="space-y-6">
              {!isSignIn && (
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              )}
              <input
                type="email"
                placeholder="Email or phone number"
                className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300">
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <div className="mt-6 text-gray-400 text-sm">
              {isSignIn ? "New to Netflix? " : "Already have an account? "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn ? "Sign up now" : "Sign in"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
