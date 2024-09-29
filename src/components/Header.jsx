import { LOGO_URL } from "../data/const";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 p-4 sm:p-6 z-10">
      <img src={LOGO_URL} alt="logo" className="w-24 sm:w-32 md:w-40" />
    </div>
  );
};
export default Header;
