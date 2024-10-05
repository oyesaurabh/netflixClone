import { Routes, Route, useNavigate } from "react-router-dom";
import routeData from "./route";
import { useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../hooks/userSlice";

export default function AppContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const subs = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, photoURL, email } = user;
        dispatch(addUser({ accessToken, displayName, photoURL, email })); //saving into react-redux
      }
      if (!user) {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => subs();
  }, []);

  return (
    <Routes>
      {routeData.map((route, i) => (
        <Route key={i} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}
