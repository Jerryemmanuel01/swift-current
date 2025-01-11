import { useState } from "react";
import { navLinks } from "../../lib/utils";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/swiftcurrent-whiteLogo.png";
import Logo1 from "../../assets/Images/white-name-logo.png";
import { AlignJustify, X } from "lucide-react";
const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();

  return (
    <section className=" bg-primary ">
      <div className="lg:max-w-[1200px] flex flex-col items-center justify-center mx-auto px-6 py-4 relative">
        <div className="w-full items-center justify-center flex">
          <div className="md:flex w-full justify-between items-center">
            <div className="flex justify-between items-center md:w-1/3">
              <Link to="/home" className="flex items-center gap-2 sm:hidden lg:flex">
                <div className="w-[40px] md:w-[50px] lg:w-[60px]">
                  <img src={Logo} alt="" className="w-full" />
                </div>
                <h2 className="font-black text-white text-lg md:text-xl lg:text-[26px]">
                  SWIFT CURRENT
                </h2>
              </Link>
              <Link to="/home" className="items-center gap-2 hidden sm:flex lg:hidden ">
                <div className="w-[70px] ">
                  <img src={Logo1} alt="" className="w-full" />
                </div>
              </Link>
              <button
                className="md:hidden outline-none text-white"
                onClick={() => setToggleNav((prev) => !prev)}
              >
                {toggleNav ? <X /> : <AlignJustify />}
              </button>
            </div>
            <div
              className={` fixed bg-white md:bg-transparent transition-all duration-500 md:left-0 top-0 border-r md:border-none ${
                toggleNav
                  ? "opacity-100 left-0"
                  : "-left-96 opacity-0 md:opacity-100 "
              }   md:relative md:flex justify-between w-2/3 md:w-full lg:w-2/3 items-center pt-4 pb-7 md:py-0 px-6 md:px-0 h-screen md:h-auto`}
            >
              <ul className=" md:flex pb-7 md:pb-0">
                {navLinks.map((link, i) => (
                  <li
                    key={i}
                    className="py-3 px-2 md:px-4 border-b border-[#D0D5DD] md:border-none text-sm md:text-base md:text-white"
                  >
                    <Link
                      to={link.link}
                      onClick={() => setToggleNav(false)}
                      className={`${
                        location.pathname === link.link ? "text-yellow" : ""
                      } font-medium duration-300 hover:text-yellow`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 flex-col md:flex-row items-center text-sm md:text-base">
                <Link
                  to="/auth/login"
                  className="outline-none text-center w-full md:w-auto border-[1.5px] border-primary md:border-white px-6 py-2 rounded-lg text-primary md:text-white font-semibold hover:scale-[1.03] duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/auth/sign-up"
                  className="bg-primary text-center md:bg-white w-full md:w-auto text-white md:text-primary py-2.5 px-6 rounded-lg font-semibold hover:scale-[1.03] duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
