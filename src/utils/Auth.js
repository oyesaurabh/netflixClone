import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { addUser } from "../hooks/userSlice";

// Signed up
const handleSignUpUser = async (email, password, userName, dispatch) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { accessToken, displayName, email } = auth.currentUser;
      updateProfile(userCredential.user, {
        displayName: userName,
      })
        .then(() => {
          dispatch(addUser({ accessToken, displayName, email })); //saving into react-redux
        })
        .catch((error) => {
          dispatch(addUser({ accessToken, email })); //saving into react-redux
          console.error("error while setting user name" + error);
        });

      return { status: true, message: "successfully Signed Up" };
    })
    .catch((error) => {
      const errorMessage = error.message;
      return { status: false, message: errorMessage };
    });
};
// Signed in
const handleSignInUser = async (email, password, dispatch) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const { accessToken, displayName, email } = auth.currentUser;
      dispatch(addUser({ accessToken, displayName, email })); //saving into react-redux
      return { status: true, message: "successfully Signed In" };
    })
    .catch((error) => {
      const errorMessage = error.message;
      return { status: false, message: errorMessage };
    });
};

export { handleSignInUser, handleSignUpUser };
