import { useEffect, useRef, useState } from "react";
import { Header } from "../../components";
import { BG_URL } from "../../data/const";
import {
  checkEmail,
  checkPassword,
  handleSignInUser,
  handleSignUpUser,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);
  const userPhotoRef = useRef(null);

  //checking if we are already signed in, and if so, goto /
  const user = useSelector((store) => store.user);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  //handle sign in and sign up action
  const handleSubmit = async () => {
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const userName = userNameRef?.current?.value;
    const photoURL = userPhotoRef?.current?.value;

    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);

    if (!isEmailValid) setErrorMessage("Email not Valid");
    else if (!isPasswordValid) setErrorMessage("Password not Valid");
    else {
      let response = {};
      if (isSignIn) response = await handleSignInUser({ email, password });
      else
        response = await handleSignUpUser({
          email,
          password,
          userName,
          photoURL,
          dispatch,
        });

      if (!response.status) setErrorMessage(response.message);
      else {
        navigate("/");
      }
    }
  };

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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {!isSignIn && (
                <>
                  <input
                    ref={userNameRef}
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <input
                    ref={userPhotoRef}
                    type="text"
                    placeholder="Photo URL"
                    className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </>
              )}
              <input
                ref={emailRef}
                type="email"
                placeholder="Email or phone number"
                className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="text-red-600">{errorMessage}</p>
              <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <div className="mt-6 text-gray-400 text-sm">
              {isSignIn ? "New to Netflix? " : "Already have an account? "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={() => {
                  setIsSignIn(!isSignIn);
                  setErrorMessage("");
                }}
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
