import { IoMdNotifications } from "react-icons/io";
import ProfileImg from "../../assets/Images/testimonyImg1.jpg";
import Logo1 from "../../assets/Images/swiftcurrent-blueLogo.png";
import { AlignJustify, X } from "lucide-react";

const Header = ({isOpen, setIsOpen, setClicked}) => {
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
      setClicked(null);
    };
  return (
    <section className="w-full flex items-center justify-between py-6 px-4">
      <div className="w-full">
        <div className="w-full flex items-center gap-2">
          <div className="w-[60px] md:w-[70px] lg:w-[80px]">
            <img src={Logo1} alt="" className="w-full" />
          </div>
          <h2 className="font-black text-primary text-lg md:text-xl lg:text-[26px]">
            SWIFT CURRENT
          </h2>
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
            
              <button
                className="md:hidden outline-none"
                onClick={toggleDrawer}
              >
                {isOpen ? <X /> : <AlignJustify />}
              </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
