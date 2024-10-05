import { signOut } from "firebase/auth";
import { LOGO_URL } from "../data/const";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../hooks/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        alert("ERROR: ", error.message);
      });
  };
  return (
    <div className="absolute top-0 left-0 p-4 sm:p-6 z-10 flex justify-between w-full">
      <img src={LOGO_URL} alt="logo" className="w-24 sm:w-32 md:w-40" />
      {user && (
        <div>
          <img
            src={"/images/logout.png"}
            alt="logout"
            title="logout"
            className="w-4 sm:w-8 md:w-12 cursor-pointer hover:animate-pulse"
            onClick={handleLogout}
          />
        </div>
      )}
    </div>
  );
};
export default Header;
