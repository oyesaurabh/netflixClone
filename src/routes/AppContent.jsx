import { Routes, Route } from "react-router-dom";
import routeData from "./route";
// import { useEffect } from "react";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../hooks/userSlice";

export default function AppContent() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { accessToken, displayName, email } = user;
  //       dispatch(addUser({ accessToken, displayName, email })); //saving into react-redux
  //     } else {
  //       dispatch(removeUser());
  //     }
  //   });
  // }, []);

  return (
    <Routes>
      {routeData.map((route, i) => (
        <Route key={i} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
