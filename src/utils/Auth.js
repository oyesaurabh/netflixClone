import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

const handleSignUpUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      return { status: true, message: "successfully created" };
    })
    .catch((error) => {
      const errorMessage = error.message;
      return { status: false, message: errorMessage };
    });
};
const handleSignInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return { status: true, message: "successfully Signed In" };
    })
    .catch((error) => {
      const errorMessage = error.message;
      return { status: false, message: errorMessage };
    });
};
export { handleSignInUser, handleSignUpUser };
