import { useState } from "react";
import { navLinks } from "../../lib/utils";
import { Link } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";
const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <section className=" bg-primary ">
      <div className="lg:max-w-[1200px] flex flex-col items-center justify-center mx-auto px-6 py-4 relative">
        <div className="w-full items-center justify-center flex">
          <div className="md:flex w-full justify-between items-center">
            <div className="flex justify-between items-center md:w-1/3">
              <h2 className="md:text-3xl font-bold text-white">LOGO</h2>
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
                    className="py-3 px-2 md:px-4 border-b md:border-none text-sm md:text-base md:text-white"
                  >
                    <Link
                      to={link.link}
                      onClick={() => setToggleNav(false)}
                      className={`font-medium duration-300 hover:text-yellow`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 flex-col md:flex-row items-center text-sm md:text-base">
                <button className="outline-none w-full md:w-auto border-[1.5px] border-primary md:border-white px-6 py-2 rounded-lg text-primary md:text-white font-semibold hover:scale-[1.03] duration-300">
                  Login
                </button>
                <button className="bg-primary md:bg-white w-full md:w-auto text-white md:text-primary py-2.5 px-6 rounded-lg font-semibold hover:scale-[1.03] duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
