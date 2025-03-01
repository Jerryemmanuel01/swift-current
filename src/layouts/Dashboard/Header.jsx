import { IoMdNotifications } from "react-icons/io";
import ProfileImg from "../../assets/Images/testimonyImg1.jpg";
import Logo1 from "../../assets/Images/swiftcurrent-blueLogo.png";
import { AlignJustify, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ isOpen, setIsOpen, setClicked }) => {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };
  const { user } = useSelector((state) => state.userInfo);
  const userInfo = user?.userInfo
  
  return (
    <section className="w-full flex items-center justify-between py-6 px-6 h-[80px] fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="">
        <Link className="flex items-center gap-2" to="/dashboard">
          <div className="w-[60px] md:w-[70px] lg:w-[80px]">
            <img src={Logo1} alt="" className="w-full" />
          </div>
          <h2 className="font-black text-primary text-lg md:text-xl lg:text-[26px]">
            SWIFT CURRENT
          </h2>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <span className="relative">
          <IoMdNotifications className="text-xl md:text-2xl" />
          <span className="bg-red-600 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full absolute flex items-center justify-center text-[9.5px] font-bold font-poppins text-white -top-1 -right-1">
            2
          </span>
        </span>
        <div className="w-full md:hidden ">
          <div className="w-8 ">
            <button className="outline-none" onClick={toggleDrawer}>
              {isOpen ? <X /> : <AlignJustify />}
            </button>
          </div>
        </div>
      </div>
      <Link
        to={userInfo !== "User" ? "/admin/settings" : "/dashboard/settings"}
        className="hidden md:flex w-10 h-10 rounded-full fixed z-10 bottom-6 right-6 bg-secondary items-center justify-center text-white md:text-3xl text-2xl"
      >
        <Settings className="animate-spin w-5" />
      </Link>
    </section>
  );
};

export default Header;
