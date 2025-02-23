import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/swiftcurrent-whiteLogo.png";
import Logo1 from "../../assets/Images/white-name-logo.png";
const Header = () => {
  return (
    <section className=" bg-primary ">
      <div className="lg:max-w-[1200px] flex flex-col items-center justify-center mx-auto px-6 py-6 relative">
        <div className="w-full items-center justify-center flex">
          <div className="md:flex w-full justify-between items-center">
            <div className="flex justify-between items-center md:w-1/3">
              <Link
                to="/home"
                className="flex items-center gap-2 sm:hidden lg:flex"
              >
                <div className="w-[60px] md:w-[70px] lg:w-[80px]">
                  <img src={Logo} alt="" className="w-full" />
                </div>
                <h2 className="font-black text-white text-lg md:text-xl lg:text-[26px]">
                  SWIFT CURRENT
                </h2>
              </Link>
              <Link
                to="/home"
                className="items-center gap-2 hidden sm:flex lg:hidden "
              >
                <div className="w-[70px] ">
                  <img src={Logo1} alt="" className="w-full" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
