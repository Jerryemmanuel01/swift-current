import { IoMdNotifications } from "react-icons/io";
import ProfileImg from "../../assets/Images/testimonyImg1.jpg"

const Header = () => {
  return (
    <section className="w-full flex items-end justify-end px-6 py-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <IoMdNotifications className="text-xl"/>
          <span className="bg-red-600 w-3.5 h-3.5 rounded-full absolute flex items-center justify-center text-[9px] font-bold text-white -top-1 -right-1">2</span>
        </div>
        <div className="">
          <img src={ProfileImg} alt="" className="w-8 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Header;
