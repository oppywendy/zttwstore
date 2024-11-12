import { CiSearch } from "react-icons/ci";
import logo from "../assets/zttw.gif";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full h-20 justify-between items-center flex">
      <div></div>
      <div className="w-12 h-20 items-center flex">
        <img src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center gap-5 pr-7">
        <CiSearch size={20} />
        <IoBagHandleOutline size={20} />
      </div>
    </div>
  );
};

export default Header;
