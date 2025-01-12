import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../lib/links";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const MobileSidebar = ({ isOpen, setIsOpen, clicked, setClicked }) => {
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
  const toggleDrawer = () => {
    setIsOpen(false);
    setClicked(null);
  };
  return (
    <section className="">
      <motion.div
        className={`fixed w-[250px] md:hidden left-0 right-0 top-20 md:top-0 overflow-y-auto h-full backdrop-blur-3xl border-r border-[#e7e5e5] pr-2`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul className="">
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
                      } flex gap-3 items-center text-sm md:text-base py-3 px-5 duration-300 hover:bg-primary/20 rounded-e-full cursor-pointer`}
                      onClick={() => setClicked(isClicked ? null : i)}
                    >
                      <Icon className="md:w-4 w-3.5" />
                      {val.name}
                      {hasSubMenu && (
                        <ChevronDown
                          className={`ml-auto w-4 ${isClicked && "rotate-180"} `}
                        />
                      )}
                    </span>
                    {hasSubMenu && (
                      <motion.ul
                        initial="exit"
                        animate={isClicked ? "enter" : "exit"}
                        variants={subMenuDrawer}
                        className="pl-14 bg-[#e8e7e7] text-xs md:text-sm"
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
                      } flex gap-3 items-center text-sm md:text-base py-3 px-5 duration-300 hover:bg-primary/20 rounded-e-full`}
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

export default MobileSidebar;
