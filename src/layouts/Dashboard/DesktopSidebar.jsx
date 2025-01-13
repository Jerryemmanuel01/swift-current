import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../lib/links";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import HomeAboutBg from "../../assets/Images/service6.jpg";
import ProfileImg from "../../assets/Images/testimonyImg1.jpg";

const DesktopSidebar = ({ clicked, setClicked }) => {
  const location = useLocation();

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

  return (
    <section className="">
      <motion.div
        className={`w-[250px] dashbboard-sidebar overflow-y-auto h-[90vh] backdrop-blur-3xl border-r border-[#e7e5e5]`}
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
      >
        <style>
          {`
          div {
            scrollbar-width: thin; /* For Firefox */
            scrollbar-color: rgb(0 47 91 / 0.2) transparent; /* Thumb color, Track color */
          }
          div::-webkit-scrollbar {
            width: 5px; /* Scrollbar width for Webkit-based browsers */
          }
          div::-webkit-scrollbar-thumb {
            background-color: #f9c90d; /* Thumb color */
          }
          div::-webkit-scrollbar-track {
            background: #f9c90d; /* Track color */
          }
        `}
        </style>
        <div className="">
          <div
            className="bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${HomeAboutBg})` }}
          >
            <div className=" bg-primary/60 flex flex-col justify-center items-center text-white h-20 mb-12 relative">
              <div className="absolute -translate-x-[50%] -translate-y-[50%] top-[100%] left-[50%] rounded-full w-20">
                <img
                  src={ProfileImg}
                  alt=""
                  className="w-full rounded-full border-[6px] border-[#002f5b56]"
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="font-merriweather text-center font-semibold text-lg text-primary">
              Username
            </h2>
            <h4 className="text-center text-gray text-sm">Savings</h4>
          </div>
        </div>
        <ul className=" pr-2">
          {sidebarLinks.map((val, i) => {
            const Icon = val.icon;
            const isClicked = clicked === i;
            const hasSubMenu = val.subMenu?.length;
            return (
              <div className="" key={i}>
                {hasSubMenu ? (
                  <li>
                    <span
                      className={`${
                        location.pathname === val.link
                          ? "bg-primary/20 font-bold text-primary"
                          : ""
                      } flex gap-3 items-center text-sm md:text-base py-3 px-6 duration-300 hover:bg-primary/20 rounded-e-full cursor-pointer`}
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
                        className="pl-14 bg-[#f4f4ffsd4] rounded-e-xl  text-xs md:text-sm"
                      >
                        {val.subMenu?.map(({ name, link }) => (
                          <li key={name} className="list-disc">
                            <Link
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
                      to={val.link}
                      className={`${
                        location.pathname === val.link
                          ? "bg-primary/20 font-bold text-primary"
                          : ""
                      } flex gap-3 items-center text-sm md:text-base py-3 px-6 duration-300 hover:bg-primary/20 rounded-e-full`}
                    >
                      <Icon className="md:w-4 w-3.5" />
                      {val.name}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default DesktopSidebar;
