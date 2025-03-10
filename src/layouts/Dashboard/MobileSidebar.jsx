import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../lib/links";
import { ChevronDown, ChevronRight, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import HomeAboutBg from "../../assets/Images/service6.webp";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useLogout from "../../hooks/dashboardHooks/useLogout";

const MobileSidebar = ({
  isOpen,
  setIsOpen,
  clicked,
  setClicked,
  logoutBtn,
}) => {
  const { user } = useSelector((state) => state.userInfo);
  const [headerFixed, setheaderFixed] = useState(false);
  const location = useLocation();
  const isRole = user.userInfo.role;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setheaderFixed(true);
      } else {
        setheaderFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //add event listener

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  const toggleDrawer = () => {
    setIsOpen(false);
    setClicked(null);
  };
  return (
    <section className={``}>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed bg-black opacity-30 w-full h-full top-0"
        ></div>
      )}
      <motion.div
        className={`fixed w-[250px] md:hidden left-0 right-0 z-10 md:top-0 overflow-y-auto h-[95vh] bg-white border-r border-[#e7e5e5]`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <div className="">
          <div
            className="bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${HomeAboutBg})` }}
          >
            <div className="bg-primary/60 flex flex-col justify-center items-center text-white h-20 mb-12 relative">
              <div className="absolute -translate-x-[50%] -translate-y-[50%] top-[100%] left-[50%] rounded-full w-20">
                <img
                  src={user.userInfo?.profileImage}
                  alt=""
                  className="w-20 h-20 object-cover rounded-full border-[6px] border-[#002f5b56]"
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="font-merriweather capitalize text-center font-semibold text-primary">
              {user.userInfo?.userName}
            </h2>
            {isRole === "User" ? (
              <Link
                onClick={toggleDrawer}
                to="/dashboard/profile"
                className="text-center flex items-center justify-center text-gray text-sm"
              >
                Profile <ChevronRight className="w-4" />
              </Link>
            ) : (
              <h2 className="text-center flex items-center justify-center text-gray text-sm">
                {isRole}
              </h2>
            )}
          </div>
        </div>
        <ul className=" pr-2">
          {sidebarLinks.map((val, i) => {
            const Icon = val.icon;
            const isClicked = clicked === i;
            const hasSubMenu = val.subMenu?.length;
            const role = val.role;
            return (
              <div className="" key={i}>
                {isRole === "User" &&
                  role === "user" &&
                  (hasSubMenu ? (
                    <li>
                      <span
                        className={`${
                          location.pathname === val.link
                            ? "bg-primary/20 font-bold text-primary"
                            : ""
                        } flex gap-3 items-center text-sm md:text-base py-3 px-6 duration-300 hover:bg-primary/10 rounded-e-full cursor-pointer`}
                        onClick={() => setClicked(isClicked ? null : i)}
                      >
                        <Icon className="md:w-4 w-3.5" />
                        {val.name}
                        {hasSubMenu && (
                          <ChevronDown
                            className={`ml-auto w-4 ${
                              isClicked && "rotate-180"
                            } `}
                          />
                        )}
                      </span>
                      {hasSubMenu && (
                        <motion.ul
                          initial="exit"
                          animate={isClicked ? "enter" : "exit"}
                          variants={subMenuDrawer}
                          className="pl-14 text-xs md:text-sm"
                        >
                          {val.subMenu?.map(({ name, link }) => (
                            <li className="list-disc" key={name}>
                              <Link
                                onClick={toggleDrawer}
                                to={link}
                                className={`${
                                  location.pathname === val.link
                                    ? "font-bold text-primary"
                                    : ""
                                } py-2 block rounded-e-full list-disc cursor-pointer hover:font-bold duration-300`}
                              >
                                {name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </li>
                  ) : (
                    <li className="pb-0.5">
                      <Link
                        onClick={toggleDrawer}
                        to={val.link}
                        className={`${
                          location.pathname === val.link
                            ? "bg-primary/20 font-bold text-primary"
                            : ""
                        } flex gap-3 items-center text-sm md:text-base py-3 px-6 duration-300 hover:bg-primary/10 rounded-e-full`}
                      >
                        <Icon className="md:w-4 w-3.5" />
                        {val.name}
                      </Link>
                    </li>
                  ))}

                {isRole !== "User" && role === "admin" && (
                  <li className="pb-0.5">
                    <Link
                      onClick={toggleDrawer}
                      to={val.link}
                      className={`${
                        location.pathname === val.link
                          ? "bg-primary/20 font-bold text-primary"
                          : ""
                      } flex gap-3 items-center text-sm md:text-base py-3 px-6 duration-300 hover:bg-primary/10 rounded-e-full`}
                    >
                      <Icon className="md:w-4 w-3.5" />
                      {val.name}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}

          <button
            name="action"
            onClick={() => logoutBtn()}
            className={`flex gap-3 items-center text-sm md:text-base px-6 outline-none hover:text-primary duration-300 mb-20 ${
              isRole === "User" ? "mt-10" : "mt-4"
            }`}
          >
            <LogOut className="md:w-4 w-3.5" /> Logout
          </button>
        </ul>
      </motion.div>
    </section>
  );
};

export default MobileSidebar;
