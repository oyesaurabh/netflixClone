import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { addUser } from "../hooks/userSlice";

// Signed up
const handleSignUpUser = async ({
  email,
  password,
  userName,
  photoURL,
  dispatch,
}) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { accessToken, displayName, email } = auth.currentUser;
      updateProfile(userCredential.user, {
        displayName: userName,
        photoURL,
      })
        .then(() => {
          //saving into store again for photoURL and displayName
          dispatch(addUser({ accessToken, displayName, photoURL, email }));
        })
        .catch((error) => {
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
const handleSignInUser = async ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return { status: true, message: "successfully Signed In" };
    })
    .catch((error) => {
      const errorMessage = error.message;
      return { status: false, message: errorMessage };
    });
};

export { handleSignInUser, handleSignUpUser };
