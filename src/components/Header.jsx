import { signOut } from "firebase/auth";
import { LOGO_URL } from "../data/const";
import { auth } from "../config/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      alert("ERROR: ", error.message);
    });
  };
  return (
    <div className="absolute top-0 left-0 p-4 sm:p-6 z-10 flex justify-between w-full bg-gradient-to-b from-black">
      <img src={LOGO_URL} alt="logo" className="w-24 sm:w-32 md:w-40" />
      {user && (
        <div>
          <img
            src={`${
              user?.photoURL ? user.photoURL : "/images/no-profileURL.jpg"
            }`}
            alt="logout"
            title={`logout ${user.displayName}?`}
            className="w-8 md:w-12 cursor-pointer hover:animate-pulse"
            onClick={handleLogout}
          />
        </div>
      )}
    </div>
  );
};
export default Header;
