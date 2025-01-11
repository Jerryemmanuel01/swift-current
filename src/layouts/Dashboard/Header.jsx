import { IoMdNotifications } from "react-icons/io";
import ProfileImg from "../../assets/Images/testimonyImg1.jpg";
import Logo1 from "../../assets/Images/swiftcurrent-blueLogo.png";
import { AlignJustify, X } from "lucide-react";

const Header = () => {
  return (
    <section className="w-full flex items-center justify-between py-6 px-4">
      <div className="w-full">
        <div className="w-full flex items-center gap-2">
          <div className="w-[40px] md:w-[50px] lg:w-[60px]">
            <img src={Logo1} alt="" className="w-full" />
          </div>
          <h2 className="font-black text-primary text-lg md:text-xl lg:text-[26px]">SWIFT CURRENT</h2>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <IoMdNotifications className="text-xl md:text-2xl" />
          <span className="bg-red-600 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full absolute flex items-center justify-center text-[9.5px] font-bold font-poppins text-white -top-1 -right-1">
            2
          </span>
        </div>
        <div className="w-full">
          <div className="w-8 ">
            <img
              src={ProfileImg}
              alt=""
              className="w-8 rounded-full border border-primary md:block hidden"
            />
            <div className="w-full md:hidden">
              <AlignJustify className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
