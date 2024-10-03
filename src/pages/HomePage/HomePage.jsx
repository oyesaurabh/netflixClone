import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeUser } from "../../hooks/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  const handleLogout = () => {
    if (!user) return;
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <>
      HOME PAGE
      <button
        className="p-4 m-4 bg-red-500 hover:bg-red-700 text-white rounded-xl"
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    </>
  );
};
export default HomePage;
